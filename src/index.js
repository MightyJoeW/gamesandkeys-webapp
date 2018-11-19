// EXTERNAL DEPENDENCIES
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// INTERNAL DEPENDENCIES
import App from './app';
import store from './redux/configureStore';

ReactDOM.render(
	<Fragment>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</Fragment>,
	document.getElementById('root')
);
registerServiceWorker();
