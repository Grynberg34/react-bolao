import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { GetGroups } from '../actions';
import { SendResult } from '../actions';
import { CheckGroupStage } from '../actions';
import { Field, reduxForm } from 'redux-form';

let JogosPrimeiraFase= props => {

  const [msg, setMsg] = useState(false);

  async function submitGroupStage() {
    await store.dispatch(CheckGroupStage(props.jwt))

    console.log(props.checkGroupStage)
    
    if (props.checkGroupStage === false) {
      setMsg(true);
    }
  }

  useEffect(() => {
    return () => {};
  }, 
  []); 

  function submitGame() {
    var jogo = store.getState().form.Jogos.active.substring(3);
    var s1 = 's1-' + jogo;
    var s2 = 's2-' + jogo;
    var s1_placar = store.getState().form.Jogos.values[s1];
    var s2_placar = store.getState().form.Jogos.values[s2];

    var info = {
      id_jogo: jogo,
      s1_placar: s1_placar,
      s2_placar: s2_placar,
      fase: 'grupos'
    }

    if (s1_placar >= 0 && s2_placar >= 0) {
      store.dispatch(SendResult(props.jwt, info))
    }

  }

  var groups = props.groups;

  if (groups == null) {
    store.dispatch(GetGroups(props.jwt))

    return (
      <div></div>
    )
  } else {
    return (
      <div>
        { groups.map( (group) => 
        <div key={group.jogos[0].s1.grupo}>
          <h2>Grupo {group.jogos[0].s1.grupo}</h2>
          { group.jogos.map( (match) => 
            <div key={match.id}>
              <form onChange={submitGame}>
                <div>
                  <label htmlFor={'s1-' + match.id}>{match.s1.nome}</label>
                  <Field min='0' name={'s1-' + match.id} component="input" type="number" />
                  <span> x </span>
                  <Field min='0' name={'s2-' + match.id} component="input" type="number" />
                  <label htmlFor={'s2-' + match.id}>{match.s2.nome}</label>
                </div>
              </form>
            </div>
          )}

        </div>
      )}

      {msg === true? <h4>Preencha todos os jogos para avançar</h4>: null }
      
      <button onClick={submitGroupStage}>Avançar para as oitavas</button>

    </div>
    )
  }
  
}
  
function mapStateToProps(state) {
  return {
    groups: state.groups,
    checkGroupStage : state.checkGroupStage,
    jwt: state.jwt
  }
}

JogosPrimeiraFase = reduxForm({
  form: 'Jogos'
})(JogosPrimeiraFase)

export default connect(
  mapStateToProps
)(JogosPrimeiraFase);