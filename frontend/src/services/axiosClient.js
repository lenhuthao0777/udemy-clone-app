import axios from "axios";
import qs from "qs";

// Local NestJS backend URL
// - Docker:    set REACT_APP_API_URL=/api/v1   (nginx proxies /api/ → backend:3000)
// - Local dev: http://localhost:3000/api/v1
const BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:3000/api/v1";

const axiosClient = axios.create({
    baseURL: BASE_URL,
    paramsSerializer: (params) => qs.stringify(params, { skipNulls: true }),
});

axiosClient.interceptors.request.use(
    (config) => {
        const userInfo = localStorage.getItem("userInfo");
        if (userInfo) {
            const parsed = JSON.parse(userInfo);
            // Support both old (accessToken) and new backend token key
            const token = parsed.accessToken || parsed.token;
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

axiosClient.interceptors.response.use(
    (response) => {
        // 1. Unwrap the { data: ... } envelope from our NestJS backend
        let data = response.data;
        if (data && data.data !== undefined) {
            data = data.data;
        }

        // 2. Return the data directly without transformation
        return data;
    },
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem("userInfo");
            if (typeof window !== "undefined") {
                window.location.href = "/login";
            }
        }
        return Promise.reject(error);
    }
);

export { axiosClient };


