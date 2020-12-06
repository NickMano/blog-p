import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getAllUsers from '../../actions/usersAction';
import Loading from '../../components/Loading/Loading';
import { getPostsOfUser } from '../../actions/postsAction';
import './Posts.scss';

const Posts = (props) => {
  const { userId } = useParams();
  const { usersReducer, postsReducer } = props;
  const currentUser = usersReducer.users.find((user) => user.id === parseInt(userId, 10));

  useEffect(() => {
    if (!usersReducer.users.length) { props.getAllUsers(); }
    if (postsReducer.posts[0]?.userId !== parseInt(userId, 10)) { props.getPostsOfUser(userId); }
  }, []);

  return (
    <>
      <h1 className="h1-title">
        {currentUser?.name}
        &apos;s posts
      </h1>
      <div className="grid">
        {
          (
            usersReducer.loading
            || postsReducer.loading
            || postsReducer.posts[0]?.userId !== parseInt(userId, 10)
          )
            ? <Loading />
            : postsReducer.posts.map((post) => (
              <div className="posts-list" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </div>
            ))
        }
      </div>
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
