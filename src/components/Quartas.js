import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { Field, reduxForm } from 'redux-form';
import { SendResult } from '../actions';
import { GetRound8 } from '../actions';
import { CheckRound8 } from '../actions';

let Quartas= props => {

  function submitRound8() {
    store.dispatch(CheckRound8(props.jwt))
  }

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
      <div>
        <h1>Quartas de Final</h1>
        { round8.map( (match) => 
          <div key={match.id}>
            <form onChange={submitGame}>
              <div>
                <label htmlFor={'s1-' + match.jogoId}>{match.s1.nome}</label>
                <Field min='0' name={'s1-' + match.jogoId} component="input" type="number" />
                <label htmlFor={'s2-' + match.jogoId}>{match.s2.nome}</label>
                <Field min='0' name={'s2-' + match.jogoId} component="input" type="number" />
                <label htmlFor={"vd-" + match.jogoId}>Vencedor (em caso de empate)</label>
                <Field name={"vd-" + match.jogoId} component="select">
                  <option disabled></option>
                  <option value={match.s1_id}>{match.s1.nome}</option>
                  <option value={match.s2_id}>{match.s2.nome}</option>
                </Field>
              </div>
            </form>
          </div>
        )}
        <button onClick={submitRound8}>Avançar para as semifinais</button>
      </div>
    )
  }


  
}
  
function mapStateToProps(state) {
  return {
    round8: state.round8,
    jwt: state.jwt
  }
}

Quartas = reduxForm({
  form: 'Quartas'
})(Quartas)

export default connect(
  mapStateToProps
)(Quartas);