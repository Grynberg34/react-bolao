import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { Field, reduxForm } from 'redux-form';
import { SendResult } from '../actions';
import { GetRound16 } from '../actions';
import { GetRound8 } from '../actions'

let Oitavas= props => {

  function submitGame() {
    var jogo = store.getState().form.Oitavas.active.substring(3);
    var s1 = 's1-' + jogo;
    var s2 = 's2-' + jogo;
    var s1_placar = store.getState().form.Oitavas.values[s1];
    var s2_placar = store.getState().form.Oitavas.values[s2];

    var info = {
      id_jogo: jogo,
      s1_placar: s1_placar,
      s2_placar: s2_placar,
      vencedor: null
    }

    if ((s1_placar >= 0 && s2_placar >= 0) && s1_placar === s2_placar) {

      var v = 'vd-' + jogo;
      var vencedor_jogo = store.getState().form.Oitavas.values[v];

      if (vencedor_jogo !== undefined) {
        info.vencedor = vencedor_jogo
        store.dispatch(SendResult(props.jwt, info))
        store.dispatch(GetRound8(props.jwt))
      }



    } else if ((s1_placar >= 0 && s2_placar >= 0) && (s1_placar > s2_placar || s2_placar > s1_placar)) {
      console.log('sent')
      store.dispatch(SendResult(props.jwt, info))
      store.dispatch(GetRound8(props.jwt))
    }


  }

  var round16 = props.round16;

  if (props.round16 === null) {
    store.dispatch(GetRound16(props.jwt))

    return (
      <div></div>
    )
  } else {
    return (
      <div>
        <h1>Oitavas de Final</h1>
        { round16.map( (match) => 
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
      </div>
    )
  }


  
}
  
function mapStateToProps(state) {
  return {
    round16: state.round16,
    round8: state.round8,
    jwt: state.jwt
  }
}

Oitavas = reduxForm({
  form: 'Oitavas'
})(Oitavas)

export default connect(
  mapStateToProps
)(Oitavas);