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
    case ADD_POST:{
      return {
        ...state,
        feeds: [...state.feeds, {
          id: 5,
          name: state.newPostName,
          stars: 20,
          massege: state.newPostText
        }],
        newPostText : '',
        newPostName : ''
      };
    }
    case CHAGE_NEW_POST_TEXT:
      {
        return {...state,
          newPostText : action.postText,
          newPostName : action.postName};
      }
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