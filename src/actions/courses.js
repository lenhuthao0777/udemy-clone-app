import {
	GET_COURSES_REQUEST,
	GET_COURSES_SUCCESS,
	GET_COURSES_FAILURE,
} from "../constants/courses";
import coursesApi from "../services/CoursesApi";
const getCoursesByCategory = (category) => {
	return async (dispatch) => {
		dispatch({ type: GET_COURSES_REQUEST });
		try {
			const { data } = await coursesApi.getCoursesByCategory(category);
			dispatch({ type: GET_COURSES_SUCCESS, payload: { data } });
		} catch (error) {
			dispatch({
				type: GET_COURSES_FAILURE,
				payload: { error: error.response.data },
			});
		}
	};
};
const getCourses = () => {
	return async (dispatch) => {
		dispatch({ type: GET_COURSES_REQUEST });
		try {
			const { data } = await coursesApi.getCourses();
			dispatch({ type: GET_COURSES_SUCCESS, payload: { data } });
		} catch (error) {
			dispatch({
				type: GET_COURSES_FAILURE,
				payload: { error: error.response.data },
			});
		}
	};
};
export { getCoursesByCategory, getCourses };
