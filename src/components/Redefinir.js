import React from 'react';
import RedefinirForm from './RedefinirForm';
import NovaSenhaForm from './NovaSenhaForm';
import { RedefinePassword } from '../actions';
import { DefineNewPassword } from '../actions';
import { connect } from 'react-redux';
import { CheckAuth } from '../actions';
import { store } from '../store';
import { Link, Navigate } from "react-router-dom";

function Redefinir(props) {

  function submitEmail (values) {

    store.dispatch(RedefinePassword(values));

  }

  function submitNewPassword (values) {

    store.dispatch(DefineNewPassword(values));

  }

  store.dispatch(CheckAuth(props.jwt));

  var auth =  props.auth;
  
  var redefine = props.redefine;

  var newpass = props.newpass;

  if (auth === true) {
    return (
      <Navigate to="/user" />
    )
  } else if (newpass === true) {
    return (
      <div>
        <h1>Senha alterada com sucesso</h1>
        <Link to="/login">Login</Link>
    </div>
    )
  } else if (redefine === true){
    return (
      <div>
        <span id={props.newpass.toString()}></span>
        <h1>{props.failNewpass}</h1>
        <NovaSenhaForm   onSubmit={submitNewPassword}  />
      </div>
    )

  } else {

    return (
      <div>
        <h1>{props.failRedefine}</h1>
        <RedefinirForm onSubmit={submitEmail} />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    jwt: state.jwt,
    redefine: state.redefine,
    failRedefine: state.failRedefine,
    newpass: state.newpass,
    failNewpass: state.failNewpass
  }
}

export default connect(
  mapStateToProps
)(Redefinir);

