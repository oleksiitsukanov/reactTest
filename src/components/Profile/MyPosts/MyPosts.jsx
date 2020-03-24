import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  let newPostElement = React.createRef();
  let newPostElementName = React.createRef();
  let addPost = () => { 
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let name = newPostElementName.current.value;
    debugger;
    props.changeNewPostText(text, name);
  }
  return(
    <div>
    <div className={s.wrapper}>
        <div className={s.ava}>
          <img src="data:image/jpeg;base64,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" alt=""/>
        </div>
        <div className={s.form}>
          <div className={s.name}>
            <input onChange={onPostChange} ref={newPostElementName} value={props.profilePage.newPostName} type="text" placeholder="Your name"/>
          </div>
          <div className={s.message}>
            <textarea onChange={onPostChange} name="" ref={newPostElement} cols="30" rows="10"  value={props.profilePage.newPostText} placeholder="Messege..."/>
          </div>
          <div className={s.button}>
            <button onClick={addPost}>Send</button>
          </div>
        </div>
    </div>
    {props.profilePage.feeds.map( mas => <Post name={mas.name} message={mas.massege} stars={mas.stars} />)}
    </div>
  );
};

export default MyPosts;