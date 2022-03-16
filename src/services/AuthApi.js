import { axiosClient } from "./axiosClient";

const authApi = {
    login: (values) => {
        return axiosClient.post("/QuanLyNguoiDung/DangNhap", values);
    },
    signUp: (values) => {
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
    getUserByPage: (page,pageSize) => {
        return axiosClient.get(`/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP07&page=${page}&pageSize=${pageSize}`);
    },
};

export default authApi;
