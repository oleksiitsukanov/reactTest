import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';

let newMessPost = React.createRef();

let messSend = () => {
  alert(newMessPost.current.value);
}

const Dialogs = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.dialogs}>
        {props.state.dial.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
      </div>
      <div className={s.messContent}>
        <div className={s.messeges}>
          {props.state.mes.map( mas => <Messages feed={mas.massege} />)}
        </div>
        <div className={s.messForm}>
          <textarea ref={newMessPost} className={s.messArea} name="" id="" cols="30" rows="2"></textarea>
          <button onClick={messSend} className={s.messBut}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;