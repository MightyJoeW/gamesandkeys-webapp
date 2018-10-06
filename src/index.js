// EXTERNAL DEPENDENCIES
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// INTERNAL DEPENDENCIES
import App from './layouts/App/App';
import store from './state/store';

ReactDOM.render(
	<div>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</div>,
	document.getElementById('root')
);
registerServiceWorker();
