import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { LogoutUser } from '../actions';
import "../scss/user-pix.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function UserPix(props) {

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
            <div className="user-pix">
              <h1 className="user-pix__title">Olá, {user.nome}!</h1>
              <h2 className="user-pix__subtitle">Para participar do bolão, faça um PIX de <span className="user-pix__laranja">30,00R$</span> para <span className="user-pix__laranja">CPF 101.569.826-33</span> ou escaneie o QR CODE e envie o comprovante para bolao2022copa@gmail.com</h2>
              <img className="user-pix__img" src="/user/qrcode.png" alt="" />
              <button className="user-pix__button" onClick={logout}>Logout</button>
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
)(UserPix);

