export const userData = () => {
    let user = null;
    if (typeof localStorage != "undefined" && localStorage.getItem("user")) {
      user = JSON.parse(localStorage.getItem("user"));
    }
    return user;
  };
  