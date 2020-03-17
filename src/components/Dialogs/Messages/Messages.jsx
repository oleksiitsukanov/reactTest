import React from 'react';
import s from './../Dialogs.module.css';

const Messages = (props) => {
  return (
    <div className={s.massege}>
      {props.feed}
    </div>
  );
};

export default Messages;