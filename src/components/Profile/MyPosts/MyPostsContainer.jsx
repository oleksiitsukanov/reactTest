import React from 'react';
import { changeNewPostTextActionCreater ,postActionCreater } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import Post from './Post/Post';


const MyPostsContainer = (props) => {
  debugger;
  let state = props.store.getState();
  let addPost = () => props.store.dispatch(postActionCreater())
  let changeNewPostText = (text,name) => props.store.dispatch(changeNewPostTextActionCreater(text, name));

    return (
    <div>
    <MyPosts 
      changeNewPostText={changeNewPostText}  
      addPost={addPost} 
      profilePage={state.profilePage}
    />
    {state.profilePage.feeds.map( mas => <Post name={mas.name} message={mas.massege} stars={mas.stars} />)}
    </div>)
    
};

export default MyPostsContainer;