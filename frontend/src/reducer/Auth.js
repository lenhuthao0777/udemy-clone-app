import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants/Auth";
const initialState = {
    userInfo: {
        username: "",
        fullName: "",
        email: "",
        phoneNumber: "",
        role: "",
        accessToken: "",
    },
    isLoading: false,
    error: null,
    status: null,
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return { ...state, isLoading: true, error: null, status: null };
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                userInfo: action.payload.data,
                status: 200,
            };
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error,
                status: 400,
            };
        }
        default:
            return state;
    }
}
