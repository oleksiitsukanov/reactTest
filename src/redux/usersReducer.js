const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const CURRENT = 'CURRENT';
const TOTAL = 'TOTAL';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
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
        ...state, users: action.users
      }
    case CURRENT:
      return{
        ...state, currentPage: action.currentPage
      }
    case TOTAL:
      return{
        ...state, totalUsersCount: action.totalUsersCount
      }
    case TOGGLE_IS_FETCHING:
      return{
        ...state, isFetching: action.isFetching
      }
    default:
      return state;
  }
}

export const follow = (followId) => {
  return {
    type: FOLLOW,
    userId: followId
  }
};
export const unfollow = (unfollowId) => {
  return {
    type: UNFOLLOW,
    userId: unfollowId
  }
};

export const setUsers = (users) => {
  return {
    type: SETUSERS, users
  }
};

export const setCurrentPage = (currentPage) => {
  return {
    type: CURRENT, currentPage
  }
};

export const setTotalCount = (totalUsersCount) => {
  return {
    type: TOTAL, totalUsersCount
  }
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING, isFetching
  }
};

export default usersReducer;