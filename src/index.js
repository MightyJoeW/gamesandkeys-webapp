// EXTERNAL DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// INTERNAL DEPENDENCIES
import App from './App';

render(App);

if (module.hot) {
	module.hot.accept('./App', () => {
		const NextApp = require('./App').default;
		render(NextApp);
	});
}

function render(AppComponent) {
	ReactDOM.render(
		<AppComponent />,
		document.getElementById('root')
	);
}
registerServiceWorker();
