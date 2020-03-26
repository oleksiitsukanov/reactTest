const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';

let initialState = {
  users: []
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

export default usersReducer;