const ADD_POST = 'ADD-POST';
const CHAGE_NEW_POST_TEXT = 'CHAGE-NEW-POST-TEXT';

let initialState = {
  feeds: [
    { id: 1 , name: 'Alexey' , stars: 10 , massege: 'Yo, how are you?'},
    { id: 2 , name: 'Dima' , stars: 3 , massege: 'I`m ok!'},
    { id: 3 , name: 'Andrey' , stars: 100 , massege: 'mee too!'},
    { id: 4 , name: 'Nik' , stars: 25 , massege: 'I`m fine!'},
  ],
  newPostText: '',
  newPostName: ''
}

export const profileReducer = (state = initialState , action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        name: state.newPostName,
        stars: 20,
        massege: state.newPostText
      }
      state.feeds.push(newPost);
      debugger;
      state.newPostText = '';
      state.newPostName = '';
      return state;
    case CHAGE_NEW_POST_TEXT:
      state.newPostText = action.postText;
      state.newPostName = action.postName;
      return state;
    default:
      return state;;
  }
}

export const postActionCreater = () => {
  return {
    type: ADD_POST
  }
};

export const changeNewPostTextActionCreater = (text, name) => {
  return { 
    type: CHAGE_NEW_POST_TEXT, 
    postText: text, 
    postName: name
  }
}

export default profileReducer;