import { GET_COURSEDETAIL_REQUEST, GET_COURSEDETAIL_SUCCESS, GET_COURSEDETAIL_FAILURE } from "../constants/CourseDetail";

const initialState = {
    course: [],
    isLoading: false,
    error: null,
};
function courseReducerDetail(state = initialState, action) {
    switch (action.type) {
        case GET_COURSEDETAIL_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case GET_COURSEDETAIL_SUCCESS: {
            return { ...state, course: action.payload.data, isLoading: false };
        }
        case GET_COURSEDETAIL_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        default:
            return state;
    }
}
export default courseReducerDetail;
