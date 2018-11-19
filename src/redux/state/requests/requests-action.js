export const updateRequestTitle = title => ({
	type: ADD_REQUEST_TITLE,
	payload: title
});

export const updateRequestComposer = composer => ({
	type: ADD_REQUEST_COMPOSER,
	payload: composer
});

export const updateRequestUrl = url => ({
	type: ADD_REQUEST_URL,
	payload: url
});