import { combineReducers } from 'redux';
import { loginFormReducer } from './loginForm';

export const rootReducer = combineReducers({
  loginForm: loginFormReducer,
});
