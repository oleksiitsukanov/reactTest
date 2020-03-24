import React from 'react';
import s from './Users.module.css';

const Users = () => {
  return(
    <div>
      <div className={s.wrapper}>
      <div className={s.underWrapper} />
        <div className={s.item}>
          <div className={s.avatar}>
            <img src="https://img.favpng.com/23/0/3/computer-icons-user-profile-clip-art-portable-network-graphics-png-favpng-YEj6NsJygkt6nFTNgiXg9fg9w.jpg" alt="user"/>
          </div>
          <div className={s.itemContent}>
            <div className={s.info}>
              <h3 className={s.name}>Dima</h3>
              <span>Nickname: WarLord</span>
            </div>
            <div className={s.link}>
              <button>Profile</button>
            </div>
          </div>
        </div>
      </div>
      <div className={s.link + ' ' + s.moreLink}>
        <button>Show more</button>
      </div>
    </div>
  );
};

export default Users;