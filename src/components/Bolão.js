import React from 'react';
import { connect } from 'react-redux';
import Jogos from './Jogos';
import Grupos from './Grupos';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Bolão(props) {

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Jogos />
        </Col>
        <Col md={6}>
          <Grupos />
        </Col>
      </Row>
    </Container>


  )
  
}
  
function mapStateToProps(state) {
  return {
  }
}

export default connect(
  mapStateToProps
)(Bolão);