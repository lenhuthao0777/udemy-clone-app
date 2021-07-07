import { ADD_COURSE_REQUEST, ADD_COURSE_SUCCESS, ADD_COURSE_FAILURE } from "constants/AddCourseContants";
import coursesApi from "services/CoursesApi";
export function AddCourseSS(values) {
    return async (dispatch) => {
        dispatch({ type: ADD_COURSE_REQUEST });
        try {
            const { data } = await coursesApi.addCourse(values);
            dispatch({ type: ADD_COURSE_SUCCESS, payload: { data } });
        } catch (error) {
            dispatch({
                type: ADD_COURSE_FAILURE,
                payload: { error: error.response.data },
            });
        }
    };
}
