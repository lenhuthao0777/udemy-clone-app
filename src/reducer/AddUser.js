import { ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAILURE } from "../constants/AddUserContants";
const initialState = {
    addUserData: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDT: "",
        maLoaiNguoiDung: "",
        maNhom: "",
        email: "",
    },
    isLoading: false,
    error: null,
    status: "",
};
export default function AddUser(state = initialState, action) {
    switch (action.type) {
        case ADD_USER_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case ADD_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                addUserData: action.payload.data,
                status: action.payload.status,
            };
        }
        case ADD_USER_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        default:
            return state;
    }
}
