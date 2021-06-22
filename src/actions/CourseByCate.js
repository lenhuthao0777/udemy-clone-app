import { GET_COURSEBYCATE_REQUEST, GET_COURSEBYCATE_SUCCESS, GET_COURSEBYCATE_FAILURE } from "../constants/CourseByCate";
import CourseByCate from "../services/CoursesApi";
const getCoursesByCategory = (category) => {
    return async (dispatch) => {
        dispatch({ type: GET_COURSEBYCATE_REQUEST });
        try {
            const { data } = await CourseByCate.getCoursesByCategory(category);
            dispatch({ type: GET_COURSEBYCATE_SUCCESS, payload: { data } });
        } catch (error) {
            dispatch({
                type: GET_COURSEBYCATE_FAILURE,
                payload: { error: error.response.data },
            });
        }
    };
};
export { getCoursesByCategory };
