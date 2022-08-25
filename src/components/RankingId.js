import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { GetGuessesById } from '../actions';
import { useParams } from "react-router-dom";

let RankingId= props => {

  var { id } = useParams();

  var palpites = props.guessesById;

  if (palpites === null || parseInt(id) !== palpites[5].id) {
    store.dispatch(GetGuessesById(props.jwt, id))
    return (
      <div></div>
    )
  } else {
    return (
      <div>

        <div>
          <h1>{palpites[5].nome}</h1>
          <h2>Campeão: {palpites[5].Seleção.nome}</h2>
          <p>Pontos Campeão: {palpites[7].campeão}</p>
          <p>Bola de Ouro: {palpites[6][0].ganhador}</p>
          <p>Chuteira de Ouro: {palpites[6][1].ganhador}</p>
          <p>Pontos Prêmios: {palpites[7].prêmios}</p>
        </div>

        <div>
          <h1>Total de pontos: {palpites[7].pontos}</h1>
        </div>

        <div>
          
          <h1>Fase de grupos</h1>
          <p>Pontos Jogos: {palpites[7].jogos}</p>
    
          { palpites[0].map( (grupo) => 

            <div key={grupo.letra}>
              <h2>Grupo {grupo.letra}</h2>
              { grupo.palpites.map( (match) => 
                <div key={match.id}>
                  <p>
                    {match.Jogo.s1.nome} {match.s1_placar} x {match.s2_placar} {match.Jogo.s2.nome}  {match.pontos > 0? <strong>({match.pontos})</strong>: null }
                  </p>
                </div>
              )}

            </div>

          )}
        </div>

        <div>
          <h1>Oitavas de Final</h1>
          <p>Pontos Classificados Oitavas: {palpites[7].oitavas}</p>
    
          { palpites[1].map( (match) => 
            <div key={match.id}>
              <p>{match.s1.nome} {match.s1_placar} x {match.s2_placar} {match.s2.nome} {match.pontos > 0? <strong>({match.pontos})</strong>: null } </p>
            </div>
          )}
        </div>

        <div>
          <h1>Quartas de Final</h1>
          <p>Pontos Classificados Quartas: {palpites[7].quartas}</p>
          { palpites[2].map( (match) => 
            <div key={match.id}>
              <p>{match.s1.nome} {match.s1_placar} x {match.s2_placar} {match.s2.nome} {match.pontos > 0? <strong>({match.pontos})</strong>: null } </p>
            </div>
          )}
        </div>

        <div>
          <h1>Semifinais</h1>
          <p>Pontos Classificados Semifinais: {palpites[7].semis}</p>
          { palpites[3].map( (match) => 
            <div key={match.id}>
              <p>{match.s1.nome} {match.s1_placar} x {match.s2_placar} {match.s2.nome} {match.pontos > 0? <strong>({match.pontos})</strong>: null } </p>
            </div>
          )}
        </div>

        <div>
          <h1>Disputa do terceiro lugar</h1>
          <p>Pontos Classificados Terceiro: {palpites[7].terceiro}</p>
          <div key={palpites[4][0].id}>
            <p>{palpites[4][0].s1.nome} {palpites[4][0].s1_placar} x {palpites[4][0].s2_placar} {palpites[4][0].s2.nome} {palpites[4][0].pontos > 0? <strong>({palpites[4][0].pontos})</strong>: null }</p>
          </div>

        </div>

        <div>
          <h1>Final</h1>
          <p>Pontos Classificados Final: {palpites[7].final}</p>
          <div key={palpites[4][1].id}>
            <p>{palpites[4][1].s1.nome} {palpites[4][1].s1_placar} x {palpites[4][1].s2_placar} {palpites[4][1].s2.nome} {palpites[4][1].pontos > 0? <strong>({palpites[4][1].pontos})</strong>: null }</p>
          </div>

        </div>
  
      </div>
    )
  }


  
}
  
function mapStateToProps(state) {
  return {
    guessesById: state.guessesById,
    jwt: state.jwt
  }
}

export default connect(
  mapStateToProps
)(RankingId);