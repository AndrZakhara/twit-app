import {
  CATEGORIES_REQUEST,
  CATEGORIES_FETCH,
  CATEGORIES_ERROR,
  POST_REQUEST,
  POST_FETCH,
  POST_ERROR,
} from '../actions/mainPageActions';

const initialState = {
  categories: [],
  posts: [],
};

export function mainPageReducer(state = initialState, action) {
  switch (action.type) {

    case CATEGORIES_REQUEST:
      return {...state};

    case CATEGORIES_FETCH:
      return {...state, categories: action.payload.allCategories};

    case CATEGORIES_ERROR:
      return {...state};

    case POST_REQUEST:
      return {...state};

    case POST_FETCH:
      return {...state, post: action.payload.allPost};

    case POST_ERROR:
      return {...state};

    default:
      return state;
  }
}