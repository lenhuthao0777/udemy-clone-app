import { combineReducers } from "redux";
import AddCourse from "./AddCourse";
import AddUser from "./AddUser";
import authReducer from "./Auth";
import CartReducer from "./Cart";
import Course from "./CourseDetail";
import courses from "./Courses";
import CoursesByCate from "./CoursesByCate";
import Users from "./Users";
import Search from "./Search";
import SignUpFrom from "./SignUp";
import UpdateUser from "./UpdateUser";
export const rootReducer = combineReducers({
    courses,
    authReducer,
    Course,
    CoursesByCate,
    SignUpFrom,
    Search,
    CartReducer,
    Users,
    AddUser,
    UpdateUser,
    AddCourse,
});
