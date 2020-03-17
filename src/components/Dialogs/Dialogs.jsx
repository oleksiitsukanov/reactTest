import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';

const Dialogs = (props) => {
  return (
    <div className={s.wrapper}>
      <div className={s.dialogs}>
        {props.state.dial.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
      </div>
      <div className={s.messeges}>
        {props.state.mes.map( mas => <Messages feed={mas.massege} />)}
      </div>
    </div>
  );
};

export default Dialogs;