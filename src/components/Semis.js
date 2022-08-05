import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { Field, reduxForm } from 'redux-form';
import { SendResult } from '../actions';
import { GetSemis } from '../actions';
import { CheckSemis } from '../actions';

let Semis= props => {

  function submitSemis() {
    store.dispatch(CheckSemis(props.jwt))
  }

  function submitGame() {
    var jogo = store.getState().form.Semis.active.substring(3);
    var s1 = 's1-' + jogo;
    var s2 = 's2-' + jogo;
    var s1_placar = store.getState().form.Semis.values[s1];
    var s2_placar = store.getState().form.Semis.values[s2];

    var info = {
      id_jogo: jogo,
      s1_placar: s1_placar,
      s2_placar: s2_placar,
      vencedor: null,
      fase: 'final'
    }

    if ((s1_placar >= 0 && s2_placar >= 0) && s1_placar === s2_placar) {

      var v = 'vd-' + jogo;
      var vencedor_jogo = store.getState().form.Semis.values[v];

      if (vencedor_jogo !== undefined) {
        info.vencedor = vencedor_jogo;
        store.dispatch(SendResult(props.jwt, info));
      }



    } else if ((s1_placar >= 0 && s2_placar >= 0) && (s1_placar > s2_placar || s2_placar > s1_placar)) {
      store.dispatch(SendResult(props.jwt, info));
    }


  }

  var semis = props.semis;

  if (props.semis === null) {
    store.dispatch(GetSemis(props.jwt))

    return (
      <div></div>
    )
  } else {
    return (
      <div>
        <h1>Semifinais</h1>
        { semis.map( (match) => 
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
        <button onClick={submitSemis}>Avançar para a final</button>
      </div>
    )
  }


  
}
  
function mapStateToProps(state) {
  return {
    semis: state.semis,
    jwt: state.jwt
  }
}

Semis = reduxForm({
  form: 'Semis'
})(Semis)

export default connect(
  mapStateToProps
)(Semis);