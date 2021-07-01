import {
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
} from "../constants/AddUserContants";
const initialState = {
    addUserData: {},
    isLoading: false,
    error: null,
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
            };
        }
        case ADD_USER_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }

        default:
            return state;
    }
}
