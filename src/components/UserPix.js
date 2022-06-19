import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { LogoutUser } from '../actions';

function UserPix(props) {

  function logout() {
    store.dispatch(LogoutUser());
  }

  var user = props.user;

  return (
    <div>
      <h1>Olá, {user.nome}!</h1>
      <h2>Para participar do bolão, faça um PIX para ---CHAVE--- ou escaneie o QR CODE e envie o comprovante para bolao2022copa@gmail.com</h2>
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
)(UserPix);

