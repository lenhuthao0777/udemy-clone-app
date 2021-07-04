import axios from "axios";
import qs from "qs";
const axiosClient = axios.create({
    baseURL: "https://elearning0706.cybersoft.edu.vn/api",
    // tu cau hinh cach lay params mac dinh cua axios
    // bo qua gia tri null va undefined trong params
    // headers: "Access-Control-Allow-Origin: *",

    paramsSerializer: (params) => qs.stringify(params, { skipNulls: true }),
});
axiosClient.interceptors.request.use(
    (config) => {
        // su ly config trc khi dua len server
        // them authorization
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            const { accessToken } = JSON.parse(userInfo);
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        // xu ly request loi
        return Promise.reject(error);
    }
);
axiosClient.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.status === 401) {
            // xu ly logout: clear localStorage , day nguoi dung ve trang login
        }
        if (error.status === 500) {
            // xu ly thong bao cho nguoi dung server bi loi
        }
        return Promise.reject(error);
    }
);
export { axiosClient };
