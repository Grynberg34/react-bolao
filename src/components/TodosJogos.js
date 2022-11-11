import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { Link } from "react-router-dom";
import { GetAllMatches } from '../actions';
import Container from 'react-bootstrap/Container';
import "../scss/todosjogos.scss";
import moment from 'moment';
import 'moment/locale/pt-br';
moment.locale('pt-br')

function TodosJogos(props) {


  var matches = props.allMatches;

  var jwt = props.jwt;

  if (matches === null) {

    store.dispatch(GetAllMatches(jwt))

    return (
      <div></div>
    )

  } else {
    return (
      <div id="todosjogos">
        <div className="content" style={{backgroundImage: `url('/user/background.png')`}}>
          <Container>
            <div className="todosjogos">
              <h1 className="todosjogos__msg">Clique em um jogo para ver todos os palpites</h1>

              <div className="todosjogos__fase">
                <h2 className="todosjogos__fase__title">Fase de grupos</h2>
                { matches[0].map( (match) => 
                  <div className="todosjogos__fase__jogo" key={match.id}>
                    <p className="todosjogos__fase__jogo__info">{moment(match.data).zone('+000').format('LLL')}</p>
                    <Link className="todosjogos__fase__jogo__link" to={'/user/jogos/' + match.id}><img className="todosjogos__fase__jogo__img" src={match.s1.img} alt="" /> {match.s1_placar} x {match.s2_placar} <img className="todosjogos__fase__jogo__img right" src={match.s2.img} alt="" /></Link>
                  </div>
                )}
              </div>

              <div className="todosjogos__fase">
                <h2 className="todosjogos__fase__title">Oitavas de Final</h2>
                { matches[1].map( (match) => 
                  <div className="todosjogos__fase__jogo" key={match.id}>
                    <p className="todosjogos__fase__jogo__info">{moment(match.data).zone('+000').format('LLL')}</p>
                    <Link className="todosjogos__fase__jogo__link" to={'/user/jogos/' + match.id}><img className="todosjogos__fase__jogo__img" src={match.s1.img} alt="" /> {match.s1_placar} x {match.s2_placar} <img className="todosjogos__fase__jogo__img right" src={match.s2.img} alt="" /></Link>
                  </div>
                )}
              </div>

              <div className="todosjogos__fase">
                <h2 className="todosjogos__fase__title">Quartas de Final</h2>
                { matches[2].map( (match) => 
                  <div className="todosjogos__fase__jogo" key={match.id}>
                    <p className="todosjogos__fase__jogo__info">{moment(match.data).zone('+000').format('LLL')}</p>
                    <Link className="todosjogos__fase__jogo__link" to={'/user/jogos/' + match.id}><img className="todosjogos__fase__jogo__img" src={match.s1.img} alt="" /> {match.s1_placar} x {match.s2_placar} <img className="todosjogos__fase__jogo__img right" src={match.s2.img} alt="" /></Link>
                  </div>
                )}
              </div>

              <div className="todosjogos__fase">
                <h2 className="todosjogos__fase__title">Semifinais</h2>
                { matches[3].map( (match) => 
                  <div className="todosjogos__fase__jogo" key={match.id}>
                    <p className="todosjogos__fase__jogo__info">{moment(match.data).zone('+000').format('LLL')}</p>
                    <Link className="todosjogos__fase__jogo__link" to={'/user/jogos/' + match.id}><img className="todosjogos__fase__jogo__img" src={match.s1.img} alt="" /> {match.s1_placar} x {match.s2_placar} <img className="todosjogos__fase__jogo__img right" src={match.s2.img} alt="" /></Link>
                  </div>
                )}
              </div>

              <div className="todosjogos__fase">
                <h2 className="todosjogos__fase__title">Disputa de terceiro lugar</h2>

                <div className="todosjogos__fase__jogo">
                  <p className="todosjogos__fase__jogo__info">{moment(matches[4][0].data).zone('+000').format('LLL')}</p>
                  <Link className="todosjogos__fase__jogo__link" to={"/user/jogos/" + matches[4][0].id}><img className="todosjogos__fase__jogo__img" src={matches[4][0].s1.img} alt="" /> {matches[4][0].s1_placar} x {matches[4][0].s2_placar} <img className="todosjogos__fase__jogo__img right" src={matches[4][0].s2.img} alt="" /></Link>
                </div>

              </div>

              <div className="todosjogos__fase">
                <h2 className="todosjogos__fase__title">Final</h2>

                <div className="todosjogos__fase__jogo">
                  <p className="todosjogos__fase__jogo__info">{moment(matches[4][1].data).zone('+000').format('LLL')}</p>
                  <Link className="todosjogos__fase__jogo__link" to={"/user/jogos/" + matches[4][1].id}><img className="todosjogos__fase__jogo__img" src={matches[4][1].s1.img} alt="" /> {matches[4][1].s1_placar} x {matches[4][1].s2_placar} <img className="todosjogos__fase__jogo__img right" src={matches[4][1].s2.img} alt="" /></Link>
                </div>

              </div>

            </div>
          </Container>
        </div>
      </div>
    )
  }
    


}

function mapStateToProps(state) {
  return {
    jwt: state.jwt,
    allMatches: state.allMatches
  }
}

export default connect(
  mapStateToProps
)(TodosJogos);

