import { SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE } from "constants/SearchUser";
import { SELECT_USER_REQUEST, SELECT_USER_SUCCESS, SELECT_USER_FAILURE } from "constants/Auth";
import authApi from "services/AuthApi";

// export function SearchUser(values) {
//     return async (dispatch) => {
//         dispatch({ type: SEARCH_USER_REQUEST });
//         try {
//             const { data } = await authApi.searchUser(values);
//             dispatch({ type: SEARCH_USER_SUCCESS, payload: { data } });
//         } catch (error) {
//             dispatch({
//                 type: SEARCH_USER_FAILURE,
//                 payload: { error: error.response.data },
//             });
//         }
//     };
// }
export function SelectUser(values) {
    return async (dispatch) => {
        dispatch({ type: SELECT_USER_REQUEST });
        try {
            const { data } = await authApi.selectUser(values);
            dispatch({ type: SELECT_USER_SUCCESS, payload: { data } });
        } catch (error) {
            dispatch({
                type: SELECT_USER_FAILURE,
                payload: { error: error.response.data },
            });
        }
    };
}
export function SelectUserEdit(values) {
    return {
        type: "SELECT_USER_EDIT",
        payload: {
            data: values,
        },
    };
}
