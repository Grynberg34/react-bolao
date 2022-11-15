import React from 'react';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';
import "../scss/todospalpites.scss";
import UserInfo from './UserInfo';
import UserPontuações from './UserPontuações';

let TodosPalpites= props => {

    return (
      <div id="todospalpites">
        <div className="content" style={{backgroundImage: `url('/user/background.png')`}}>
            <div className="todospalpites">
              <Container>

                <UserInfo />

                <UserPontuações /> 

              </Container>
            </div>

        </div>
      </div>
    )
  
}
  
function mapStateToProps(state) {
  return {
    jwt: state.jwt
  }
}

export default connect(
  mapStateToProps
)(TodosPalpites);