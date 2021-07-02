import {
    DELETE_FAILURE,
    DELETE_REQUEST,
    DELETE_SUCCESS,
} from "constants/DeleteUserContants";
import authApi from "services/AuthApi";
export function DeleteUser(value) {
    return async (dispatch) => {
        try {
            await authApi.deleteUser(value);
            dispatch({ type: DELETE_SUCCESS, payload: { value } });
        } catch (error) {
            console.log(error);
        }
    };
}
