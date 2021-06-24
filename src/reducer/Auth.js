import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/Auth";
const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
const initialState = {
    userInfo,
    isLoading: false,
    error: null,
};
export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                userInfo: action.payload.data,
            };
        }
        case LOGIN_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }

        default:
            return state;
    }
}
