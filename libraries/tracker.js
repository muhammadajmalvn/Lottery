let startDate = new Date();
let session = 1;
export function trackfn(...logs) {
  let endDate = new Date();
  let seconds = (endDate.getTime() - startDate.getTime()) / 1000;
  if (seconds > 10) {
    console.info(
      `%c===========================================\n
                Session ${session}\n
===========================================`,
      "color: white; font-style: italic; font-weight:bold; font-size:14px"
    );
    session++;
    startDate = new Date();
  }
  if (logs.length > 0) {
    //console.log(logs);
    try {
      if (localStorage.getItem("development")) {
        console.info("%c" + logs[0], "color: orange; font-style: italic; font-weight:bold; font-size:14px");
        let obj = logs.reduce(function (result, current, index) {
          if (index != 0) {
            if (typeof current == "object") {
              return Object.assign(result, current);
            }
            return Object.assign(result, { [index - 1]: current });
          }
          return result;
        }, {});
        console.info(obj);
      }
    } catch (error) {}
  }
}
