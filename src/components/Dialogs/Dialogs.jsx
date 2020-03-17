import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messages from './Messages/Messages';

const Dialogs = ({dial , mes}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.dialogs}>
        {dial.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />)}
      </div>
      <div className={s.messeges}>
        {mes.map( mas => <Messages feed={mas.massege} />)}
      </div>
    </div>
  );
};

export default Dialogs;