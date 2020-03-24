const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

let initialState = {
  users: [
    { id: 1 , followed: true,  fullName: 'Alexey' , username: 'user1', profileLink : '#'},
    { id: 2 , followed: false,  fullName: 'Dima' , username: 'user2', profileLink : '#'},
    { id: 3 , followed: true,  fullName: 'Andrey' , username: 'user3', profileLink : '#'},
    { id: 4 , followed: true,  fullName: 'Nik' , username: 'user4', profileLink : '#'},
  ]
}

export const usersReducer = (state = initialState , action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, 
        users: state.users.map( a => {
          if(a.id == action.userId){
            return {...a, followed: true}
          }
          return a;
        })
      }
    case UNFOLLOW:
      return{
        ...state, 
        users: state.users.map( a => {
          if(a.id == action.userId){
            return {...a, followed: false}
          }
          return a;
        })
      }
    case SETUSERS:
      return{
        ...state, users: [...state.users, ...action.users]
      }
    default:
      return state;
  }
}

export const followActionCreater = (followId) => {
  return {
    type: FOLLOW,
    userId: followId
  }
};
export const unfollowActionCreater = (unfollowId) => {
  return {
    type: UNFOLLOW,
    userId: unfollowId
  }
};

export const setUsersActionCreater = (users) => {
  return {
    type: SETUSERS, users
  }
};

export const changeNewPostTextActionCreater = (text, name) => {
  return { 
    type: CHAGE_NEW_POST_TEXT, 
    postText: text, 
    postName: name
  }
}

export default usersReducer;