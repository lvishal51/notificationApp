import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from "history";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createRoutes from './routes';
// import 'react-responsive-modal/lib/react-responsive-modal.css';
// import Modal from 'react-responsive-modal/lib/css';

const routes = createRoutes();

ReactDOM.render(
    routes,
    document.getElementById('root')
);