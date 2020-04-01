import { connect } from 'react-redux';
import React from 'react';
import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching } from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';


class UsersApiComponent extends React.Component {

  componentDidMount(){
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(responce => {
        this.props.setUsers(responce.data.items);
        this.props.setTotalCount(responce.data.totalCount);
        this.props.toggleIsFetching(false);
      });
  }
  

  getUsers = () => {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage+1}&count=${this.props.pageSize}`)
      .then(responce => {
        this.props.setUsers(responce.data.items);
        this.props.toggleIsFetching(false);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(responce => {
        this.props.setUsers(responce.data.items);
        this.props.toggleIsFetching(false);
      });
    
  }
  render() {
    return <>
    {this.props.isFetching ? <Preloader/> : null}
    <Users totalUsersCount={this.props.totalUsersCount}
            pageSize ={this.props.pageSize}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
    />
                  </>
  }
}

let mapStateToProps = (state) => {
  return{
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followActionCreater(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowActionCreater(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreater(users))
//     },
//     setCurrentPage: (currentPage) => {
//       dispatch(setCurrentPageActionCreater(currentPage))
//     },
//     setTotalCount: (totalCount) => {
//       dispatch(setTotalCountActionCreater(totalCount))
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingActionCreater(isFetching))
//     }
//   }
// }




const UsersContainer = connect(mapStateToProps, 
  {follow,unfollow,setUsers,setCurrentPage,setTotalCount,toggleIsFetching})
  (UsersApiComponent);

export default UsersContainer;