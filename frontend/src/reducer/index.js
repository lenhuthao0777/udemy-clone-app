import { combineReducers } from "redux";
import authReducer from "./Auth";
import CartReducer from "./Cart";
import courses from "./Courses";
import Users from "./Users";
export const rootReducer = combineReducers({
    courses,
    authReducer,
    CartReducer,
    Users,
});
