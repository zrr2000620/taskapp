import Axios from "axios";
import { clearToken, getToken } from "./token";
import { showFailToast } from "vant";

const http = Axios.create();

http.interceptors.request.use((options) => {
  const token = getToken();

  if (token) {
    options.headers["X-CSRF-Token"] = token;
  }

  return token;
});

http.interceptors.response.use(
  (response) => {
    const resData = response.data;
    let errorText = resData.msg ?? "系统错误";
    switch (resData?.code) {
      case 0:
        break;
      case 1:
        showFailToast(errorText);
        throw Error(response);
      case 2:
        clearToken();
        showFailToast(errorText);
        throw Error(response);
      case 3:
        showFailToast(errorText);
        throw Error(response);

      default:
        throw Error(response);
    }

    return resData.data;
  },
  (error) => {
    throw error;
  }
);

export default http;
