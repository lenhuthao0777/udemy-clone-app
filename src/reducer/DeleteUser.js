import {
    DELETE_REQUEST,
    DELETE_SUCCESS,
    DELETE_FAILURE,
} from "../constants/DeleteUserContants";
const initialState = {
    deleteUserData: {},
    isLoading: false,
    error: null,
};
export default function AddUser(state = initialState, action) {
    switch (action.type) {
        case DELETE_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case DELETE_SUCCESS: {
            
            return {
                ...state,
                isLoading: false,
                deleteUserData: action.payload.data,
            };
        }
        case DELETE_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }

        default:
            return state;
    }
}
