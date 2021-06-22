import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
// rootreducers is pointing to the reducers folder which has an index.js

const initialState = {};

const store = createStore(
	rootReducer,
	initialState,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
