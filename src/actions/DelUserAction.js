import { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAILURE } from "constants/DeleteUserContants";
import authApi from "services/AuthApi";
export function DeleteUser(value) {
    return async (dispatch) => {
        dispatch({ type: DELETE_USER_REQUEST });
        try {
            await authApi.deleteUser(value);
            dispatch({ type: DELETE_USER_SUCCESS, payload: { value } });
        } catch (error) {
            dispatch({
                type: DELETE_USER_FAILURE,
                payload: { error: error.response.data },
            });
        }
    };
}
