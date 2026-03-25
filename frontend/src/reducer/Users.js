import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "../constants/Auth";
import { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE } from "../constants/DeleteUserConstants";

const initialState = {
    users: [],
    deleteUserData: {},
    isLoading: false,
    error: null,
    selectUser: [],
};

function Users(state = initialState, action) {
    switch (action.type) {
        case GET_USER_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case GET_USER_SUCCESS: {
            // Data is now English schema: { username, fullName, role, etc. }
            return { ...state, users: action.payload.data, isLoading: false };
        }
        case GET_USER_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        case DELETE_USER_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case DELETE_USER_SUCCESS: {
            // Using username or id instead of taiKhoan
            const updatedUsers = state.users.filter((user) => user.id !== action.payload.value && user.username !== action.payload.value);
            return { ...state, users: updatedUsers, isLoading: false };
        }
        case DELETE_USER_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        default:
            return state;
    }
}

export default Users;
