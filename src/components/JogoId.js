import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { GetMatchById } from '../actions';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../scss/jogoid.scss";
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br')

let JogoId= props => {

  var { id } = useParams();

  var match = props.match;

  if (match === null || parseInt(id) !== match.id) {
    store.dispatch(GetMatchById(props.jwt, id))
    return (
      <div></div>
    )
  } else {

    if (id < 49) {
      return (
        <div id="jogo">
          <div className="content" style={{backgroundImage: `url('/user/background.png')`}}>
            <Container>
              <Row>
                <Col md={3}></Col>
                <Col md={6}>

                  <div className="jogo">
                    <h2 className="jogo__info">{moment(match.data).zone('+000').format('LLL')}</h2>
                    <h1 className="jogo__placar"><img className="jogo__placar__img" src={match.s1.img} alt="" /> {match.s1_placar} x {match.s2_placar} <img className="jogo__placar__img right" src={match.s2.img} alt="" /></h1>
            
                    { match.palpites.map( (palpite) => 
                      <div className="jogo__palpite" key={palpite.id}>
                        <p className="jogo__palpite__user" ><strong>{palpite.User.nome}:</strong> {palpite.s1_placar} x {palpite.s2_placar}</p>
                      </div>
                    )}
                  </div>

                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )
    } else {
      return (
        <div id="jogo">
          <div className="content" style={{backgroundImage: `url('/user/background.png')`}}>
            <Container>
              <Row>
                <Col md={3}></Col>
                <Col md={6}>

                  <div className="jogo">
                    <h2 className="jogo__info">{moment(match.data).zone('+000').format('LLL')}</h2>
                    <h1 className="jogo__placar"><img className="jogo__placar__img" src={match.s1.img} alt="" /> {match.s1_placar} x {match.s2_placar} <img className="jogo__placar__img right" src={match.s2.img} alt="" /></h1>
            
                    { match.palpites.map( (palpite) => 
                      <div className="jogo__palpite" key={palpite.id}>
                        <p className="jogo__palpite__user"><strong>{palpite.User.nome}:</strong> {palpite.s1.nome} {palpite.s1_placar} x {palpite.s2_placar} {palpite.s2.nome}</p>
                      </div>
                    )}
                  </div>

                </Col>
              </Row>
            </Container>
          </div>
        </div>
      )
    }

  }


  
}
  
function mapStateToProps(state) {
  return {
    match: state.match,
    jwt: state.jwt
  }
}

export default connect(
  mapStateToProps
)(JogoId);