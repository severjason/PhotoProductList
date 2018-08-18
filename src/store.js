import {
  createStore,
  applyMiddleware,
  compose
} from 'C:/Users/user/AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
const enhancers = [];
const middleware = [thunk];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composeENhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composeENhancers);

export default store;
