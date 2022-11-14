import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { Field, reduxForm } from 'redux-form';
import { SendResult } from '../actions';
import { GetFinals } from '../actions';
import { CheckFinals } from '../actions';
import { SendAward } from '../actions';
import Container from 'react-bootstrap/Container';
import "../scss/finais.scss";
import debounce from 'lodash.debounce';

let Finais= props => {

  const [msg, setMsg] = useState(false);

  async function submitFinals() {
    await store.dispatch(CheckFinals(props.jwt))

    if (props.checkFinals === false) {
      setMsg(true);
    }
  }

  useEffect(() => {
    return () => {};
  }, 
  []); 

  function submitAward() {

    var prêmio = store.getState().form.Finais.active;

    var award = {
      id_prêmio: store.getState().form.Finais.active.substring(1),
      ganhador: store.getState().form.Finais.values[prêmio]
    }

    store.dispatch(SendAward(props.jwt, award))

  }

  function submitGame() {
    var jogo = store.getState().form.Finais.active.substring(3);
    var s1 = 's1-' + jogo;
    var s2 = 's2-' + jogo;
    var s1_placar = store.getState().form.Finais.values[s1];
    var s2_placar = store.getState().form.Finais.values[s2];

    var info = {
      id_jogo: jogo,
      s1_placar: s1_placar,
      s2_placar: s2_placar,
      vencedor: null,
      fase: 'final'
    }

    if ((s1_placar >= 0 && s2_placar >= 0) && s1_placar === s2_placar) {

      var v = 'vd-' + jogo;
      var vencedor_jogo = store.getState().form.Finais.values[v];

      if (vencedor_jogo !== undefined) {
        info.vencedor = vencedor_jogo;
        store.dispatch(SendResult(props.jwt, info));
      }



    } else if ((s1_placar >= 0 && s2_placar >= 0) && (s1_placar > s2_placar || s2_placar > s1_placar)) {
      store.dispatch(SendResult(props.jwt, info));
    }


  }

  var finals = props.finals;

  if (finals === null) {
    store.dispatch(GetFinals(props.jwt))

    return (
      <div></div>
    )
  } else {
    return (
      <div id="final">
        <div className="content" style={{backgroundImage: `url('/user/background.png')`}}>
          <Container>
            <div className="fasefinal">
              <h1 className="fasefinal__title">Disputa do terceiro lugar</h1>
              <div className="fasefinal__jogo">
                <form onChange={debounce(submitGame, 400)}>
                  <div>
                    <label className="fasefinal__jogo__label" htmlFor={'s1-' + finals[0].jogoId}><img className="fasefinal__jogo__img" src={finals[0].s1.img} alt="" /></label>
                    <Field className="fasefinal__jogo__input" min='0' name={'s1-' + finals[0].jogoId} component="input" type="number" />
                    <span className="fasefinal__jogo__vs"> x </span>
                    <Field className="fasefinal__jogo__input" min='0' name={'s2-' + finals[0].jogoId} component="input" type="number" />
                    <label className="fasefinal__jogo__label--right" htmlFor={'s2-' + finals[0].jogoId}><img className="fasefinal__jogo__img" src={finals[0].s2.img} alt="" /></label>
                    <div className="fasefinal__jogo__vencedor">
                      <label className="fasefinal__jogo__vencedor__label" htmlFor={"vd-" + finals[0].jogoId}>Vencedor (em caso de empate)</label>
                      <Field className="fasefinal__jogo__vencedor__input" name={"vd-" + finals[0].jogoId} component="select">
                        <option disabled></option>
                        <option value={finals[0].s1_id}>{finals[0].s1.nome}</option>
                        <option value={finals[0].s2_id}>{finals[0].s2.nome}</option>
                      </Field>
                    </div>
                  </div>
                </form>
              </div>

              <h1 className="fasefinal__title">Final</h1>
              <div className="fasefinal__jogo">
                <form onChange={debounce(submitAward, 2000)}>
                  <div>
                    <label className="fasefinal__jogo__label" htmlFor={'s1-' + finals[1].jogoId}><img className="fasefinal__jogo__img" src={finals[1].s1.img} alt="" /></label>
                    <Field className="fasefinal__jogo__input" min='0' name={'s1-' + finals[1].jogoId} component="input" type="number" />
                    <span className="fasefinal__jogo__vs"> x </span>
                    <Field className="fasefinal__jogo__input" min='0' name={'s2-' + finals[1].jogoId} component="input" type="number" />
                    <label className="fasefinal__jogo__label--right" htmlFor={'s2-' + finals[1].jogoId}><img className="fasefinal__jogo__img" src={finals[1].s2.img} alt="" /></label>
                    <div className="fasefinal__jogo__vencedor">
                      <label className="fasefinal__jogo__vencedor__label" htmlFor={"vd-" + finals[1].jogoId}>Vencedor (em caso de empate)</label>
                      <Field className="fasefinal__jogo__vencedor__input" name={"vd-" + finals[1].jogoId} component="select">
                        <option disabled></option>
                        <option value={finals[1].s1_id}>{finals[1].s1.nome}</option>
                        <option value={finals[1].s2_id}>{finals[1].s2.nome}</option>
                      </Field>
                    </div>
                  </div>
                </form>
              </div>

              <h1 className="fasefinal__title">Prêmios</h1>
              <form onChange={submitAward}>
                <div className="fasefinal__premios">
                  <label className="fasefinal__premios__label" htmlFor="p1">Bola de Ouro</label>
                  <Field className="fasefinal__premios__input" name="p1" component="input" type="text" />
                  <label className="fasefinal__premios__label" htmlFor="p2">Chuteira de Ouro</label>
                  <Field className="fasefinal__premios__input" name="p2" component="input" type="text" />
                </div>
              </form>

              {msg === true? <h4 className="fasefinal__msg">Preencha todos os jogos e prêmios para avançar</h4>: null }

              <button className="fasefinal__button" onClick={submitFinals}>Finalizar bolão</button>
            </div>
          </Container>
        </div>
      </div>
    )
  }


  
}
  
function mapStateToProps(state) {
  return {
    finals: state.finals,
    checkFinals: state.checkFinals,
    jwt: state.jwt
  }
}

Finais = reduxForm({
  form: 'Finais'
})(Finais)

export default connect(
  mapStateToProps
)(Finais);