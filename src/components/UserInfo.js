import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import { GetUserInfo } from '../actions';

let UserInfo= props => {

  var info = props.userInfo;

  if (info === null) {
    store.dispatch(GetUserInfo(props.jwt))
    return (
      <div></div>
    )
  } else {
    return (
      <div>
        <h1 className="todospalpites__nome">{info[0].nome}</h1>
        <div className="todospalpites__header" style={{backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0.7) 0%,rgba(255,255,255,0.7) 100%), url('${info[0].Seleção.img}')`}}>
          <h1 className="todospalpites__header__title">Campeão: {info[0].Seleção.nome}</h1>
          <h2 className="todospalpites__header__subtitle">Bola de Ouro: {info[1][0].ganhador}</h2>
          <h2 className="todospalpites__header__subtitle">Chuteira de Ouro: {info[1][1].ganhador}</h2>
        </div>
      </div>
    )
  }


  
}
  
function mapStateToProps(state) {
  return {
    userInfo: state.userInfo,
    jwt: state.jwt
  }
}

export default connect(
  mapStateToProps
)(UserInfo);