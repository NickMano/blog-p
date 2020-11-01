const getAllUsers = () => async (dispatch) => {
  dispatch({
    type: 'LOADING_USERS',
  });
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    dispatch({
      type: 'GET_USERS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'ERROR_USERS',
    });
  }
};

export default getAllUsers;
