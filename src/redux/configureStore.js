import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const middlewareEnhancer = applyMiddleware(logger, thunk);

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
  middlewareEnhancer,
);

export default store;
