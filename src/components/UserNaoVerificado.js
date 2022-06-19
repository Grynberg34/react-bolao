import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { LogoutUser } from '../actions';

function UserNaoVerificado(props) {

  function logout() {
    store.dispatch(LogoutUser());
  }

  var user = props.user;

  return (
    <div>
      <h1>Olá, {user.nome}!</h1>
      <h2>Aguarde a verificação da conta pelo administrador para participar do bolão.</h2>
      <button onClick={logout}>Logout</button>
    </div>
  )


}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps
)(UserNaoVerificado);

