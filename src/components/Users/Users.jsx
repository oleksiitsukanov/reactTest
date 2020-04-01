import React from 'react';
import s from './Users.module.css';

let Users = (props) => {

  let pagesCount= Math.ceil(props.totalUsersCount/props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

    return (
      <div>
        <div className={s.navPages}>
          {pages.map(p => {
          return(
          <span onClick={() => props.onPageChanged(p)} className={props.currentPage === p && s.selectedPage }>{
            p
          }</span>)}
          )}
        </div>
        <div className={s.wrapper}>
          {props.users.map(u => <div key={u.id}>
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
          </div>
            )}
          
        </div>
        {/* <div className={s.link + ' ' + s.moreLink}>
          <button onClick={this.getUsers}>Show more</button>
        </div> */}
      </div>
    );
  }


export default Users;