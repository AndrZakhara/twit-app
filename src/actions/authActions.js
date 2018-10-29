import axios from '../axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const REGISTRY_REQUEST = 'REGISTRY_REQUEST';
export const REGISTRY_SUCCESS = 'REGISTRY_SUCCESS';
export const REGISTRY_FAIL = 'REGISTRY_FAIL';

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
        console.log(response);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            username: user.login,
          },
        });
        localStorage.setItem('cks_token', response.data.token);
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
      type: LOGIN_REQUEST,
    });

    axios.post('/auth', user)
      .then((response) => {
        console.log(response);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            username: user.login,
          },
        });
        localStorage.setItem('cks_token', response.data.token);
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
const logout = () => ({
  type: LOGOUT,
});

export function handleLogout() {
  console.log('clik');

  // return (dispatch) => {
    axios.defaults.headers.common = {};
    localStorage.removeItem('cks_token');
    return logout();
  // };
  // return { type: LOGOUT };
}

