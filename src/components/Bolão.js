import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import JogosPrimeiraFase from './JogosPrimeiraFase';
import JogosFaseFinal from './JogosFaseFinal';
import Grupos from './Grupos';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CheckGroupStage } from '../actions';

function Bolão(props) {

  store.dispatch(CheckGroupStage(props.jwt))

  var checkGroupStage = props.checkGroupStage;

  if (checkGroupStage === true) {

    return (
      <div>
        <JogosFaseFinal />
      </div>
    )

  } else {
    return (
      <Container>
        <Row>
          <Col md={6}>
            <JogosPrimeiraFase />
          </Col>
          <Col md={6}>
            <Grupos />
          </Col>
        </Row>
      </Container>
    )
  }

  
}
  
function mapStateToProps(state) {
  return {
    checkGroupStage : state.checkGroupStage,
    jwt: state.jwt
  }
}

export default connect(
  mapStateToProps
)(Bolão);