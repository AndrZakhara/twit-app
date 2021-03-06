import axios from '../axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const GETUSER_REQUEST = 'GETUSER_REQUEST';
export const GETUSER_SUCCESS = 'GETUSER_SUCCESS';
export const GETUSER_FAIL = 'GETUSER_FAIL';

export const LOGOUT = 'LOGOUT';

export function handleLogin(form) {
  form.preventDefault();
  const user = {
    login: form.target.name.value,
    password: form.target.password.value,
  };

  return (dispatch) => {
    dispatch({
      type: LOGIN_REQUEST,
    });

    axios.post('/login', user)
      .then((response) => {
        // console.log(response);
        // getUser()(dispatch);
        localStorage.setItem('cks_token', response.data.token);
        return response

        // localStoralocalStorage.setItem('cks_token', response.data.token);ge.setItem('cks_token', response.data.token);
      })
      .then(() =>{
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            username: user.login,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Authorization error'),
        });
      });
  };
}

export function handleSignUp(form) {
  form.preventDefault();
  const user = {
    login: form.target.name.value,
    password: form.target.password.value,
  };

  return (dispatch) => {
    dispatch({
      type: SIGNUP_REQUEST,
    });

    axios.post('/auth', user)
      .then((response) => {
        console.log(response);
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: {
            username: user.login,
          },
        });
        localStorage.setItem('cks_token', response.data.token);
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: SIGNUP_FAIL,
          error: true,
          payload: new Error('Registration error'),
        });
      });
  };
}

export function handleLogout(e) {
  e.preventDefault();
  axios.defaults.headers.common = {};
  localStorage.removeItem('cks_token');

  return {
    type: LOGOUT,
    payload: { status: false },
  };
}

export function getUser() {
  return (dispatch) => {
    dispatch({
      type: GETUSER_REQUEST,
    });

    axios.get('/user')
      .then((response) => {
        console.log('get user');
        console.log(response.data.login);
        dispatch({
          type: GETUSER_SUCCESS,
          payload: {
            username: response.data,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: GETUSER_FAIL,
          error: true,
          payload: new Error('Authorization error'),
        });
      });
  };
}