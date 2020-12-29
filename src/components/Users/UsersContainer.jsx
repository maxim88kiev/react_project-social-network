import React from 'react';
import {connect} from 'react-redux';
import {compose} from "redux";
import {
    follow,
    setCurrentPage,
    unfollow, toggleFollowingProggress, getUsers
} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      followingInProggress={this.props.followingInProggress}
        />
        </>
    }
}

let mapStateToProps = (state) => {

  return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProggress: state.usersPage.followingInProggress
  }
};





export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProggress, getUsers}),
    withAuthRedirect
)(UsersContainer);

