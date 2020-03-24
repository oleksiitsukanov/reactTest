import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';


//const NavbarContainer = (props) => <Navbar navbarFreands={props.store.getState().freandsPage} />;

let mapStateToProps = (state) => {
  return {
    navbarFreands: state.freandsPage
  }
}

let mapDispatchToProps = (dispatch) => {}


const NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;