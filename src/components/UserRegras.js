import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import UserNaoVerificado from './UserNaoVerificado';
import UserPix from './UserPix';
import UserAberto from './UserAberto';
import Menu from './Menu';

function UserRegras(props) {

  var auth = props.auth;

  if (auth === true) {
    if (props.verified === false) {
      return (
        <UserNaoVerificado />
      )
    } else if (props.done === true) {
      return (
        <div>
          <Menu />
          <h1>Regras</h1>
        </div>
      )
    } else if (props.pix === true) {
      return (
        <UserAberto />
      )
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
)(UserRegras);

