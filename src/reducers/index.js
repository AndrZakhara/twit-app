import { combineReducers } from 'redux';
import { authFormReducer } from './authFormReducer';
import { mainPageReducer } from './mainPageReducer';
import { postPageReducer } from './postPageReducer';
import { routerReducer as router } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
  authForm: authFormReducer,
  mainPage: mainPageReducer,
  postPage: postPageReducer,
  router: router,
  form: formReducer,
});
