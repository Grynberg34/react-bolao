import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { Link } from "react-router-dom";
import { GetAllMatches } from '../actions';

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
      <div>
        <h1>Jogos</h1>

        <div>
          <h2>Fase de grupos</h2>
          { matches[0].map( (match) => 
            <div key={match.id}>
              <Link to={'/user/jogos/' + match.id}>{match.s1.nome} {match.s1_placar} x {match.s2_placar} {match.s2.nome}</Link>
            </div>
          )}
        </div>

        <div>
          <h2>Oitavas de Final</h2>
          { matches[1].map( (match) => 
            <div key={match.id}>
              <Link to={'/user/jogos/' + match.id}>{match.s1.nome} {match.s1_placar} x {match.s2_placar} {match.s2.nome}</Link>
            </div>
          )}
        </div>

        <div>
          <h2>Quartas de Final</h2>
          { matches[2].map( (match) => 
            <div key={match.id}>
              <Link to={'/user/jogos/' + match.id}>{match.s1.nome} {match.s1_placar} x {match.s2_placar} {match.s2.nome}</Link>
            </div>
          )}
        </div>

        <div>
          <h2>Semifinais</h2>
          { matches[3].map( (match) => 
            <div key={match.id}>
              <Link to={'/user/jogos/' + match.id}>{match.s1.nome} {match.s1_placar} x {match.s2_placar} {match.s2.nome}</Link>
            </div>
          )}
        </div>

        <div>
          <h2>Disputa de terceiro lugar</h2>

          <div>
            <Link to={"/user/jogos/" + matches[4][0].id}>{matches[4][0].s1.nome} {matches[4][0].s1_placar} x {matches[4][0].s2_placar} {matches[4][0].s2.nome}</Link>
          </div>

        </div>

        <div>
          <h2>Final</h2>

          <div>
            <Link to={"/user/jogos/" + matches[4][1].id}>{matches[4][1].s1.nome} {matches[4][1].s1_placar} x {matches[4][1].s2_placar} {matches[4][1].s2.nome}</Link>
          </div>

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

