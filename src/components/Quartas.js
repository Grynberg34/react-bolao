import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { Field, reduxForm } from 'redux-form';
import { SendResult } from '../actions';
import { GetRound8 } from '../actions';
import { CheckRound8 } from '../actions';
import Container from 'react-bootstrap/Container';
import "../scss/fasefinal.scss";

let Quartas= props => {

  const [msg, setMsg] = useState(false);

  async function submitRound8() {
    await store.dispatch(CheckRound8(props.jwt))

    if (props.checkRound8 === false) {
      setMsg(true);
    }

  }

  useEffect(() => {
    return () => {};
  }, 
  []);

  function submitGame() {
    var jogo = store.getState().form.Quartas.active.substring(3);
    var s1 = 's1-' + jogo;
    var s2 = 's2-' + jogo;
    var s1_placar = store.getState().form.Quartas.values[s1];
    var s2_placar = store.getState().form.Quartas.values[s2];

    var info = {
      id_jogo: jogo,
      s1_placar: s1_placar,
      s2_placar: s2_placar,
      vencedor: null,
      fase: 'final'
    }

    if ((s1_placar >= 0 && s2_placar >= 0) && s1_placar === s2_placar) {

      var v = 'vd-' + jogo;
      var vencedor_jogo = store.getState().form.Quartas.values[v];

      if (vencedor_jogo !== undefined) {
        info.vencedor = vencedor_jogo;
        store.dispatch(SendResult(props.jwt, info));
      }



    } else if ((s1_placar >= 0 && s2_placar >= 0) && (s1_placar > s2_placar || s2_placar > s1_placar)) {
      store.dispatch(SendResult(props.jwt, info));
    }


  }

  var round8 = props.round8;

  if (props.round8 === null) {
    store.dispatch(GetRound8(props.jwt))

    return (
      <div></div>
    )
  } else {
    return (
      <div id="fasefinal">
        <div className="content" style={{backgroundImage: `url('/user/background.png')`}}>
          <Container>
            <div className="fasefinal">
              <h1 className="fasefinal__title">Quartas de Final</h1>
              { round8.map( (match) => 
                <div className="fasefinal__jogo" key={match.id}>
                  <form onChange={submitGame}>
                    <div>
                      <label className="fasefinal__jogo__label" htmlFor={'s1-' + match.jogoId}><img className="fasefinal__jogo__img" src={match.s1.img} alt="" /></label>
                      <Field className="fasefinal__jogo__input" min='0' name={'s1-' + match.jogoId} component="input" type="number" />
                      <span className="fasefinal__jogo__vs"> x </span>
                      <Field className="fasefinal__jogo__input" min='0' name={'s2-' + match.jogoId} component="input" type="number" />
                      <label className="fasefinal__jogo__label--right" htmlFor={'s2-' + match.jogoId}><img className="fasefinal__jogo__img" src={match.s2.img} alt="" /></label>
                      <div className="fasefinal__jogo__vencedor">
                        <label className="fasefinal__jogo__vencedor__label" htmlFor={"vd-" + match.jogoId}>Vencedor (em caso de empate)</label>
                        <Field className="fasefinal__jogo__vencedor__input" name={"vd-" + match.jogoId} component="select">
                          <option disabled></option>
                          <option value={match.s1_id}>{match.s1.nome}</option>
                          <option value={match.s2_id}>{match.s2.nome}</option>
                        </Field>
                      </div>
                    </div>
                  </form>
                </div>
              )}

              {msg === true? <h4 className="fasefinal__msg">Preencha todos os jogos para avançar</h4>: null }

              <button className="fasefinal__button" onClick={submitRound8}>Avançar para as semifinais</button>
            </div>
          </Container>
        </div>
      </div>
    )
  }


  
}
  
function mapStateToProps(state) {
  return {
    round8: state.round8,
    checkRound8: state.checkRound8,
    jwt: state.jwt
  }
}

Quartas = reduxForm({
  form: 'Quartas'
})(Quartas)

export default connect(
  mapStateToProps
)(Quartas);