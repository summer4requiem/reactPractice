import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/state';

let rerenderEntireTree = () => {
    ReactDOM.render(<React.StrictMode><App state={store.getState()} dispatch={store.dispatch.bind(store)} addMessage={store.addMessage.bind(store)} updateMessageFieldText={store.updateMessageFieldText.bind(store)} addPost={store.addPost.bind(store)} updatePostFieldText={store.updatePostFieldText.bind(store)} /></React.StrictMode >, document.getElementById('root'));
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
serviceWorker.unregister();

