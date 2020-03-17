import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import Post from './MyPosts/Post/Post';

const Profile = (props) => {

  let feeds = props.feeds.map( mas => <Post name={mas.name} message={mas.massege} stars={mas.stars} />);

  return (
    <div className={s.mainProfile}>
      <img className={s.head} src="data:image/jpeg;base64,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"></img>
      <div className={s.wrapper}>
        <MyPosts />
        {feeds}
      </div>
    </div>
  );
};

export default Profile;