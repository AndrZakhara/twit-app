import axios from '../axios';

export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_FETCH = 'CATEGORIES_FETCH';
export const CATEGORIES_ERROR = 'CATEGORIES_ERROR';

export function getCategories() {

  return (dispatch) => {
    dispatch({
      type: CATEGORIES_REQUEST,
    });

    axios.get('/category')
      .then((response) => {
        console.log('action get categories: ')
        console.log(response.data.categories);
        const categories = response.data.categories
        dispatch({
          type: CATEGORIES_FETCH,
          payload: {categories}
      });
    });
  };
}