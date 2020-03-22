import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';


let newMessPost = React.createRef();
const Dialogs = (props) => {
  let messSend = () => {
    props.messSend();
  }
  
  let onMessChange = () => {
    props.onMessChange(newMessPost.current.value);
  }
  return (
    <div className={s.wrapper}>
      <div className={s.dialogs}>
        {props.dialogPage.dial.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
      </div>
      <div className={s.messContent}>
        <div className={s.messeges}>
          {props.dialogPage.mes.map( mas => <Messages feed={mas.massege} />)}
        </div>
        <div className={s.messForm}>
          <textarea onChange={onMessChange} ref={newMessPost} className={s.messArea} value={props.dialogPage.newMesText} name="" id="" cols="30" rows="2" placeholder="write here..."/>
          <button onClick={messSend} className={s.messBut}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;