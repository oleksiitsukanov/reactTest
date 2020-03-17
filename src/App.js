import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from "react-router-dom";
import News from './components/News/News';
import Media from './components/Media/Media';
import state from './redux/state';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Navbar state={state.freandsPage} />
        <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogPage} />} />
        <Route path="/profile" render={() => <Profile state={props.state.profilePage} />} />
        <Route path="/news" component={News} />
        <Route path="/media" component={Media} />
        {/* <Profile /> */}
        {/* <Dialog /> */}
      </div>
    </BrowserRouter>
  );
}



export default App;
