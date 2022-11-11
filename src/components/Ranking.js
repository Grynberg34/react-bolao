import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GetRanking } from '../actions';
import "../scss/ranking.scss";

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
      <div id="ranking">
        <div className="content" style={{backgroundImage: `url('/user/background.png')`}}>
          <Container>
            <Row>
              <Col md={2}></Col>
              <Col md={8}>
              <div className="ranking">
                <h1 className="ranking__msg">Clique no nome do participante para ver todos seus palpites</h1>
                <Container fluid>
                  <Row>
                      <Col md={2}>
                      </Col>

                      <Col md={7}>
                        <p className="ranking__header"><strong>Nome</strong></p>
                      </Col>

                      <Col md={3}>
                        <p className="ranking__header"><strong>Pontos</strong></p>
                      </Col>
                    </Row>
                  { ranking.map( (user, i) => 
                    <Row className="ranking__row" key={user.id}>
                      <Col md={2}>
                        <p className="ranking__posição">{i+1}</p>
                      </Col>

                      <Col md={7}>
                        <Link className="ranking__nome" to={"/user/ranking/" + user.id}>{user.nome}</Link>
                      </Col>

                      <Col md={3}>
                        <p className="ranking__pontos">{user.pontos}</p>
                      </Col>
                    </Row>
                  )}
            
                </Container>
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
    jwt: state.jwt,
    ranking: state.ranking,
  }
}

export default connect(
  mapStateToProps
)(Ranking);

