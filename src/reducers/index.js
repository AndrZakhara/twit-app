import { combineReducers } from 'redux';
import { authFormReducer } from './authFormReducer';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
  authForm: authFormReducer,
  form: formReducer,
});
