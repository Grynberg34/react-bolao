import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { GetAllGuesses } from '../actions';

let TodosPalpites= props => {

  var palpites = props.allGuesses;

  if (palpites === null) {
    store.dispatch(GetAllGuesses(props.jwt))
    return (
      <div></div>
    )
  } else {
    return (
      <div>

        <div>
          <h1>Campeão: {palpites[5].Seleção.nome}</h1>
          <p>Bola de Ouro: {palpites[6][0].ganhador}</p>
          <p>Chuteira de Ouro: {palpites[6][1].ganhador}</p>
        </div>

        <div>
          <h1>Total de pontos: {palpites[7].pontos}</h1>
          <p>Pontos Jogos: {palpites[7].jogos}</p>
          <p>Pontos Classificados Oitavas: {palpites[7].oitavas} {'(' + palpites[7].oitavas / 25 + ' seleções)'}</p>
          <p>Pontos Classificados Quartas: {palpites[7].quartas} {'(' + palpites[7].quartas / 50 + ' seleções)'}</p>
          <p>Pontos Classificados Semifinais: {palpites[7].semis} {'(' + palpites[7].semis / 100 + ' seleções)'}</p>
          <p>Pontos Classificados Final + Disputa de terceiro: {palpites[7].finais}</p>
          <p>Pontos Campeão: {palpites[7].campeão}</p>
          <p>Pontos Prêmios: {palpites[7].prêmios}</p>
        </div>

        <div>
          
          <h1>Fase de grupos</h1>
    
          { palpites[0].map( (match) => 
            <div key={match.id}>
              <p>
                {match.Jogo.s1.nome} {match.s1_placar} x {match.s2_placar} {match.Jogo.s2.nome}  {match.pontos > 0? <strong>({match.pontos})</strong>: null }
              </p>
            </div>
          )}
        </div>

        <div>
          <h1>Oitavas de Final</h1>
    
          { palpites[1].map( (match) => 
            <div key={match.id}>
              <p>{match.s1.nome} {match.s1_placar} x {match.s2_placar} {match.s2.nome} {match.pontos > 0? <strong>({match.pontos})</strong>: null } </p>
            </div>
          )}
        </div>

        <div>
          <h1>Quartas de Final</h1>
    
          { palpites[2].map( (match) => 
            <div key={match.id}>
              <p>{match.s1.nome} {match.s1_placar} x {match.s2_placar} {match.s2.nome} {match.pontos > 0? <strong>({match.pontos})</strong>: null } </p>
            </div>
          )}
        </div>

        <div>
          <h1>Semifinais</h1>
    
          { palpites[3].map( (match) => 
            <div key={match.id}>
              <p>{match.s1.nome} {match.s1_placar} x {match.s2_placar} {match.s2.nome} {match.pontos > 0? <strong>({match.pontos})</strong>: null } </p>
            </div>
          )}
        </div>

        <div>
          <h1>Disputa do terceiro lugar</h1>
    
          <div key={palpites[4][0].id}>
            <p>{palpites[4][0].s1.nome} {palpites[4][0].s1_placar} x {palpites[4][0].s2_placar} {palpites[4][0].s2.nome} {palpites[4][0].pontos > 0? <strong>({palpites[4][0].pontos})</strong>: null }</p>
          </div>

        </div>

        <div>
          <h1>Final</h1>
    
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
    allGuesses: state.allGuesses,
    jwt: state.jwt
  }
}

export default connect(
  mapStateToProps
)(TodosPalpites);