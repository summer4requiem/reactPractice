import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    addPost,
    updatePostFieldText,
    addMessage,
    updateMessageFieldText
} from './Redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render( < React.StrictMode > < App state = {
            state
        }
        addMessage = {
            addMessage
        }
        updateMessageFieldText = {
            updateMessageFieldText
        }
        addPost = {
            addPost
        }
        updatePostFieldText = {
            updatePostFieldText
        }
        /></React.StrictMode > , document.getElementById('root'));
};

export {
    rerenderEntireTree
};
serviceWorker.unregister();