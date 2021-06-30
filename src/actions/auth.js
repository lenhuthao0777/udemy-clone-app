import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } from "../constants/Auth";
import authApi from "../services/AuthApi";
export function login(values) {
    return async (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });
        try {
            const { data } = await authApi.login(values);
            localStorage.setItem("userInfo", JSON.stringify(data));
            dispatch({ type: LOGIN_SUCCESS, payload: { data } });
			console.log(data)
        } catch (error) {
            dispatch({
                type: LOGIN_FAILURE,
                payload: { error: error.response.data },
            });
        }
    };
}
export function getUser() {
    return async (dispatch) => {
        dispatch({ type: GET_USER_REQUEST });
        try {
            const { data } = await authApi.getUsers();
            dispatch({ type: GET_USER_SUCCESS, payload: { data } });
        } catch (error) {
            dispatch({
                type: GET_USER_FAILURE,
                payload: { error: error.response.data },
            });
        }
    };
}
