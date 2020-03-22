import React from 'react';
import { changeNewDialogMessActionCreator, dialogActionCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {  
  return (
    <StoreContext.Consumer>
      { store => {
        debugger;
        let state = store.getState();
        let messSend = () => store.dispatch(dialogActionCreator());
        let onMessChange = (text) => store.dispatch(changeNewDialogMessActionCreator(text));
      return (
        <Dialogs 
          messSend={messSend} 
          onMessChange={onMessChange} 
          dialogPage={state.dialogPage} />
          )
        }
      }
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;