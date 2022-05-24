import React from 'react';
import LoginForm from './LoginForm';
import { LogInUser } from '../actions';
import { connect } from 'react-redux';
import { CheckAuth } from '../actions';
import store from '../store';
import { Link, Navigate } from "react-router-dom";

function Login(props) {

  function submit (values) {

    store.dispatch(LogInUser(values))

  }

  store.dispatch(CheckAuth(props.jwt))

  var auth =  props.auth;

  if (auth === true) {
    return (
      <Navigate to="/user" />
    )
  } else {

    return (
      <div>
        <h1>{props.fail}</h1>
        <LoginForm onSubmit={submit} />
        <Link auth={props.auth.toString()} to="/user">User</Link>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    fail: state.fail,
    jwt: state.jwt
  }
}

export default connect(
  mapStateToProps
)(Login);

