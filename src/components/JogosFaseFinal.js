import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import Oitavas from './Oitavas';
import Quartas from './Quartas';

let JogosFaseFinal= props => {


  return (
    <div>
      <Oitavas />
      <Quartas />
    </div>
  )
  
}
  
function mapStateToProps(state) {
  return {
    jwt: state.jwt
  }
}

export default connect(
  mapStateToProps
)(JogosFaseFinal);