import { GET_USERBYPAGE_REQUEST, GET_USERBYPAGE_SUCCESS, GET_USERBYPAGE_FAILURE } from "constants/GetUserByPageContants";
import authApi from "services/AuthApi";

export function GetUserByPage(value) {
    return async (dispatch) => {
        dispatch({ type: GET_USERBYPAGE_REQUEST });
        try {
            const { data } = await authApi.getUserByPage(value);
            dispatch({ type: GET_USERBYPAGE_SUCCESS, payload: { data } });
        } catch (error) {
            dispatch({
                type: GET_USERBYPAGE_FAILURE,
                payload: { error: error.response.data },
            });
        }
    };
}
