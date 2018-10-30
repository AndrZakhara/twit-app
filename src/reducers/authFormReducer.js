import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from '../actions/authActions';

const initialState = {
  userName: 'Unknown User',
  isFetching: false,
  isAuth: false,
  error: '',
};

export function authFormReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, error: '' };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        userName: action.payload.username,
        isAuth: true,
      };

    case LOGIN_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };

    case LOGOUT:
      return { ...state, isAuth: action.payload.status };

    default:
      return state;
  }
}
