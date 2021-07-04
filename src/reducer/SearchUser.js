import { SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE } from "constants/SearchUser";

const initialState = {
    searchUserData: [],
    isLoading: false,
    error: null,
};
function SearchUser(state = initialState, action) {
    switch (action.type) {
        case SEARCH_USER_REQUEST: {
            return { ...state, isLoading: true, error: null };
        }
        case SEARCH_USER_SUCCESS: {
            return { ...state, searchUserData: action.payload.data, isLoading: false };
        }
        case SEARCH_USER_FAILURE: {
            return { ...state, isLoading: false, error: action.payload.error };
        }
        default:
            return state;
    }
}
export default SearchUser;
