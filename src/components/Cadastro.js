import React from 'react';
import CadastroForm from './CadastroForm';
import { RegisterUser } from '../actions';
import { CheckAuth } from '../actions';
import { connect } from 'react-redux';
import store from '../store';
import { Link, Navigate } from "react-router-dom";

function Cadastro(props) {

  function submit (values) {

    store.dispatch(RegisterUser(values))

  }

  store.dispatch(CheckAuth(props.jwt))

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
        <Link auth={props.register.toString()} to="/login">Login</Link>
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

