import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "constants/Auth";
import { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE } from "constants/DeleteUserContants";
const initialState = {
    users: [
        {
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: "",
            maNhom: "",
            email: "",
        },
    ],
    deleteUserData: {},
    isLoading: false,
    error: null,
    selectUser: [],
};
function Users(state = initialState, action) {
    console.log(action);
    switch (action.type) {
        case GET_USER_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case GET_USER_SUCCESS: {
            return { ...state, users: action.payload.data, isLoading: false };
        }
        case GET_USER_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        case DELETE_USER_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case DELETE_USER_SUCCESS: {
            const index = state.users.findIndex((user) => user.taiKhoan === action.payload.value);
            if (index !== -1) {
                state.users.splice(index, 1);
            }
            return { ...state };
        }
        case DELETE_USER_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        default:
            return state;
    }
}
export default Users;
