import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import DialogsContainer  from './components/Dialogs/DialogsContainer';
import {Route, BrowserRouter} from "react-router-dom";
import News from './components/News/News';
import Media from './components/Media/Media';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavbarContainer />
        <Route 
          path="/dialogs" 
          render={() => <DialogsContainer />} 
        />
        <Route
          path="/profile" 
            render={() => <Profile />} 
          />
        <Route
          path="/users" 
            render={() => <UsersContainer />} 
          />
        <Route path="/news" component={News} />
        <Route path="/media" component={Media} />
        {/* <Profile /> */}
        {/* <Dialog /> */}
      </div>
    </BrowserRouter>
  );
}



export default App;
