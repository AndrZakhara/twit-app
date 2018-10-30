import { combineReducers } from 'redux';
import { authFormReducer } from './authFormReducer';
import { mainPageReducer } from './mainPageReducer';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
  authForm: authFormReducer,
  mainPage: mainPageReducer,
  form: formReducer,
});
