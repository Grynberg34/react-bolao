import React from 'react';
import LoginForm from './LoginForm';
import { LogInUser } from '../actions';
import { CheckAuth } from '../actions';
import { AuthGoogle } from '../actions';
import { connect } from 'react-redux';
import { store } from '../store';
import { Link, Navigate } from "react-router-dom";
import GoogleLogin from 'react-google-login';

function Login(props) {

  function submit (values) {

    store.dispatch(LogInUser(values))

  }

  const responseGoogle = (response) => {

    store.dispatch(AuthGoogle(response));

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
        <div>
          {props.register ? (
            <h1>Usuário registrado com sucesso</h1>
          ) : (
            <span></span>
          )}
        </div>
        <h1>{props.fail}</h1>
        <LoginForm onSubmit={submit} />
        <GoogleLogin
          clientId= "390518303780-jh735t86sg11luhqg21vm52q66r4qcha.apps.googleusercontent.com"
          buttonText="Faça login com a conta Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        <Link  to="/redefinir">Esqueceu a senha?</Link>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    fail: state.fail,
    jwt: state.jwt,
    register: state.register
  }
}

export default connect(
  mapStateToProps
)(Login);

