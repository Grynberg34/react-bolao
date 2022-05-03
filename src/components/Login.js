import React from 'react';
import LoginForm from './LoginForm';
import { LogInUser } from '../actions';
import store from '../store';
import { Link, Navigate } from "react-router-dom";

function Login() {


  function submit (values) {

    store.dispatch(LogInUser(values))

  }

  return (
    <div>
      <LoginForm onSubmit={submit} />
      <Link to="/user">User</Link>
    </div>
  )

}

export default Login


