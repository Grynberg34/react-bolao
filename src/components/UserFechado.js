import React from 'react';
import { connect } from 'react-redux';

function UserFechado(props) {


  return (
    <div>
      <h1>Seu bolão</h1>
    </div>
  )


}

function mapStateToProps(state) {
  return {
  }
}

export default connect(
  mapStateToProps
)(UserFechado);

