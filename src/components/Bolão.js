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

  store.dispatch(CheckGroupStage(props.jwt));

  var checkGroupStage = props.checkGroupStage;

  if (checkGroupStage === true) {

    window.localStorage.clear();

    return (
      <div>
        <JogosFaseFinal />
      </div>
    )

  } else {
    return (
      <div id="primeirafase">
        <div className="content" style={{backgroundImage: `url('/user/background.png')`}}>
          <Container>
            <Row>
              <Col md={6} xs={7}>
                <JogosPrimeiraFase />
              </Col>
              <Col md={6} xs={5}>
                <Grupos />
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
    checkGroupStage : state.checkGroupStage,
    jwt: state.jwt
  }
}

export default connect(
  mapStateToProps
)(Bolão);