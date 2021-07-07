import { GET_COURSES_REQUEST, GET_COURSES_SUCCESS, GET_COURSES_FAILURE, DELETE_COURSE } from "../constants/courses";
import { UPDATE_COURSE_REQUEST, UPDATE_COURSE_SUCCESS, UPDATE_COURSE_FAILURE } from "constants/UpdateContants";
const initialState = {
    courses: [],
    isLoading: false,
    error: null,
    updateCourseData: {},
    message: "",
};
function coursesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_COURSES_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case GET_COURSES_SUCCESS: {
            return { ...state, courses: action.payload.data, isLoading: false };
        }
        case GET_COURSES_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        case DELETE_COURSE: {
            const index = state.courses.findIndex((course) => course.maKhoaHoc === action.payload.id);
            if (index !== -1) {
                state.courses.splice(index, 1);
            }
            return { ...state };
        }
        case UPDATE_COURSE_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case UPDATE_COURSE_SUCCESS: {
            return { ...state, updateCourseData: action.payload.data, isLoading: false };
        }
        case UPDATE_COURSE_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        default:
            return state;
    }
}
export default coursesReducer;
