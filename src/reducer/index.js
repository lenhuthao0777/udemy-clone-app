import { combineReducers } from "redux";
import courses from "./Courses";
import authReducer from "./Auth";
import Course from "./CourseDetail";
import CoursesByCate from "./CoursesByCate";
export const rootReducer = combineReducers({
    courses,
    authReducer,
    Course,
    CoursesByCate,
});
