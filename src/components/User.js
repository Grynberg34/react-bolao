import React from 'react';
import { connect } from 'react-redux';
import { CheckAuth } from '../actions';
import store from '../store';
import { Navigate } from "react-router-dom";

function User(props) {

  store.dispatch(CheckAuth(props.jwt))

  var auth =  props.auth;

  if (auth === true) {
    return (
      <div>
        <h1>User</h1>
      </div>
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
    auth: state.auth
  }
}

export default connect(
  mapStateToProps
)(User);

