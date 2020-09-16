import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store';


let rerenderEntireTree = () => {
    ReactDOM.render(<React.StrictMode><App state={store.getState()} dispatch={store.dispatch.bind(store)} /></React.StrictMode >, document.getElementById('root'));
};

rerenderEntireTree(store);

store.subscribe(() => {
    let state = store.getState();
    console.log(state);
    rerenderEntireTree(state);
});

serviceWorker.unregister();