// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

// Internal Dependencies
import App from './layouts/App/App';

ReactDOM.render(
  <div>
    <Router>
      <App />
    </Router>
  </div>,
  document.getElementById('root')
);
registerServiceWorker();
