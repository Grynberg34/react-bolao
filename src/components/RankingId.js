import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { GetGuessesById } from '../actions';
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import "../scss/todospalpites.scss";


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
      <div id="todospalpites">
        <div className="content" style={{backgroundImage: `url('/user/background.png')`}}>

            <div className="todospalpites">
              <Container>
                <h1 className="todospalpites__nome">{palpites[5].nome}</h1>

                <div className="todospalpites__header" style={{backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0.7) 100%), url('${palpites[5].Seleção.img}')`}}>
                  <h1 className="todospalpites__header__title">Campeão: {palpites[5].Seleção.nome}</h1>
                  <h2 className="todospalpites__header__subtitle">Bola de Ouro: {palpites[6][0].ganhador}</h2>
                  <h2 className="todospalpites__header__subtitle">Chuteira de Ouro: {palpites[6][1].ganhador}</h2>
                </div>

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

              </Container>
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