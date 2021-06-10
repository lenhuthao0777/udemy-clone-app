const { axiosClient } = require("./axiosClient");

const coursesApi = {
	getCourses: () => {
		const params = { MaNhom: "GP07" };
		return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", { params });
	},
	getCoursesByCategory: (category) => {
		const params = { maDanhMuc: category, MaNhom: "GP08" };
		return axiosClient.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
			params,
		});
	},
};
export default coursesApi;
/*
    cach xai
    import coursesApi from "...."
    const {data} = await coursesApi.getCourses()
**/
