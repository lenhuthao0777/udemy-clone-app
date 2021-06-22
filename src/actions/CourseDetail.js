import { GET_COURSEDETAIL_REQUEST, GET_COURSEDETAIL_SUCCESS, GET_COURSEDETAIL_FAILURE } from "../constants/CourseDetail";
import Course from "../services/CoursesApi";
const getCoursesById = (id) => {
    return async (dispatch) => {
        dispatch({ type: GET_COURSEDETAIL_REQUEST });
        try {
            const { data } = await Course.getCourseById(id);
            dispatch({ type: GET_COURSEDETAIL_SUCCESS, payload: { data } });
        } catch (error) {
            dispatch({
                type: GET_COURSEDETAIL_FAILURE,
                payload: { error: error.response.data },
            });
        }
    };
};
export { getCoursesById };
