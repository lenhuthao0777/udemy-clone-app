import { ADD_USER_REQUEST, ADD_USER_SUCCESS, ADD_USER_FAILURE } from "constants/AddUserContants";
import authApi from "services/AuthApi";
export function AddUser(values) {
    return async (dispatch) => {
        dispatch({ type: ADD_USER_REQUEST });
        try {
            const status = "Add User Success!";
            const { data } = await authApi.addUser(values);
            dispatch({ type: ADD_USER_SUCCESS, payload: { data, status } });
        } catch (error) {
            dispatch({
                type: ADD_USER_FAILURE,
                payload: { error: error.response.data },
            });
        }
    };
}
