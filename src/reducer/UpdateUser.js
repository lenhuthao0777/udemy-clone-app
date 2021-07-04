import { UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE } from "constants/UpdateContants";

const initialState = {
    updateUser: {},
    isLoading: false,
    error: null,
    status: "",
};
function CoursesByCate(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case UPDATE_USER_SUCCESS: {
            return { ...state, updateUser: action.payload.data, isLoading: false };
        }
        case UPDATE_USER_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        default:
            return state;
    }
}
export default CoursesByCate;
