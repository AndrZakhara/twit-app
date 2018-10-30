import {
  CATEGORIES_REQUEST,
  CATEGORIES_FETCH,
  CATEGORIES_ERROR,
} from '../actions/mainPageActions';

const initialState = {
  categories: [],
};

export function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return {...state};

    case CATEGORIES_FETCH:
      console.log('Page reducer: ')
      console.log(action.payload.categories )
      return {...state, categories: action.payload.categories};

    case CATEGORIES_ERROR:
      return {...state};

    default:
      return state;
  }
}