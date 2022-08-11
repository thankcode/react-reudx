import { createStore, applyMiddleware, combineReducers } from 'redux';

import count from './reducers/count';
import list from './reducers/list';
import thunk from 'redux-thunk';
const combine = combineReducers({
  count,
  list
})

export default createStore(combine, applyMiddleware(thunk))