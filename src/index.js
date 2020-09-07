import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import state,
{
    addPost,
    subscribe,
    updatePostFieldText,
    addMessage,
    updateMessageFieldText
} from './Redux/state';

let rerenderEntireTree = () => {
    ReactDOM.render(<React.StrictMode > <App state={state} addMessage={addMessage} updateMessageFieldText={updateMessageFieldText} addPost={addPost} updatePostFieldText={updatePostFieldText} /></React.StrictMode >, document.getElementById('root'));
};

rerenderEntireTree(state);
subscribe(rerenderEntireTree);
serviceWorker.unregister();

