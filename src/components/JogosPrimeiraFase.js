import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { GetGroups } from '../actions';
import { SendResult } from '../actions';
import { CheckGroupStage } from '../actions';
import { Field, reduxForm } from 'redux-form';
import "../scss/jogos-pf.scss";
import debounce from 'lodash.debounce';


let JogosPrimeiraFase= props => {

  const [msg, setMsg] = useState(false);

  async function submitGroupStage() {
    await store.dispatch(CheckGroupStage(props.jwt))
    
    if (props.checkGroupStage === false) {
      setMsg(true);
    }
  }

  useEffect(() => {
    return () => {};
  }, 
  []); 

  function submitGame() {
    console.log(store.getState().form.Jogos.active)
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
      setTimeout(() => {
        store.dispatch(SendResult(props.jwt, info))
      }, "1000")
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
        <div className="grupo" key={group.letra}>
          <h2 className="grupo__title">Grupo {group.letra}</h2>
          { group.jogos.map( (match) => 
            <div className="grupo__jogo" key={match.id}>
              <form onChange={debounce(submitGame, 200)}>
                <div>
                  <label className="grupo__jogo__label" htmlFor={'s1-' + match.id}> <img className="grupo__jogo__img" src={match.s1.img} alt="" /></label>
                  <Field className="grupo__jogo__input" min='0' name={'s1-' + match.id} component="input" type="number" />
                  <span className="grupo__jogo__vs"> x </span>
                  <Field className="grupo__jogo__input" min='0' name={'s2-' + match.id} component="input" type="number" />
                  <label className="grupo__jogo__label--right" htmlFor={'s2-' + match.id}><img className="grupo__jogo__img" src={match.s2.img} alt="" /></label>
                </div>
              </form>
            </div>
          )}

        </div>
      )}

      {msg === true? <h4 className="content__msg">Preencha todos os jogos para avançar</h4>: null }
      
      <button className="content__button" onClick={submitGroupStage}>Avançar para as oitavas</button>

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