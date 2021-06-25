import {
	SEARCH_REQUEST,
	SEARCH_SUCCESS,
	SEARCH_FAILURE,
} from 'constants/Search';

const initialState = {
	searchData: [],
	isLoading: false,
	error: null,
};
function CoursesByCate(state = initialState, action) {
	switch (action.type) {
		case SEARCH_REQUEST: {
			return { ...state, isLoading: true, error: null };
		}
		case SEARCH_SUCCESS: {
			return { ...state, searchData: action.payload.data, isLoading: false };
		}
		case SEARCH_FAILURE: {
			return { ...state, isLoading: false, error: action.payload.error };
		}
		default:
			return state;
	}
}
export default CoursesByCate;
