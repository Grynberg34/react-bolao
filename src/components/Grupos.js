import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { GetGroupStandings } from '../actions';

let Grupos= props => {

  var groupStandings = props.groupStandings;

  if (groupStandings == null) {
    store.dispatch(GetGroupStandings(props.jwt))

    return (
      <div></div>
    )
  } else {
    return (
      <div>
        { groupStandings.map( (group) =>
          <div key={group.letra}>
            <h1>Grupo {group.letra}</h1>
            {
              group.classificacao.map( (seleção, index) =>
              <div key={seleção.nome}>
                <p>{index+1}.  {seleção.nome} P: {seleção.pontos}, S: {seleção.saldo}, GP: {seleção.golsPro}, GC: {seleção.golsContra}</p>
              </div>) 
            }
            
          </div>
          )
        }
  
      </div>
    )

  }


}
  
function mapStateToProps(state) {
  return {
    jwt: state.jwt,
    groupStandings: state.groupStandings,
    form: state.form,
  }
}

export default connect(
  mapStateToProps
)(Grupos);