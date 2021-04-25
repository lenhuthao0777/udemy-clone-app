import { combineReducers } from 'redux';
import coursesReducer from './Courses';
import authReducer from './Auth';
export const rootReducer = combineReducers({
	coursesReducer,
	authReducer,
});
