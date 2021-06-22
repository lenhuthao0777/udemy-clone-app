import {
	GET_COURSES_REQUEST,
	GET_COURSES_SUCCESS,
	GET_COURSES_FAILURE,
} from '../constants/courses';

const initialState = {
	courses: [],
	isLoading: false,
	error: null,
};
function CoursesByCate(state = initialState, action) {
	switch (action.type) {
		case GET_COURSES_REQUEST: {
			return { ...state, isLoading: true, error: null };
		}
		case GET_COURSES_SUCCESS: {
			return { ...state, courses: action.payload.data, isLoading: false };
		}
		case GET_COURSES_FAILURE: {
			return { ...state, isLoading: false, error: action.payload.error };
		}
		default:
			return state;
	}
}
export default CoursesByCate;
