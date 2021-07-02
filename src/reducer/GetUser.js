import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "constants/Auth";
import { DELETE_SUCCESS } from "constants/DeleteUserContants";
import { USER_DETAIL } from "constants/AddUserContants";
const initialState = {
    users: [],
    deleteUserData: {},
    isLoading: false,
    error: null,
    userDetail: {},
};
function GetUser(state = initialState, action) {
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
        case DELETE_SUCCESS: {
            const index = state.users.findIndex((user) => user.taiKhoan === action.payload.value);
            if (index !== -1) {
                state.users.splice(index, 1);
            }
            return { ...state };
        }
        case USER_DETAIL: {
            return { ...state, userDetail: action.payload.data };
        }
        default:
            return state;
    }
}
export default GetUser;
