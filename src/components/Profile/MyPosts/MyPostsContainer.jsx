import { changeNewPostTextActionCreater ,postActionCreater } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return{
    profilePage: state.profilePage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(postActionCreater());
    },
    changeNewPostText: (text,name) => {
      dispatch(changeNewPostTextActionCreater(text, name))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;