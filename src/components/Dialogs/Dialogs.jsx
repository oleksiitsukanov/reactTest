import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';

let newMessPost = React.createRef();


const Dialogs = (props) => {
  debugger;
  let dialogsNames = props.state.getDialogsNames();
  let dialogsMess = props.state.getDialogsMess();
  let newMessText = props.state.getNewMessText();
  let messSend = () => {
    props.state.addMess();
  }
  let onMessChange = () =>{
    props.state.chengeNewMessText(newMessPost.current.value);
  }
  return (
    <div className={s.wrapper}>
      <div className={s.dialogs}>
        {dialogsNames.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
      </div>
      <div className={s.messContent}>
        <div className={s.messeges}>
          {dialogsMess.map( mas => <Messages feed={mas.massege} />)}
        </div>
        <div className={s.messForm}>
          <textarea onChange={onMessChange} ref={newMessPost} className={s.messArea} value={newMessText} name="" id="" cols="30" rows="2" />
          <button onClick={messSend} className={s.messBut}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;