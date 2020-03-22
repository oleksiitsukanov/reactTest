import React from 'react';
import Navbar from './Navbar';


const NavbarContainer = (props) => <Navbar navbarFreands={props.store.getState().freandsPage} />;

export default NavbarContainer;