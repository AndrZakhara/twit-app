import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
export const history = createHistory()


const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export const store = createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)
