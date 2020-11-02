import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getAllUsers from '../actions/usersAction';
import { getPostsOfUser } from '../actions/postsAction';

const Posts = (props) => {
  const { userId } = useParams();
  const { usersReducer, postsReducer } = props;

  useEffect(() => {
    if (!usersReducer.users.length) { props.getAllUsers(); }
    if (!postsReducer.posts.length) { props.getPostsOfUser(userId); }
  }, []);

  return (
    <>
      <p>
        Es el post
        {' '}
        {userId}
      </p>
    </>
  );
};

Posts.propTypes = {
  usersReducer: PropTypes.shape(
    {
      loading: PropTypes.bool,
      error: PropTypes.string,
      users: PropTypes.arrayOf(PropTypes.object),
    },
  ).isRequired,
  postsReducer: PropTypes.shape(
    {
      loading: PropTypes.bool,
      error: PropTypes.string,
      posts: PropTypes.arrayOf(PropTypes.object),
    },
  ).isRequired,
  getAllUsers: PropTypes.func.isRequired,
  getPostsOfUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ usersReducer, postsReducer }) => ({
  usersReducer,
  postsReducer,
});
const mapdispatchToProps = { getAllUsers, getPostsOfUser };

export default connect(mapStateToProps, mapdispatchToProps)(Posts);
