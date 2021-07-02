import {
    DELETE_COURSE
} from "constants/courses";
import CoursesApi from "services/CoursesApi";
export function DeleteCourse(id) {
    return async (dispatch) => {
        try {
            await CoursesApi.deleteCourse(id);
            dispatch({ type: DELETE_COURSE, payload: { id } });
        } catch (error) {
            console.log(error);
        }
    };
}
