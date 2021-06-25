import { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../constants/SignUp';
import authApi from '../services/AuthApi';
export function SignUpForm(values) {
	return async (dispatch) => {
		dispatch({ type: SIGNUP_REQUEST });
		try {
			const { data } = await authApi.register(values);
			// localStorage.setItem('userInfo', JSON.stringify(data));
			dispatch({ type: SIGNUP_SUCCESS, payload: { data } });
		} catch (error) {
			dispatch({
				type: SIGNUP_FAILURE,
				payload: { error: error.response.data },
			});
		}
	};
}
