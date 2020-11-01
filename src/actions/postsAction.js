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

export default getAllPosts;
