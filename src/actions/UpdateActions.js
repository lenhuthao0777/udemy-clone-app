import { UPDATE_USER, UPDATE_COURSE } from "constants/UpdateContants";
import authApi from "services/AuthApi";
export function UpdateUser(values) {
    return async (dispatch) => {
        try {
            const { data } = await authApi.updateUser(values);
            dispatch({ type: UPDATE_USER, payload: { data } });
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    };
}
// export function UpdateCourse(values) {
//     return async (dispatch) => {
//         dispatch({ type: ADD_USER_REQUEST });
//         try {
//             const { data } = await authApi.addUser(values);
//             dispatch({ type: ADD_USER_SUCCESS, payload: { data } });
//         } catch (error) {
//             dispatch({
//                 type: ADD_USER_FAILURE,
//                 payload: { error: error.response.data },
//             });
//         }
//     };
// }
