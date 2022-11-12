import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import UserNaoVerificado from './UserNaoVerificado';
import UserPix from './UserPix';
import UserAberto from './UserAberto';
import Menu from './Menu';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../scss/regras.scss";

function UserRegras(props) {

  var auth = props.auth;

  if (auth === true) {
    if (props.verified === false) {
      return (
        <UserNaoVerificado />
      )
    } else if (props.done === true) {
      return (
        <div>
          <Menu />
          <div id="regras">
            <div className="content" style={{backgroundImage: `url('/user/background.png')`}}>
                <div className="regras">
                  <Container>
                    <Row>
                      <Col md={6}>

                        <h1 className="regras__title">CRITÉRIOS DE PONTUAÇÃO</h1>

                        <div className="regras__section">
                          <h2 className="regras__section__title">CAMPEÃO</h2>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">PONTOS DO CAMPEÃO - 2x</h3>
                            <p className="regras__section__criterio__exemplos">Todas as pontuações que envolvam o time que você escolheu como campeão serão dobradas.</p>
                            <p className="regras__section__criterio__exemplos">Isso vale para pontos de partida da fase de grupos, de time classificado para alguma fase do mata-mata, pontos de confronto acertado no mata-mata, pontos de placar acertado de jogo mata-mata.</p>
                          </div>

                        </div>

                        <div className="regras__section">
                          <h2 className="regras__section__title">PARTIDA (FASE DE GRUPOS)</h2>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Resultado e Placar – 25 pontos</h3>
                            <p className="regras__section__criterio__exemplos">Ex: Brasil 2 x 0 Sérvia – Palpite: Brasil 2 x 0 Sérvia – 25 pontos</p>
                          </div>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Resultado e placar de um dos times – 14 pontos</h3>
                            <p className="regras__section__criterio__exemplos">Ex: Brasil 2 x 0 Sérvia – Palpite : Brasil 2 x 1 Sérvia – 14 pontos</p>
                            <p className="regras__section__criterio__exemplos">Ex: Brasil 2 x 0 Sérvia – Palpite : Brasil 3 x 0 Sérvia – 14 pontos</p>
                          </div>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Resultado correto e placar errado – 10 pontos</h3>
                            <p className="regras__section__criterio__exemplos">Ex: Brasil 2 x 0 Sérvia – Palpite: Brasil 3 x 1 Sérvia – 10 pontos</p>
                          </div>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Empates – 25 pontos ou 10 pontos</h3>
                            <p className="regras__section__criterio__exemplos">Ex: Brasil 1 x 1 Sérvia – Palpite: Brasil 1 x 1 Sérvia – 25 pontos</p>
                            <p className="regras__section__criterio__exemplos">Ex: Brasil 1 x 1 Sérvia – Palpite: Brasil 3 x 3 Sérvia  - 10 pontos</p>
                          </div>

                        </div>

                        <div className="regras__section">
                          <h2 className="regras__section__title">OITAVAS DE FINAL</h2>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por time classificado - 25 pontos</h3>
                          </div>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por confronto acertado - 50 pontos</h3>
                          </div>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por placar acertado - 50 pontos</h3>
                            <p className="regras__section__criterio__exemplos">Para pontuar com o placar correto de um jogo das Oitavas para a frente é necessário ter acertado AMBOS os times daquele confronto. Caso tenha acertado apenas um time ou nenhum time do confronto, não é possível pontuar acertando o placar.</p>
                          </div>

                        </div>

                        <div className="regras__section">
                          <h2 className="regras__section__title">QUARTAS DE FINAL</h2>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por time classificado - 50 pontos</h3>
                          </div>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por confronto acertado - 100 pontos</h3>
                          </div>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por placar acertado - 100 pontos</h3>
                          </div>

                        </div>

                        <div className="regras__section">
                          <h2 className="regras__section__title">SEMIFINAIS</h2>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por time classificado - 100 pontos</h3>
                          </div>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por confronto acertado - 200 pontos</h3>
                          </div>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por placar acertado - 200 pontos</h3>
                          </div>

                        </div>

                        <div className="regras__section">
                          <h2 className="regras__section__title">TERCEIRO LUGAR</h2>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por time classificado - 100 pontos</h3>
                          </div>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por confronto acertado - 200 pontos</h3>
                          </div>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por placar acertado - 200 pontos</h3>
                          </div>

                        </div>

                        <div className="regras__section">
                          <h2 className="regras__section__title">FINAL</h2>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por time classificado - 200 pontos</h3>
                          </div>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por confronto acertado - 400 pontos</h3>
                          </div>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por placar acertado - 400 pontos</h3>
                          </div>

                        </div>

                        <div className="regras__section">
                          <h2 className="regras__section__title">CAMPEÃO</h2>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Pontos por acertar o campeão - 800 pontos</h3>
                          </div>

                        </div>

                        <div className="regras__section">
                          <h2 className="regras__section__title">PRÊMIOS</h2>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Bola de Ouro - 400 pontos</h3>
                          </div>
                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">Chuteira de Ouro - 400 pontos</h3>
                            <p className="regras__section__criterio__exemplos">Caso haja empate em algum dos prêmios, o participante ganhará os pontos caso acerte um dos jogadores premiados.</p>
                          </div>

                        </div>

                        <div className="regras__section">
                          <h2 className="regras__section__title">PREMIAÇÃO DO BOLÃO</h2>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">1° lugar - 50% do valor total</h3>
                          </div>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">2° lugar - 25% do valor total</h3>
                          </div>

                          <div className="regras__section__criterio">
                            <h3 className="regras__section__criterio__title">3° lugar - 15% do valor total</h3>
                            <p className="regras__section__criterio__example">Os 10% restantes do valor total irão para custos operacionais de organização do bolão.</p>
                          </div>


                        </div>

                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
            </div>
        </div>
      )
    } else if (props.pix === true) {
      return (
        <UserAberto />
      )
    }
    return (
      <UserPix />
    )

  } else {
    return (
      <Navigate to="/login" />
    )
  }
  


}

function mapStateToProps(state) {
  return {
    jwt: state.jwt,
    auth: state.auth,
    pix: state.pix,
    verified: state.verified,
    done: state.done
  }
}

export default connect(
  mapStateToProps
)(UserRegras);

