import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GetRanking } from '../actions';

function Ranking(props) {

  var ranking = props.ranking;

  var jwt = props.jwt;

  if (ranking === null) {

    store.dispatch(GetRanking(jwt))

    return (
      <div></div>
    )

  } else {
    return (
      <div>
        <h1>Classificação</h1>
        <Container>
          <Row>
              <Col md={1}>
                <p><strong>Posição</strong></p>
              </Col>

              <Col md={3}>
                <p><strong>Nome</strong></p>
              </Col>

              <Col md={4}>
                <p><strong>Pontos</strong></p>
              </Col>
            </Row>
          { ranking.map( (user, i) => 
            <Row key={user.id}>
              <Col md={1}>
                <p>{i+1}</p>
              </Col>

              <Col md={3}>
                <Link to={"/user/ranking/" + user.id}>{user.nome}</Link>
              </Col>

              <Col md={4}>
                <p>{user.pontos}</p>
              </Col>
            </Row>
          )}
    
        </Container>
      </div>
    )
  }
    


}

function mapStateToProps(state) {
  return {
    jwt: state.jwt,
    ranking: state.ranking,
  }
}

export default connect(
  mapStateToProps
)(Ranking);

