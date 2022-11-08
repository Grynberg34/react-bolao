
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { CheckAuth } from '../actions';
import { store } from '../store';
import { Navigate } from "react-router-dom";
import "../scss/home.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App(props) {

  if(props.jwt !== null && props.auth !== true) {
    store.dispatch(CheckAuth(props.jwt))
  }

  var auth =  props.auth;

  if (auth === true) {
    return (
      <Navigate to="/user" />
    )
  } else {
    return (
      <div>
        <div className="content" style={{backgroundImage: `url('/home/background.png')`}}>
          <Container>
            <Row>
              <Col md={4}></Col>
              <Col md={4}>
                <Link to="/"><img className="logo" src="/logo.svg" alt="" /></Link>
                <div className="menu" style={{backgroundImage: `url('/home/box.png')`}}>
                  <Link className="menu__link" to="cadastro">Cadastro</Link>
                  <Link className="menu__link" to="login">Login</Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
  
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    jwt: state.jwt
  }
}

export default connect(
  mapStateToProps
)(App);
