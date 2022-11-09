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
          <div className="classificacao" key={group.letra}>
            <div className="classificacao__box">
              {
                group.classificacao.map( (seleção, index) =>
                <div className="classificacao__box__nome" key={seleção.nome}>
                  <p className="classificacao__box__text"> <span className="classificacao__box__index"> {index+1}°</span> <img className="classificacao__box__img" src={seleção.img} alt="" /> <span className="classificacao__box__laranja">P: {seleção.pontos}</span> | S: {seleção.saldo} | GP: {seleção.golsPro} | GC: {seleção.golsContra}</p>
                </div>) 
              }
            </div>
            
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