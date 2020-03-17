import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


let dialogsData = [
  { id: 1, name: 'Ivan' },
  { id: 2, name: 'Kirill' },
  { id: 3, name: 'Kostya' },
  { id: 4, name: 'Petya' },
  { id: 5, name: 'Sveta' },
  { id: 6, name: 'Ira' },
  { id: 7, name: 'Ivan K.' }
];

let messagesData = [
  { massege: 'Hello everyone!1'},
  { massege: 'Hello everyone!2'},
  { massege: 'Hello everyone!3'},
];

let profileMessagesData = [
  { id: 1 , name: 'Alexey' , stars: 10 , massege: 'Yo, how are you?'},
  { id: 2 , name: 'Dima' , stars: 3 , massege: 'I`m ok!'},
  { id: 3 , name: 'Andrey' , stars: 100 , massege: 'mee too!'},
  { id: 4 , name: 'Nik' , stars: 25 , massege: 'I`m fine!'},
];


ReactDOM.render(<App dial={dialogsData} mes={messagesData} feeds={profileMessagesData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
