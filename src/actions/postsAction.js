const getAllPosts = () => async (dispatch) => {
  dispatch({
    type: 'LOADING_POSTS',
  });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    dispatch({
      type: 'GET_POSTS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'ERROR_POSTS',
    });
  }
};

export { getAllPosts };

const getPostsOfUser = (user) => async (dispatch) => {
  dispatch({
    type: 'LOADING_POSTS_OF_USER',
  });
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user}`);
    const data = await response.json();

    dispatch({
      type: 'GET_POSTS_OF_USER',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'ERROR_POSTS_OF_USER',
    });
  }
};

export { getPostsOfUser };
