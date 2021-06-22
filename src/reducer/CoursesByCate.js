import {
	GET_COURSEBYCATE_REQUEST,
	GET_COURSEBYCATE_SUCCESS,
	GET_COURSEBYCATE_FAILURE,
} from '../constants/CourseByCate';

const initialState = {
	coursesByCate: [],
	isLoading: false,
	error: null,
};
function CoursesByCate(state = initialState, action) {
	switch (action.type) {
		case GET_COURSEBYCATE_REQUEST: {
			return { ...state, isLoading: true, error: null };
		}
		case GET_COURSEBYCATE_SUCCESS: {
			return { ...state, coursesByCate: action.payload.data, isLoading: false };
		}
		case GET_COURSEBYCATE_FAILURE: {
			return { ...state, isLoading: false, error: action.payload.error };
		}
		default:
			return state;
	}
}
export default CoursesByCate;
