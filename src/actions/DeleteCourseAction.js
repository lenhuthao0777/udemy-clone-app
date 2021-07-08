import { DELETE_COURSE_REQUEST, DELETE_COURSE_SUCCESS, DELETE_COURSE_FAILURE } from "constants/courses";
import CoursesApi from "services/CoursesApi";
export function DeleteCourse(id) {
    return async (dispatch) => {
        dispatch({ type: DELETE_COURSE_REQUEST });
        try {
            const { data } = await CoursesApi.deleteCourse(id);
            dispatch({ type: DELETE_COURSE_SUCCESS, payload: { id } });
        } catch (error) {
            dispatch({
                type: DELETE_COURSE_FAILURE,
                payload: { error: error.response.data },
            });
        }
    };
}
