const { axiosClient } = require("./axiosClient");

const coursesApi = {
    getCourses: () => {
        const params = { MaNhom: "GP08" };
        return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", { params });
    },
    getCoursesByCategory: (category) => {
        const params = { maDanhMuc: category, MaNhom: "GP08" };
        return axiosClient.get("/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc", {
            params,
        });
    },
    getCourseById: (id) => {
        const params = { maKhoaHoc: id };
        return axiosClient.get("/QuanLyKhoaHoc/LayThongTinKhoaHoc", { params });
    },
    searchCourse: (name) => {
        const params = { tenKhoaHoc: name, MaNhom: "GP08" };
        return axiosClient.get("/QuanLyKhoaHoc/LayDanhSachKhoaHoc", { params });
    },
    deleteCourse: (id) => {
        return axiosClient.delete(`/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`);
    },
    addCourse: (data) => {
        return axiosClient.post("/QuanLyKhoaHoc/ThemKhoaHocUploadHinh", data);
    },
};
export default coursesApi;
/*
    cach xai
    import coursesApi from "...."
    const {data} = await coursesApi.getCourses()
**/
