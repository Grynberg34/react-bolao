import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { LogoutUser } from '../actions';
import Bolão from './Bolão';

function UserAberto(props) {

  function logout() {
    store.dispatch(LogoutUser());
  }

  return (
    <div>
      <Bolão />
      <button onClick={logout}>Logout</button>
    </div>
  )


}

function mapStateToProps(state) {
  return {
    jwt: state.jwt,
  }
}

export default connect(
  mapStateToProps
)(UserAberto);

