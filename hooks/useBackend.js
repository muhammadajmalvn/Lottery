import { useEffect, useState } from "react";
import { trackfn } from "../libraries/tracker";
import toast from "react-hot-toast";
import { get, post, remove } from "../libraries/httpService";
let counts = {};
let requests = {};
let requestCache = {};
try {
  let items = sessionStorage.getItem("requestCache");
  let _requestCache = JSON.parse(items);
  if (_requestCache) {
    requestCache = _requestCache;
  }
} catch (error) {}

export const useBackend = (url, { select, filter, sort, offset, limit, noGet, doCache, deleteUrl, updateUrl }) => {
  if (!counts[url]) {
    counts[url] = 0;
  }
  let [filters, setFilters] = useState({});
  useEffect(() => {
    if (filters) {
      setFilters({ ...filter, ...filters });
    }
  }, []);

  if (!sort) {
    sort = { sortField: "id", sortOrder: "ASC" };
  }
  if (!offset) {
    offset = 0;
  }
  if (!limit) {
    limit = 1000;
  }

  let [count, setCount] = useState(counts[url]);
  const [status, setStatus] = useState("started");
  const [error, setError] = useState("");
  let [response, setResponse] = useState(null);
  const fetchData = async () => {
    trackfn("useBackend", url, { select, filters, sort, offset, limit, noGet });
    setError("");
    let key = "";
    try {
      key = url + JSON.stringify({ select, filters, sort, offset, limit });

      requests[key] = "";
    } catch (ex) {}
    const _response = await get(url, select, filters, sort, offset, limit);
    console.log(_response);
    try {
      if (key) {
        let res = JSON.stringify(_response.data);
        if (requests[key]) {
          console.error({ repeatedCalls: { key, res } });
        }
        requests[key] = res;
      }
    } catch (ex) {}
    if (_response.data?.error) {
      toast.error(_response.data.message + ", please reload or try again");
      setError(_response.data.message);
    } else {
      _response.data.data = _response.data?.data?.rows && _response.data?.data?.rows?.map && _response.data?.data?.rows?.map((x, i) => ({ ...x, index: i + 1 }));
      try {
        if (doCache && _response.data.data?.length) {
          requestCache[key] = _response.data;
          sessionStorage.setItem("requestCache", JSON.stringify(requestCache));
        }
      } catch (error) {
        console.log("requestCache not working");
      }
      setResponse({ ...{ data: { ..._response.data } } });
    }
    setStatus("finished");
    counts[url] = counts[url] + 1;
    setCount(counts[url]);
    return [_response.data?.data];
  };
  // if(isPromise){
  //   await fetchData();
  // }
  useEffect(() => {
    if (status == "started") {
      console.info("%c" + url + ":" + status, "color: yellow; font-style: italic; font-weight:bold; font-size:14px");
    } else if (status == "finished") {
      if (error) {
        console.info("%c" + url + ":" + status + " error:" + error + "", "color: red; font-style: italic; font-weight:bold; font-size:14px");
      } else {
        console.info("%c" + url + ":" + status + " rows:" + response?.data?.data?.length + "", "color: green; font-style: italic; font-weight:bold; font-size:14px");
      }
    } else if (status == "waiting") {
      console.info("%c" + url + ":" + status, "color: gray; font-style: italic; font-weight:bold; font-size:14px");
    } else if (status == "fetching") {
      console.info("%c" + url + ":" + status, "color: orange; font-style: italic; font-weight:bold; font-size:14px");
    }
  }, [status]);

  useEffect(() => {
    if (!url) return;
    if (!noGet) {
      setStatus("fetching");
      fetchData();
    } else {
      if (response?.data?.data) {
        //console.log(response)
      } else {
        setStatus("waiting");
      }
    }
  }, [url]);

  let _response = { rows: null, row: null };
  // if (response) {
  //   _response = response.data;
  // }
  // if (response && !response?.data) {
  //   _response.data = [];
  // }
  if (response?.data?.data?.length || status == "finished") {
    if (response?.data?.data?.length) {
      _response.rows = response.data?.data;
      if (response?.data?.data?.length) {
        _response.row = response.data?.data[0];
      }
    } else {
      _response.rows = [];
    }
  }

  try {
    if (doCache) {
      if (!_response.rows?.length) {
        let key = "";
        try {
          key = url + JSON.stringify({ select, filters, sort, offset, limit });
        } catch (ex) {}
        if (requestCache[key]) {
          _response.rows = requestCache[key]?.data;
          _response.row = requestCache[key]?.data[0];
        }
      }
    }
  } catch (error) {
    console.log("requestCache not working");
  }

  _response.setFilter = async (_filter) => {
    filters = { ...filters, ..._filter };
    setFilters({ ...filters, ...filter });
    setStatus("filtering");
    return await fetchData();
  };
  _response.setSort = async (_sort) => {
    sort = { ...sort, ..._sort };
    setStatus("sorting");
    return await fetchData();
  };
  _response.setLimit = async (_limit) => {
    limit = _limit;
    setStatus("limiting");
    return await fetchData();
  };
  _response.setOffset = async (_offset) => {
    offset = _offset;
    setStatus("limiting");
    return await fetchData();
  };
  _response.setWholeData = (value) => {
    setResponse({
      ...response,
      rows: {
        ...response.data,
        rows: value,
      },
    });
  };
  _response.updateLocal = (formData) => {
    let index = response?.data?.data?.findIndex((x) => x.id === formData.id);
    if (index >= 0) {
      formData = {
        ...response.data.data[index],
        ...formData,
      };
    }

    if (!response?.data?.data) {
      response = {
        data: {
          data: [],
        },
      };
    }

    if (index >= 0) {
      response.data.data[index] = formData;
    } else {
      let lastIndex = response?.data?.data?.length ? response.data.data.length : 0;

      if (sort?.sortOrder == "DESC") {
        formData.index = 1;
        response.data.data = [formData, ...response.data.data.map((x, i) => ({ ...x, index: i + 2 }))];
      } else {
        formData.index = lastIndex + 1;
        response.data.data = [...response.data.data, formData];
      }
    }

    setResponse({
      ...response,
    });
    counts[url] = counts[url] + 1;
    setCount(counts[url]);
  };
  _response.update = async (formData, silent, forceRefresh) => {
    let _formData = { ...formData };
    delete _formData.index;
    if (!silent) {
      setStatus("saving");
    }

    try {
      let saveResponse = await post(updateUrl || url, _formData);
      if (saveResponse.data?.success) {
        let index = response?.data?.data?.findIndex((x) => x.id === saveResponse.data.data.id);

        //console.log({ index }, { id: saveResponse.data.data.id }, { url }, { saveResponse }, { formData });
        formData.id = saveResponse.data.data.id;
        if (index >= 0) {
          formData = {
            ...response.data.data[index],
            ...formData,
          };
        }
        if (!response?.data?.data) {
          response = {
            data: {
              data: [],
            },
          };
        }
        if (!silent) {
          if (index >= 0) {
            response.data.data[index] = formData;
          } else {
            let lastIndex = response?.data?.data?.length ? response.data.data.length : 0;

            if (sort?.sortOrder == "DESC") {
              formData.index = 1;
              response.data.data = [formData, ...response.data.data.map((x, i) => ({ ...x, index: i + 2 }))];
            } else {
              formData.index = lastIndex + 1;
              response.data.data = [...response.data.data, formData];
            }
          }

          setResponse({
            ...response,
          });
          setStatus("finished");
          counts[url] = counts[url] + 1;
          setCount(counts[url]);
        }

        if (forceRefresh) {
          setStatus("refreshing");
          await fetchData();
        }
        return [formData, response.data.data, saveResponse.data];
      } else {
        setStatus("finished");
        if (saveResponse?.data?.modelState) {
          let message = [];
          saveResponse?.data?.modelState.forEach((element) => {
            message.push(element.Key + ": " + element.Value);
          });
          setError(message.join("\n"));
          return Promise.reject({ message: message.join("\n") });
        } else {
          return Promise.reject({ message: saveResponse.data.message });
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };
  _response.delete = async (formData, silent) => {
    let _formData = { ...formData };
    if (!silent) {
      setStatus("deleting");
    }
    try {
      let deleteResponse = await remove((deleteUrl || url) + "/" + _formData?.id, _formData);
      if (deleteResponse.data.success) {
        response.data.data = response.data.data.filter((x) => x.id != formData.id);

        if (!silent) {
          setResponse({
            ...response,
          });
          setStatus("finished");
          counts[url] = counts[url] + 1;
          setCount(counts[url]);
        }
        return [formData, response.data.data];
      } else {
        setStatus("finished");
        if (deleteResponse?.data?.modelState) {
          let message = [];
          deleteResponse?.data?.modelState.forEach((element) => {
            message.push(element.Key + ": " + element.Value);
          });
          setError(message.join("\n"));
          return Promise.reject({ message: message.join("\n") });
        } else {
          return Promise.reject({ message: deleteResponse.data.message });
        }
      }
    } catch (error) {
      return Promise.reject(error);
    }
  };
  console.log(url);
  console.log(_response);
  return { ..._response, status, ...{ counter: count } };
};
