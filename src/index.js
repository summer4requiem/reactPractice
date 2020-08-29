// Именно этот файл выполняет развёртывание React-приложения.

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [{
        id: 1,
        name: 'Andrew'
    },
    {
        id: 2,
        name: 'Dymich'
    },
    {
        id: 3,
        name: 'Sanya'
    },
    {
        id: 4,
        name: 'Dymich'
    },
    {
        id: 4,
        name: 'Yarick'
    },
    {
        id: 4,
        name: 'Sveta'
    }
];



let messagesData = [{
        id: 1,
        message: 'Hi, there'
    },
    {
        id: 2,
        message: 'how are you'
    },
    {
        id: 3,
        message: 'Sanya Vasiliy'
    },
    {
        id: 4,
        message: 'Dymich'
    },
    {
        id: 5,
        message: 'Yooo'
    },
    {
        id: 6,
        message: 'Aghaaaaa'
    }
];

let postData = [{
        message: 'hi, how are you',
        id: 1,
        likesCount: 11,
    },
    {
        message: 'my second post',
        id: 2,
        likesCount: 12,
    },
    {
        message: "it's my first post",
        id: 2,
        likesCount: 14,
    }
]

ReactDOM.render( < React.StrictMode > <App posts = {postData} messages = {messagesData} dialogs = {dialogsData}/></React.StrictMode > , document.getElementById('root'));

serviceWorker.unregister();








// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA