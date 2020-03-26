import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';

const Users = (props) => {
  if(props.users.length === 0){
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
      props.setUsers(responce.data.items)
    })
   
  }

  return(
    <div>
      <div className={s.wrapper}>
        {props.users.map(u => {
          console.log(u)
          return(
          <div key={u.id} className={s.item}>
          <div className={s.avatar}>
            <img src={u.photos.large ? u.photos.large : "https://img.favpng.com/23/0/3/computer-icons-user-profile-clip-art-portable-network-graphics-png-favpng-YEj6NsJygkt6nFTNgiXg9fg9w.jpg"} alt="user"/>
          </div>
          <div className={s.itemContent}>
            <div className={s.info}>
              <h3 className={s.name}>{u.name}</h3>
              {u.status ? <span>Status: {u.status}</span> : <span>No status</span> }
            </div>
            <div className={s.link}>
              {u.followed ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button> : <button onClick={() => props.follow(u.id)}>Follow</button>}
            </div>
          </div>
        </div>
          )
        })}
        
      </div>
      <div className={s.link + ' ' + s.moreLink}>
        <button>Show more</button>
      </div>
    </div>
  );
};

export default Users;