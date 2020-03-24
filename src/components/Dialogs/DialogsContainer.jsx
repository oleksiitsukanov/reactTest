import { changeNewDialogMessActionCreator, dialogActionCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    dialogPage: state.dialogPage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onMessChange: (text) => {
      dispatch(changeNewDialogMessActionCreator(text));
    },
    messSend: () => {
      dispatch(dialogActionCreator());
    }
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;