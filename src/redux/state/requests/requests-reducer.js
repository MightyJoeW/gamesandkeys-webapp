import {
	ADD_REQUEST_TITLE,
	ADD_REQUEST_COMPOSER,
	ADD_REQUEST_URL,
} from './requests-types';

let initialState = {
	requestTitle: 'N/A',
	composer: 'N/A',
	url: 'N/A',
	submitted: false
};

const requestsReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
	case ADD_REQUEST_TITLE:
		return { ...state, requestTitle: payload };
	case ADD_REQUEST_COMPOSER:
		return { ...state, requestComposer: payload };
	case ADD_REQUEST_URL:
		return { ...state, requestUrlTitle: payload };
	default:
		return state;
	}
};

export default requestsReducer;