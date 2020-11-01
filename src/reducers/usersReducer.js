const INITIAL_STATE = {
  users: [],
  loading: false,
  error: '',
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
        loading: false,
        error: '',
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
        error: '',
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default: return state;
  }
};

export default usersReducer;
