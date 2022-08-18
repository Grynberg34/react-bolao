import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { GetMatchById } from '../actions';
import { useParams } from "react-router-dom";

let JogoId= props => {

  var { id } = useParams();

  var match = props.match;

  if (match === null || parseInt(id) !== match.id) {
    store.dispatch(GetMatchById(props.jwt, id))
    return (
      <div></div>
    )
  } else {

    if (id < 49) {
      return (
        <div>
          <h1>{match.s1.nome} {match.s1_placar} x {match.s2_placar} {match.s2.nome}</h1>
  
          { match.palpites.map( (palpite) => 
            <div key={palpite.id}>
              <p><strong>{palpite.User.nome}:</strong> {palpite.s1_placar} x {palpite.s2_placar}</p>
            </div>
          )}
        </div>
      )
    } else {
      return (
        <div>
          <h1>{match.s1.nome} {match.s1_placar} x {match.s2_placar} {match.s2.nome}</h1>
  
          { match.palpites.map( (palpite) => 
            <div key={palpite.id}>
              <p><strong>{palpite.User.nome}:</strong> {palpite.s1.nome} {palpite.s1_placar} x {palpite.s2_placar} {palpite.s2.nome}</p>
            </div>
          )}
        </div>
      )
    }

  }


  
}
  
function mapStateToProps(state) {
  return {
    match: state.match,
    jwt: state.jwt
  }
}

export default connect(
  mapStateToProps
)(JogoId);