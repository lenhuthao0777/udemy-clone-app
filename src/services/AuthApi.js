import { axiosClient } from './axiosClient';

const authApi = {
	login: (values) => {
		return axiosClient.post('/QuanLyNguoiDung/DangNhap', values);
	},
	register: (values) => {
		return axiosClient.post('/QuanLyNguoiDung/DangKy', values);
	},
};

export default authApi;
