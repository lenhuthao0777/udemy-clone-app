import { combineReducers } from "redux";
import courses from "./Courses";
import authReducer from "./Auth";
import Course from "./CourseDetail";
import CoursesByCate from "./CoursesByCate";
import SignUpFrom from "./SignUp";
import Search from "./Search";
import CartReducer from "./Cart";
import GetUser from "./GetUser";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import SearchUser from "./SearchUser";
import AddCourse from "./AddCourse";
export const rootReducer = combineReducers({
    courses,
    authReducer,
    Course,
    CoursesByCate,
    SignUpFrom,
    Search,
    CartReducer,
    GetUser,
    AddUser,
    UpdateUser,
    SearchUser,
    AddCourse,
});
