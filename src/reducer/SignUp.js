import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../constants/SignUp";
// const userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null;
const initialState = {
    userInfo:{},
    isLoading: false,
    error: null,
};
export default function SignUpForm(state = initialState, action) {
    switch (action.type) {
        case SIGNUP_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case SIGNUP_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                userInfo: action.payload.data,
            };
        }
        case SIGNUP_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }

        default:
            return state;
    }
}
