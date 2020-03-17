import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from "react-router-dom";
import News from './components/News/News';
import Media from './components/Media/Media';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar />
        <Route path="/dialogs" render={() => <Dialogs dial={props.dial} mes={props.mes} />} />
        <Route path="/profile" render={() => <Profile feeds={props.feeds} />} />
        <Route path="/news" component={News} />
        <Route path="/media" component={Media} />
        {/* <Profile /> */}
        {/* <Dialog /> */}
      </div>
    </BrowserRouter>
  );
}



export default App;
