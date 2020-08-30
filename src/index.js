// Именно этот файл выполняет развёртывание React-приложения.
import state from './Redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render( < React.StrictMode > <App state={state}/></React.StrictMode > , document.getElementById('root'));

serviceWorker.unregister();





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA