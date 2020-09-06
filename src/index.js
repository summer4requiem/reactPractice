import {rerenderEntireTree} from './render'
import * as serviceWorker from './serviceWorker';
import state from './Redux/state';


rerenderEntireTree(state);
serviceWorker.unregister();

