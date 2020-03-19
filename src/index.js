import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state from './redux/state';
import {subscribe , addPost, changeNewPostText, addMess, chengeNewMessText} from './redux/state';

let rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App 
        state={state} 
      />
    </BrowserRouter>, document.getElementById('root'));
}

rerenderTree(state);

subscribe(rerenderTree);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
