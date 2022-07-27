import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { Field, reduxForm } from 'redux-form';
import { GetRound16 } from '../actions';

let Oitavas= props => {

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
            <form>
              <div>
                <label htmlFor={'s1-' + match.s1_id}>{match.s1.nome}</label>
                <Field min='0' name={'s1-' + match.s1_id} component="input" type="number" />
                <label htmlFor={'s2-' + match.s2_id}>{match.s2.nome}</label>
                <Field min='0' name={'s2-' + match.s2_id} component="input" type="number" />
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
    jwt: state.jwt
  }
}

Oitavas = reduxForm({
  form: 'Oitavas'
})(Oitavas)

export default connect(
  mapStateToProps
)(Oitavas);