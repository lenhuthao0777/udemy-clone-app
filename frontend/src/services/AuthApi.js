import { axiosClient } from "./axiosClient";

const authApi = {
    login: (values) => {
        // New backend uses /auth/login
        return axiosClient.post("/auth/login", values);
    },
    signUp: (values) => {
        // New backend uses /auth/register
        return axiosClient.post("/auth/register", values);
    },
    getUsers: (params = {}) => {
        // New backend uses /users for listing
        return axiosClient.get("/users", { params });
    },
    addUser: (values) => {
        // New backend uses POST /users
        return axiosClient.post("/users", values);
    },
    deleteUser: (id) => {
        // New backend uses DELETE /users/:id
        return axiosClient.delete(`/users/${id}`);
    },
    updateUser: (id, values) => {
        // New backend uses PUT /users/:id
        return axiosClient.put(`/users/${id}`, values);
    },
    searchUser: (keyword) => {
        // New backend uses search query param on /users
        return axiosClient.get("/users", { params: { search: keyword } });
    },
    getUserByPage: (page, pageSize) => {
        // New backend uses standard pagination params
        return axiosClient.get("/users", { params: { page, limit: pageSize } });
    },
};

export default authApi;

