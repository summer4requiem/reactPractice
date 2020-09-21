import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';


let rerenderEntireTree = () => {
    ReactDOM.render(<React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode >, document.getElementById('root'));
};

rerenderEntireTree(store);

store.subscribe(() => {
    rerenderEntireTree();
});

serviceWorker.unregister();