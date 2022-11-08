import React from 'react';
import CadastroForm from './CadastroForm';
import { RegisterUser } from '../actions';
import { CheckAuth } from '../actions';
import { AuthGoogle } from '../actions';
import { connect } from 'react-redux';
import { store } from '../store';
import { Link, Navigate } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import "../scss/cadastro.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cadastro(props) {

  function submit (values) {

    store.dispatch(RegisterUser(values));

  }

  const responseGoogle = (response) => {

    store.dispatch(AuthGoogle(response));

  }  

  if (props.jwt !== null) {
    store.dispatch(CheckAuth(props.jwt))
  }

  var auth =  props.auth;
  var register = props.register;

  if (auth === true) {
    return (
      <Navigate to="/user" />
    )
  } else if (register === true) {
    return (
      <Navigate to="/login" />
    )
  } 
  else {

    return (
      <div>
        <div id="cadastro" className="content" style={{backgroundImage: `url('/home/background.png')`}}>
          <Container>
            <Row>
              <Col md={4}></Col>
              <Col md={4}>
                <Link to="/"><img className="logo" src="/logo.svg" alt="" /></Link>
                <div className="cadastro">
                  <h1>{props.failRegister}</h1>
                  <CadastroForm onSubmit={submit} />
                  <GoogleLogin
                    clientId= "390518303780-jh735t86sg11luhqg21vm52q66r4qcha.apps.googleusercontent.com"
                    buttonText="Cadastre-se com o Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}  
                    render={renderProps => (
                      <button className="google" onClick={renderProps.onClick} disabled={renderProps.disabled}> <img className="google__img" src="/home/google.png" alt=""></img> Cadastro Google</button>
                    )}
                  />
                  <Link className="cadastro__link" to="/login">Login</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    failRegister: state.failRegister,
    jwt: state.jwt,
    register: state.register
  }
}

export default connect(
  mapStateToProps
)(Cadastro);

