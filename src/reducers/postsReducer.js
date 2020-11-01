const INITIAL_STATE = {
  posts: [],
  loading: false,
  error: '',
};

const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: '',
      };
    case 'LOADING_POSTS':
      return {
        ...state,
        loading: true,
        error: '',
      };
    case 'ERROR_POSTS':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default: return state;
  }
};

export default postsReducer;
