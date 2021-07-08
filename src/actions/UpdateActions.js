import {
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    UPDATE_COURSE_REQUEST,
    UPDATE_COURSE_SUCCESS,
    UPDATE_COURSE_FAILURE,
} from "constants/UpdateContants";
import authApi from "services/AuthApi";
import coursesApi from "services/CoursesApi";
export function UpdateUser(values) {
    return async (dispatch) => {
        dispatch({ type: UPDATE_USER_REQUEST });
        try {
            const status = "Update User Success!";
            const { data } = await authApi.updateUser(values);
            dispatch({ type: UPDATE_USER_SUCCESS, payload: { data, status } });
        } catch (error) {
            dispatch({
                type: UPDATE_USER_FAILURE,
                payload: { error: error.response.data },
            });
        }
    };
}
export function EditCourse(values) {
    return async (dispatch) => {
        dispatch({ type: UPDATE_COURSE_REQUEST });
        try {
            const { data } = await coursesApi.updateCourse(values);
            dispatch({ type: UPDATE_COURSE_SUCCESS, payload: { data } });
        } catch (error) {
            dispatch({
                type: UPDATE_COURSE_FAILURE,
                payload: { error: error.response.data },
            });
        }
    };
}
