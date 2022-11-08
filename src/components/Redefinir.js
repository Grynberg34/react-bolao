import React from 'react';
import RedefinirForm from './RedefinirForm';
import NovaSenhaForm from './NovaSenhaForm';
import { RedefinePassword } from '../actions';
import { DefineNewPassword } from '../actions';
import { connect } from 'react-redux';
import { CheckAuth } from '../actions';
import { store } from '../store';
import { Link, Navigate } from "react-router-dom";
import "../scss/redefinir.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Redefinir(props) {

  function submitEmail (values) {

    store.dispatch(RedefinePassword(values));

  }

  function submitNewPassword (values) {

    store.dispatch(DefineNewPassword(values));

  }

  if(props.jwt !== null && props.auth !== true) {
    store.dispatch(CheckAuth(props.jwt))
  }

  var auth =  props.auth;
  
  var redefine = props.redefine;

  var newpass = props.newpass;

  if (auth === true) {
    return (
      <Navigate to="/user" />
    )
  } else if (newpass === true) {
    return (
      <div className="redefinir" style={{backgroundImage: `url('/home/background.png')`}}>

        <Container>
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <div>
                <Link to="/"><img className="logo" src="/logo.svg" alt="" /></Link>
                <h1 id="senha">Senha alterada com sucesso</h1>
                <Link id="senha-link" to="/login">Login</Link>
              </div>
            </Col>
          </Row>
        </Container>
    </div>
    )
  } else if (redefine === true){
    return (
      <div className="redefinir" style={{backgroundImage: `url('/home/background.png')`}}>

        <Container>
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <div>
                <Link to="/"><img className="logo" src="/logo.svg" alt="" /></Link>
                <span id={props.newpass.toString()}></span>
                <h1>{props.failNewpass}</h1>
                <NovaSenhaForm   onSubmit={submitNewPassword}  />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )

  } else {

    return (
      <div className="redefinir" style={{backgroundImage: `url('/home/background.png')`}}>
        <Container>
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <div>
                <Link to="/"><img className="logo" src="/logo.svg" alt="" /></Link>
                <h1>{props.failRedefine}</h1>
                <RedefinirForm onSubmit={submitEmail} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    jwt: state.jwt,
    redefine: state.redefine,
    failRedefine: state.failRedefine,
    newpass: state.newpass,
    failNewpass: state.failNewpass
  }
}

export default connect(
  mapStateToProps
)(Redefinir);

