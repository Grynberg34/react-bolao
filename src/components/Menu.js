import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LogoutUser } from '../actions';
import "../scss/navbar.scss";

function Menu(props) {

  function logout() {
    store.dispatch(LogoutUser())
  }
  
  return (
    <div className="barra">
      <Container fluid>
        <Row>
          <Col md={2}>
            <Link to="/"><img className="barra__logo" src="/logo2.png" alt="" /></Link>
          </Col>

          <Col md={2}>
            <h1 className="barra__user">{props.user.nome}</h1>
          </Col>

          <Col md={2}>
            <Link className="barra__link" to="/user/ranking">Ranking</Link>
          </Col>

          <Col md={2}>
            <Link className="barra__link" to="/user/jogos">Jogos</Link>
          </Col>
    
          <Col md={2}>
            <Link className="barra__link" to="/user/regras">Regras</Link>
          </Col>

          <Col md={2}>
            <button className="barra__button" onClick={logout}>Logout</button>
          </Col>
        </Row>

      </Container>
    </div>
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

