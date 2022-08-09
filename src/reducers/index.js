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

//CHECK USER

const checkUserReducer = (user = null, action) => {
  if (action.type === 'CHECK_USER') {

    return action.payload;
  }
  
  return user;
};

const checkPixReducer = (pix = false, action) => {
  if (action.type === 'CHECK_PIX') {

    return action.payload;
  }
  
  return pix;
};

const checkVerifiedReducer = (verified = false, action) => {
  if (action.type === 'CHECK_VERIFIED') {

    return action.payload;
  }
  
  return verified;
};

const checkDoneReducer = (done = false, action) => {
  if (action.type === 'CHECK_DONE') {

    return action.payload;
  }
  
  return done;
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

// GET GROUPS

const getGroupsReducer = (groups = null, action) => {
  if (action.type === 'GET_GROUPS') {

    return action.payload;
    
  }
  
  return groups;
};

const getGroupStandingsReducer = (groupStandings = null, action) => {
  if (action.type === 'GET_GROUPSTANDINGS') {

    return action.payload;
    
  }

  if (action.type === 'INIT_GROUPSTANDINGS') {

    return action.payload;
    
  }
  
  return groupStandings;
};

const checkGroupStageReducer = (groupsDone = false, action) => {
  if (action.type === 'CHECK_GROUPS') {

    return action.payload;
    
  }
  
  return groupsDone;
};

const checkRound16Reducer = (round16Done = false, action) => {
  if (action.type === 'CHECK_ROUND16') {

    return action.payload;
    
  }
  
  return round16Done;
};

const checkRound8Reducer = (round8Done = false, action) => {
  if (action.type === 'CHECK_ROUND8') {

    return action.payload;
    
  }
  
  return round8Done;
};

const checkSemisReducer = (semisDone = false, action) => {
  if (action.type === 'CHECK_SEMIS') {

    return action.payload;
    
  }
  
  return semisDone;
};

const checkFinalsReducer = (finalsDone = false, action) => {
  if (action.type === 'CHECK_FINALS') {

    return action.payload;
    
  }
  
  return finalsDone;
};

const getRound16Reducer = (round16 = null, action) => {
  if (action.type === 'GET_ROUND16') {

    return action.payload;
    
  }
  
  return round16;
};

const getRound8Reducer = (round8 = null, action) => {
  if (action.type === 'GET_ROUND8') {

    return action.payload;
    
  }
  
  return round8;
};

const getSemisReducer = (semis = null, action) => {
  if (action.type === 'GET_SEMIS') {

    return action.payload;
    
  }
  
  return semis;
};

const getFinalsReducer = (finals = null, action) => {
  if (action.type === 'GET_FINALS') {

    return action.payload;
    
  }
  
  return finals;
};

export default combineReducers({

  jwt: userLogInReducer,
  auth: checkAuthReducer,
  fail: failedLogInReducer,
  user: checkUserReducer,
  pix: checkPixReducer,
  verified: checkVerifiedReducer,
  done: checkDoneReducer,
  register: userRegisterReducer,
  failRegister: failedRegisterReducer,
  redefine: userRedefineReducer,
  failRedefine: failedRedefineReducer,
  newpass: defineNewPasswordReducer,
  failNewpass: failedNewPasswordReducer,
  groups: getGroupsReducer,
  groupStandings: getGroupStandingsReducer,
  checkGroupStage: checkGroupStageReducer,
  checkRound16: checkRound16Reducer,
  checkRound8: checkRound8Reducer,
  checkSemis: checkSemisReducer,
  checkFinals: checkFinalsReducer,
  round16: getRound16Reducer,
  round8: getRound8Reducer,
  semis: getSemisReducer,
  finals: getFinalsReducer,
  form: formReducer
  
});
