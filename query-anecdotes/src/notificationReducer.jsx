const notificationReducer = (state, action) => {
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return { message: action.payload, type: 'info' };
      case 'SET_ERROR':
        return { message: action.payload, type: 'error' };
      case 'CLEAR_NOTIFICATION':
        return { message: '', type: '' };
      default:
        return state;
    }
  };
  
  export default notificationReducer;
  