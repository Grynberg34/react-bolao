
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { CheckAuth } from '../actions';
import { store } from '../store';
import { Navigate } from "react-router-dom";

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
        <h1>Bolão da Copa</h1>
        <Link to="cadastro">Cadastro</Link>
        <br></br>
        <Link to="login">Login</Link>
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
