import React from 'react';
import { connect } from 'react-redux';
import TodosPalpites from './TodosPalpites';
import Menu from './Menu';

function UserFechado(props) {


  return (
    <div>
      <Menu />
      <TodosPalpites />
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

