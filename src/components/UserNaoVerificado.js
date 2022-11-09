import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { LogoutUser } from '../actions';
import "../scss/user-nv.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function UserNaoVerificado(props) {

  function logout() {
    store.dispatch(LogoutUser());
  }

  var user = props.user;

  return (
    <div className="content" style={{backgroundImage: `url('/user/background.png')`}}>
      <Container>
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <div className="user-nv">
              <h1 className="user-nv__title">Olá, {user.nome}!</h1>
              <h2 className="user-nv__subtitle">Aguarde a verificação da conta pelo administrador para participar do bolão.</h2>
              <button className="user-nv__button" onClick={logout}>Logout</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )


}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps
)(UserNaoVerificado);

