import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { LogoutUser } from '../actions';
import Bolão from './Bolão';

function UserAberto(props) {

  function logout() {
    store.dispatch(LogoutUser());
  }

  var user = props.user;

  return (
    <div>
      <h1>Olá, {user.nome}!</h1>
      <Bolão />
      <button onClick={logout}>Logout</button>
    </div>
  )


}

function mapStateToProps(state) {
  return {
    user: state.user,
    jwt: state.jwt,
  }
}

export default connect(
  mapStateToProps
)(UserAberto);

