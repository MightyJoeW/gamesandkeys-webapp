// ACTION TYPES
const ADD_REQUEST_TITLE = 'ADD_REQUEST_TITLE ';
// const ADD_REQUEST_COMPOSER = "ADD_REQUEST_COMPOSER";
// const ADD_REQUEST_URL = "ADD_REQUEST_URL";

// INITIAL STATE
let initialState = {
	requestTitle: '',
	composer: '',
	url: '',
	submitted: false
};

// ACTION CREATORS
export const updateRequestTitle = title => ({
	type: ADD_REQUEST_TITLE,
	title
});

// REDUCERS
const reducer = (state = initialState, action) => {
	switch (action.type) {
	case ADD_REQUEST_TITLE:
		return Object.assign({}, state, { requestTitle: action.title });
	default:
		return state;
	}
};

export default reducer;