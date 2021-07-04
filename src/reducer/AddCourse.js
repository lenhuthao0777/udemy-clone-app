import { ADD_COURSE_REQUEST, ADD_COURSE_SUCCESS, ADD_COURSE_FAILURE } from "constants/AddCourseContants";

const initialState = {
    addCourseData: {},
    isLoading: false,
    error: null,
};
export default function AddUser(state = initialState, action) {
    switch (action.type) {
        case ADD_COURSE_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case ADD_COURSE_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                addCourseData: action.payload.data,
            };
        }
        case ADD_COURSE_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }

        default:
            return state;
    }
}
