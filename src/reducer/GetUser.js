import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } from "constants/Auth";

const initialState = {
    users: [],
    isLoading: false,
    error: null,
};
function GetUser(state = initialState, action) {
    console.log(action)
    switch (action.type) {
        case GET_USER_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case GET_USER_SUCCESS: {
            return { ...state, users: action.payload.data, isLoading: false };
        }
        case GET_USER_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        default:
            return state;
    }
}
export default GetUser;
