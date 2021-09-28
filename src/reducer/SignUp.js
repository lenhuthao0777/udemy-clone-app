import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../constants/SignUp";
// const signUp = localStorage.getItem("signUp") ? JSON.parse(localStorage.getItem("signUp")) : null;
const initialState = {
    signUp: {},
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
                signUp: action.payload.data,
            };
        }
        case SIGNUP_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        default:
            return state;
    }
}
