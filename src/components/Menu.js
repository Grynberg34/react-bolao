import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { Navigate, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LogoutUser } from '../actions';


function Menu(props) {

  function logout() {
    store.dispatch(LogoutUser())
  }
  
  return (
    <Container>
      <Row>
        <Col md={4}>
          <h1>{props.user.nome}</h1>
        </Col>

        <Col md={2}>
          <Link to="/user/ranking">Ranking</Link>
        </Col>

        <Col md={2}>
          <Link to="/user/jogos">Jogos</Link>
        </Col>
  
        <Col md={2}>
          <Link to="/user/regras">Regras</Link>
        </Col>

        <Col md={2}>
          <button onClick={logout}>Logout</button>
        </Col>
      </Row>

    </Container>
  )


}

function mapStateToProps(state) {
  return {
    user : state.user
  }
}

export default connect(
  mapStateToProps
)(Menu);

