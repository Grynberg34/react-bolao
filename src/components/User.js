import React from 'react';
import { connect } from 'react-redux';
import { CheckAuth } from '../actions';
import { store } from '../store';
import { Navigate } from "react-router-dom";
import UserNaoVerificado from './UserNaoVerificado';
import UserPix from './UserPix';


function User(props) {
  
  if(props.jwt !== null && props.auth !== true) {
    store.dispatch(CheckAuth(props.jwt))
  }

  var auth =  props.auth;
  
  if (auth === true) {
    if (props.verified === false) {
      return (
        <UserNaoVerificado />
      )
    } else if (props.done === true) {

    } else if (props.pix === true) {

    }
    return (
      <UserPix />
    )

  } else {
    return (
      <Navigate to="/login" />
    )
  }


}

function mapStateToProps(state) {
  return {
    jwt: state.jwt,
    auth: state.auth,
    pix: state.pix,
    verified: state.verified,
    done: state.done
  }
}

export default connect(
  mapStateToProps
)(User);

