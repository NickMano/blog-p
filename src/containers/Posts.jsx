import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getAllUsers from '../actions/usersAction';

const Posts = (props) => {
  const { key } = useParams();
  const { users } = props;

  if (!users.length) { props.getAllUsers(); }

  return (
    <>
      <p>
        Es el post
        {' '}
        {key}
      </p>
    </>
  );
};

Posts.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  getAllUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (reducers) => reducers.usersReducer;
const mapdispatchToProps = { getAllUsers };

export default connect(mapStateToProps, mapdispatchToProps)(Posts);
