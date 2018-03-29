import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import BrowserHistory from 'react-router'
import './index.css';
import App from './components/main/App';
import registerServiceWorker from './registerServiceWorker';
import createRoutes from './routes';
import { Provider } from 'react-redux';
import store from './store/store';

//import createHistory from 'history/createBrowserHistory'

//const history = createHistory();

/* const history = createHistory();
 */const routes = createRoutes();

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('root')
);