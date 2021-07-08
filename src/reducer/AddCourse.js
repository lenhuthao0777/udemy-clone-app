import { ADD_COURSE_REQUEST, ADD_COURSE_SUCCESS, ADD_COURSE_FAILURE } from "constants/AddCourseContants";

const initialState = {
    addNewCourse: {
        maKhoaHoc: "",
        biDanh: "",
        tenKhoaHoc: "",
        moTa: "",
        luotXem: 0,
        danhGia: 0,
        hinhAnh: {},
        maNhom: "",
        ngayTao: "",
        maDanhMucKhoaHoc: "",
        taiKhoanNguoiTao: "",
    },
    isLoading: false,
    error: null,
    huy: {},
};
export default function AddCourse(state = initialState, action) {
    switch (action.type) {
        case ADD_COURSE_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case ADD_COURSE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                addCourseData: action.payload.data,
            };
        }
        case ADD_COURSE_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        default:
            return state;
    }
}
