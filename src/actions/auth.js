import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../constants/Auth';
import authApi from '../services/AuthApi';
export function login(values) {
	return async (dispatch) => {
		dispatch({ type: LOGIN_REQUEST });
		try {
			const { data } = await authApi.login(values);
			localStorage.setItem('userInfo', JSON.stringify(data));
			dispatch({ type: LOGIN_SUCCESS, payload: { data } });
		} catch (error) {
			dispatch({
				type: LOGIN_FAILURE,
				payload: { error: error.response.data },
			});
		}
	};
}
