import axios from '../axios';

export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_FETCH = 'CATEGORIES_FETCH';
export const CATEGORIES_ERROR = 'CATEGORIES_ERROR';

export const POST_REQUEST = 'POST_REQUEST';
export const POST_FETCH = 'POST_FETCH';
export const POST_ERROR = 'POST_ERROR';

export const CATEGORIES_GET_ID = 'CATEGORIES_GET_ID';

export function getAllCategories() {

  return (dispatch) => {
    dispatch({
      type: CATEGORIES_REQUEST,
    });
    axios.get('/category')
      .then((response) => {
        const allCategories = response.data.categories;
        dispatch({
          type: CATEGORIES_FETCH,
          payload: { allCategories },
      });
    });
  };
}

export function getAllPosts() {

  return (dispatch) => {
    dispatch({
      type: POST_REQUEST,
    });
    axios.get('/post')
      .then((response) => {
        const allPost = response.data.data;
        dispatch({
          type: POST_FETCH,
          payload: { allPost },
        });
      });
  };
}

export function getCategoriesId(id) {
  return ({
    type: CATEGORIES_GET_ID,
    payload: {id},
  });
}