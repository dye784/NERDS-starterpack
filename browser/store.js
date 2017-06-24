import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './reducer';

const store = createStore(reducer,
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true })));

export default store;
