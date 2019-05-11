// EXTERNAL DEPENDENCIES
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

// INTERNAL DEPENDENCIES
import App from './app';
import store from './redux/configureStore';

ReactDOM.render(
	<Fragment>
		<Provider store={store}>
				<App />
		</Provider>
	</Fragment>,
	document.getElementById('root')
);
registerServiceWorker();
