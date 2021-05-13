import { combineReducers } from "redux";
import coursesReducer from "./Courses";
import authReducer from "./Auth";
import courseReducerDetail from "./Course";
export const rootReducer = combineReducers({
	coursesReducer,
	authReducer,
	courseReducerDetail,
});
