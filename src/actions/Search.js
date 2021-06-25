import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "../constants/Search";
import coursesApi from "../services/CoursesApi";
const Search = (name) => {
    return async (dispatch) => {
        dispatch({ type: SEARCH_REQUEST });
        try {
            const { data } = await coursesApi.searchCourse(name);
            dispatch({ type: SEARCH_SUCCESS, payload: { data } });
        } catch (error) {
            dispatch({
                type: SEARCH_FAILURE,
                payload: { error: error.response.data },
            });
        }
    };
};
export { Search };
