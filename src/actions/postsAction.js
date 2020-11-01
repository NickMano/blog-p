const getAllPosts = () => async (dispatch) => {
  dispatch({
    type: 'LOADING',
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
      type: 'ERROR',
    });
  }
};

export default getAllPosts;
