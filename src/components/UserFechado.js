import React from 'react';
import { connect } from 'react-redux';
import TodosPalpites from './TodosPalpites';

function UserFechado(props) {


  return (
    <TodosPalpites />
  )


}

function mapStateToProps(state) {
  return {
  }
}

export default connect(
  mapStateToProps
)(UserFechado);

