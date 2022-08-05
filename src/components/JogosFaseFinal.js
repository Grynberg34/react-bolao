import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { CheckRound16 } from '../actions';
import { CheckRound8 } from '../actions';
import { CheckSemis } from '../actions';
import Oitavas from './Oitavas';
import Quartas from './Quartas';
import Semis from './Semis';
import Finais from './Finais';

let JogosFaseFinal= props => {

  var checkRound16 = props.checkRound16;
  var checkRound8 = props.checkRound8;
  var checkSemis = props.checkSemis;

  store.dispatch(CheckRound16(props.jwt))
  store.dispatch(CheckRound8(props.jwt))
  store.dispatch(CheckSemis(props.jwt))


  if (checkSemis === true) {
    return (
      <Finais />
    )
  } else if (checkRound8 === true) {
    return (
      <Semis />
    )
  } else if (checkRound16 === true) {
    return (
      <Quartas />
    )
  } else {
    return (
      <Oitavas />
    )
  }

  
}
  
function mapStateToProps(state) {
  return {
    jwt: state.jwt,
    checkRound16: state.checkRound16,
    checkRound8: state.checkRound8,
    checkSemis: state.checkSemis
  }
}

export default connect(
  mapStateToProps
)(JogosFaseFinal);