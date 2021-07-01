import {DELETE_REQUEST, DELETE_SUCCESS, DELETE_FAILURE} from "constants/DeleteUserContants"
import authApi from "services/AuthApi"
export function DeleteUser(values) {
    return async (dispatch) => {
        dispatch({ type: DELETE_REQUEST });
        try {
            const { data } = await authApi.deleteUser(values);
            dispatch({ type: DELETE_SUCCESS, payload: { data } });
        } catch (error) {
            dispatch({
                type: DELETE_FAILURE,
                payload: { error: error.response.data },
            });
        }
    };
}