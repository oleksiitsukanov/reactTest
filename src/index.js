import './index.css';
import * as serviceWorker from './serviceWorker';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from './redux/reduxStore';
import { Provider } from './StoreContext';

let rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
      <App 
        store={store} 
        dispatch={store.dispatch.bind(store)}
      />
      </Provider>
    </BrowserRouter>, document.getElementById('root'));
}

rerenderTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderTree(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
