import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const userLogInReducer = (jwt = null, action) => {
  if (action.type === 'LOGIN_USER') {

    return action.payload;
    
  }
  
  return jwt;
};


const checkAuthReducer = (auth = false, action) => {
  if (action.type === 'CHECK_AUTH') {

    return action.payload;
  }
  
  return auth;
};

export default combineReducers({

  jwt: userLogInReducer,
  auth: checkAuthReducer,
  form: formReducer
  
});
