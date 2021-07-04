import { SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE } from "constants/SearchUser";
import authApi from "services/AuthApi";

export function SearchUser(values) {
    return async (dispatch) => {
        dispatch({ type: SEARCH_USER_REQUEST });
        try {
            const { data } = await authApi.searchUser(values);
            dispatch({ type: SEARCH_USER_SUCCESS, payload: { data } });
        } catch (error) {
            dispatch({
                type: SEARCH_USER_FAILURE,
                payload: { error: error.response.data },
            });
        }
    };
}
export function detailUsers(values) {
    return {
        type: "detai",
        payload: {
            values,
        },
    };
}
