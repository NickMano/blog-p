import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading/Loading';
import getAllUsers from '../../actions/usersAction';
import UserBadge from '../../components/UserBadge';
import './Users.scss';

const Users = (props) => {
  const { loading, users } = props;

  useEffect(() => {
    props.getAllUsers();
  }, []);

  return (
    <>
      <h1 className="h1-title">Users</h1>
      <div className="grid">
        {loading && <Loading />}
        {users.map((user) => (
          <div className="users-list" key={user.id}>
            <UserBadge user={user} />
          </div>
        ))}
      </div>
    </>
  );
};

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  getAllUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (reducers) => reducers.usersReducer;
const mapDispatchToProps = { getAllUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Users);
