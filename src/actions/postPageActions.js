import axios from '../axios';

export const POST_GET_BY_ID_REQUEST = 'POST_GET_BY_ID_REQUEST';
export const POST_GET_BY_ID_FETCH = 'POST_GET_BY_ID_FETCH';
export const POST_GET_BY_ID_ERROR ='POST_GET_BY_ID_EROR';

export function getPostById(id) {

  return (dispatch) => {
    dispatch({
      type: POST_GET_BY_ID_REQUEST,
    });
    axios.get(`/post/${id}`)
      .then((response) => {
        dispatch({
          type: POST_GET_BY_ID_FETCH,
          payload: {
            currentPost: response.data.data,
          },
        });
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: POST_GET_BY_ID_ERROR,
          error: true,
          payload: new Error('Load post error'),
        });
      });
  };
}