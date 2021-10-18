import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import apiReducer from './reducers/api';
import statusReducer from './reducers/status';

const rootReducer = combineReducers({
  api: apiReducer,
  status: statusReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;