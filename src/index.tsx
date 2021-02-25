import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainApp from './App';

ReactDOM.render(<React.StrictMode>
<MainApp/>
</React.StrictMode >, document.getElementById('root'));

serviceWorker.unregister();
