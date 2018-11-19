// EXTERNAL DEPENDENCIES
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// REDUCERS
import pdfRoutesReducer from './state/pdf-routes/pdf-routes-reducer';
import requestsReducer from './state/requests/requests-reducer';

const reducer = combineReducers({
	pdfRoutes: pdfRoutesReducer,
	requests: requestsReducer
});

export default createStore(reducer, composeWithDevTools());