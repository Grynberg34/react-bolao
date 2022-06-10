import React from 'react';
import CadastroForm from './CadastroForm';
import { RegisterUser } from '../actions';
import { CheckAuth } from '../actions';
import { AuthGoogle } from '../actions';
import { connect } from 'react-redux';
import { store } from '../store';
import { Link, Navigate } from "react-router-dom";
import GoogleLogin from 'react-google-login';

function Cadastro(props) {

  function submit (values) {

    store.dispatch(RegisterUser(values));

  }

  const responseGoogle = (response) => {

    store.dispatch(AuthGoogle(response));

  }  

  store.dispatch(CheckAuth(props.jwt));

  var auth =  props.auth;
  var register = props.register;

  if (auth === true) {
    return (
      <Navigate to="/user" />
    )
  } else if (register === true) {
    return (
      <Navigate to="/login" />
    )
  } 
  else {

    return (
      <div>
        <h1>{props.failRegister}</h1>
        <CadastroForm onSubmit={submit} />
        <GoogleLogin
          clientId= "390518303780-jh735t86sg11luhqg21vm52q66r4qcha.apps.googleusercontent.com"
          buttonText="Cadastre-se com a conta Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
        <br></br>
        <Link to="/login">Login</Link>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    failRegister: state.failRegister,
    jwt: state.jwt,
    register: state.register
  }
}

export default connect(
  mapStateToProps
)(Cadastro);

