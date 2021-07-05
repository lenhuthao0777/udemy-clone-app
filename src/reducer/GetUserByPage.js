import { GET_USERBYPAGE_REQUEST, GET_USERBYPAGE_SUCCESS, GET_USERBYPAGE_FAILURE } from "constants/GetUserByPageContants";

const initialState = {
    userByPage: {},
    isLoading: false,
    error: null,
};
function GetUserByPage(state = initialState, action) {
    switch (action.type) {
        case GET_USERBYPAGE_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case GET_USERBYPAGE_SUCCESS: {
            return { ...state, userByPage: action.payload.data, isLoading: false };
        }
        case GET_USERBYPAGE_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        default:
            return state;
    }
}
export default GetUserByPage;
