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
        <div className="todospalpites__pontos">
          <h1 className="todospalpites__pontos__total">Total de pontos: {palpites[7].pontos}</h1>
          <h2 className="todospalpites__pontos__sub">Pontos Jogos: {palpites[7].jogos}</h2>
          <h2 className="todospalpites__pontos__sub">Pontos Classificados Oitavas: {palpites[7].oitavas}</h2>
          <h2 className="todospalpites__pontos__sub">Pontos Classificados Quartas: {palpites[7].quartas}</h2>
          <h2 className="todospalpites__pontos__sub">Pontos Classificados Semifinais: {palpites[7].semis}</h2>
          <h2 className="todospalpites__pontos__sub">Pontos Classificados Terceiro: {palpites[7].terceiro}</h2>
          <h2 className="todospalpites__pontos__sub">Pontos Classificados Final: {palpites[7].final}</h2>
          <h2 className="todospalpites__pontos__sub">Pontos Campeão: {palpites[7].campeão}</h2>
          <h2 className="todospalpites__pontos__sub">Pontos Prêmios: {palpites[7].prêmios}</h2>
        </div>      


        <div className="todospalpites__palpites">

          <h1 className="todospalpites__palpites__title">Seus palpites</h1>
          
          <h2 className="todospalpites__palpites__subtitle">Fase de grupos</h2>

          { palpites[0].map( (grupo) => 

            <div className="todospalpites__palpites__grupo" key={grupo.letra}>
              <h2 className="todospalpites__palpites__grupo__title">Grupo {grupo.letra}</h2>
              { grupo.palpites.map( (match) => 
                <div className="todospalpites__palpites__grupo__jogo" key={match.id}>
                  <p className="todospalpites__palpites__grupo__jogo__text">
                    <img className="todospalpites__palpites__grupo__jogo__img" src={match.Jogo.s1.img} alt="" /> {match.s1_placar} x {match.s2_placar} <img className="todospalpites__palpites__grupo__jogo__img right" src={match.Jogo.s2.img} alt="" />
                  </p>
                  {match.pontos > 0? <p className="todospalpites__palpites__grupo__jogo__pontos">{match.pontos} pontos</p>: null }
                </div>
              )}

            </div>
            
          )}

          <div className="todospalpites__palpites__finais">
            <h1 className="todospalpites__palpites__finais__title">Oitavas de Final</h1>

            { palpites[1].map( (match) => 
              <div className="todospalpites__palpites__finais__jogo" key={match.id}>
                <p className="todospalpites__palpites__finais__jogo__text"><img className="todospalpites__palpites__finais__jogo__img" src={match.s1.img} alt="" /> {match.s1_placar} x {match.s2_placar} <img className="todospalpites__palpites__finais__jogo__img right" src={match.s2.img} alt="" /> </p>
                {match.pontos > 0? <p className="todospalpites__palpites__finais__jogo__pontos">{match.pontos} pontos </p>: null }
              </div>
            )}
          </div>

          <div className="todospalpites__palpites__finais">
            <h1 className="todospalpites__palpites__finais__title">Quartas de Final</h1>
            { palpites[2].map( (match) => 
              <div className="todospalpites__palpites__finais__jogo" key={match.id}>
                <p className="todospalpites__palpites__finais__jogo__text"><img className="todospalpites__palpites__finais__jogo__img" src={match.s1.img} alt="" /> {match.s1_placar} x {match.s2_placar} <img className="todospalpites__palpites__finais__jogo__img right" src={match.s2.img} alt="" /></p>
                {match.pontos > 0? <p className="todospalpites__palpites__finais__jogo__pontos">{match.pontos} pontos</p>: null }
              </div>
            )}
          </div>

          <div className="todospalpites__palpites__finais">
            <h1 className="todospalpites__palpites__finais__title">Semifinais</h1>
            { palpites[3].map( (match) => 
              <div className="todospalpites__palpites__finais__jogo" key={match.id}>
                <p className="todospalpites__palpites__finais__jogo__text"><img className="todospalpites__palpites__finais__jogo__img" src={match.s1.img} alt="" /> {match.s1_placar} x {match.s2_placar} <img className="todospalpites__palpites__finais__jogo__img right" src={match.s2.img} alt="" /></p>
                {match.pontos > 0? <p className="todospalpites__palpites__finais__jogo__pontos">{match.pontos} pontos</p>: null }
              </div>
            )}
          </div>

          <div className="todospalpites__palpites__finais">
            <h1 className="todospalpites__palpites__finais__title">Terceiro Lugar</h1>
            <div className="todospalpites__palpites__finais__jogo" key={palpites[4][0].id}>
              <p className="todospalpites__palpites__finais__jogo__text"><img className="todospalpites__palpites__finais__jogo__img" src={palpites[4][0].s1.img} alt="" /> {palpites[4][0].s1_placar} x {palpites[4][0].s2_placar} <img className="todospalpites__palpites__finais__jogo__img right" src={palpites[4][0].s2.img} alt="" /></p>
              {palpites[4][0].pontos > 0? <p className="todospalpites__palpites__finais__jogo__pontos">{palpites[4][0].pontos} pontos</p>: null }
            </div>

          </div>

          <div className="todospalpites__palpites__finais">
            <h1 className="todospalpites__palpites__finais__title">Final</h1>
            <div className="todospalpites__palpites__finais__jogo" key={palpites[4][1].id}>
              <p className="todospalpites__palpites__finais__jogo__text"><img className="todospalpites__palpites__finais__jogo__img" src={palpites[4][1].s1.img} alt="" /> {palpites[4][1].s1_placar} x {palpites[4][1].s2_placar} <img className="todospalpites__palpites__finais__jogo__img right" src={palpites[4][1].s2.img} alt="" /></p>
              {palpites[4][1].pontos > 0? <p className="todospalpites__palpites__finais__jogo__pontos">{palpites[4][1].pontos} pontos</p>: null }
            </div>

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