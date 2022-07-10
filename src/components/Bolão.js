import React from 'react';
import { connect } from 'react-redux';
import Jogos from './Jogos';

function Bolão(props) {

  return (
    <Jogos />
  )
  
}
  
function mapStateToProps(state) {
  return {
  }
}

export default connect(
  mapStateToProps
)(Bolão);