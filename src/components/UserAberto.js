import React from 'react';
import { connect } from 'react-redux';
import Bolão from './Bolão';

function UserAberto(props) {

  return (
    <div>
      <Bolão />
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

