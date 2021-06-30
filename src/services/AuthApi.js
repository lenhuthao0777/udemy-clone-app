import { axiosClient } from "./axiosClient";

const authApi = {
    login: (values) => {
        return axiosClient.post("/QuanLyNguoiDung/DangNhap", values);
    },
    register: (values) => {
        return axiosClient.post("/QuanLyNguoiDung/DangKy", values);
    },
    getUsers: () => {
        const params = { MaNhom: "GP07" };
        return axiosClient.get("/QuanLyNguoiDung/LayDanhSachNguoiDung", { params });
    },
};

export default authApi;
