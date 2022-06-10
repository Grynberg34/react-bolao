import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


//LOGIN

const userLogInReducer = (jwt = null, action) => {
  if (action.type === 'LOGIN_USER') {

    return action.payload;
    
  }
  
  return jwt;
};

const failedLogInReducer = (msg = '', action) => {
  if (action.type === 'FAIL_LOGIN') {

    return action.payload;
    
  }
  
  return msg;
};

//REGISTER

const userRegisterReducer = (user = false, action) => {
  if (action.type === 'REGISTER_USER') {

    return action.payload;
    
  }
  
  return user;
};

const failedRegisterReducer = (msg = '', action) => {
  if (action.type === 'FAIL_REGISTER') {

    return action.payload;
    
  }
  
  return msg;
};

//AUTH

const checkAuthReducer = (auth = false, action) => {
  if (action.type === 'CHECK_AUTH') {

    return action.payload;
  }
  
  return auth;
};

//REDEFINE PASSWORD

const userRedefineReducer = (email = false, action) => {
  if (action.type === 'REDEFINE_PASSWORD') {

    return action.payload;
    
  }
  
  return email;
};

const failedRedefineReducer = (msg = '', action) => {
  if (action.type === 'FAIL_REDEFINE') {

    return action.payload;
    
  }
  
  return msg;
};

const defineNewPasswordReducer = (newpass = false, action) => {
  if (action.type === 'DEFINE_PASSWORD') {

    return action.payload;
    
  }
  
  return newpass;
};

const failedNewPasswordReducer = (msg = '', action) => {
  if (action.type === 'FAIL_PASSWORD') {

    return action.payload;
    
  }
  
  return msg;
};

export default combineReducers({

  jwt: userLogInReducer,
  auth: checkAuthReducer,
  fail: failedLogInReducer,
  register: userRegisterReducer,
  failRegister: failedRegisterReducer,
  redefine: userRedefineReducer,
  failRedefine: failedRedefineReducer,
  newpass: defineNewPasswordReducer,
  failNewpass: failedNewPasswordReducer,
  form: formReducer
  
});
