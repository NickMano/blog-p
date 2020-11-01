import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getAllUsers from '../actions/usersAction';
import getAllPosts from '../actions/postsAction';

const Posts = (props) => {
  const { key } = useParams();
  const { usersReducer, postsReducer } = props;

  useEffect(() => {
    if (!usersReducer.users.length) { props.getAllUsers(); }
    if (!postsReducer.posts.length) { props.getAllPosts(); }
  }, []);

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
  getAllPosts: PropTypes.func.isRequired,
};

const mapStateToProps = ({ usersReducer, postsReducer }) => ({
  usersReducer,
  postsReducer,
});
const mapdispatchToProps = { getAllUsers, getAllPosts };

export default connect(mapStateToProps, mapdispatchToProps)(Posts);
