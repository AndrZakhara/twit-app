import {
  CATEGORIES_REQUEST,
  CATEGORIES_FETCH,
  CATEGORIES_ERROR,
  CATEGORIES_GET_ID,
  POST_REQUEST,
  POST_FETCH,
  POST_ERROR,
} from '../actions/mainPageActions';

const initialState = {
  categories: [],
  posts: [],
  activeCategoryId: '',
};

export function mainPageReducer(state = initialState, action) {
  switch (action.type) {

    case CATEGORIES_REQUEST:
      return {...state};

    case CATEGORIES_FETCH:
      return {...state, categories: action.payload.allCategories};

    case CATEGORIES_ERROR:
      return {...state};

    case CATEGORIES_GET_ID:
      return {...state, activeCategoryId: action.payload.id};

    case POST_REQUEST:
      return {...state};

    case POST_FETCH:
      return {...state, posts: action.payload.allPost};

    case POST_ERROR:
      return {...state};

    default:
      return state;
  }
}