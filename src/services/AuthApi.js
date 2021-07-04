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
    addUser: (values) => {
        return axiosClient.post("/QuanLyNguoiDung/ThemNguoiDung", values);
    },
    deleteUser: (values) => {
        return axiosClient.delete(`/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${values}`);
    },
    updateUser: (values) => {
        return axiosClient.put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", values);
    },
    searchUser: (values) => {
        return axiosClient.get(`/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP07&tuKhoa=${values}`);
    },
};

export default authApi;
