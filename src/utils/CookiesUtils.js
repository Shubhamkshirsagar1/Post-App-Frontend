import Cookies from "js-cookie";

export const getCookies = () => {
  const Cookie = Cookies.get("connect.sid");
  return Cookie;
};
