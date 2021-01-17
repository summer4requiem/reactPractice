import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';

// setInterval(()=>{
//     store.dispatch({type: `FAKE_ACTION`})
// }, 1000)

ReactDOM.render(<React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
</React.StrictMode >, document.getElementById('root'));

serviceWorker.unregister();