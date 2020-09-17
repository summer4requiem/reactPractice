import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store';


let rerenderEntireTree = () => {
    ReactDOM.render(<React.StrictMode><App store={store} dispatch={store.dispatch.bind(store)} /></React.StrictMode >, document.getElementById('root'));
};

rerenderEntireTree(store);

store.subscribe(() => {
    debugger;
    let state = store.getState();
    rerenderEntireTree(state);
});

serviceWorker.unregister();