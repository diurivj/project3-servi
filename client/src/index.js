import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const WithRouter = () => <BrowserRouter><App/></BrowserRouter>;

ReactDOM.render(<WithRouter />, document.getElementById('root'));
registerServiceWorker();
