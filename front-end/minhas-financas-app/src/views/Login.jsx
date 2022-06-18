import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/FormGroup";
import axios from 'axios';

class Login extends React.Component {
  state = {
    email: "",
    senha: "",
  };

  entrar = () => {
    axios
    .post('http://localhost:8080/api/usuarios/autenticar',{
      email: this.props.email,
      senha: this.props.senha
    }).then(response=>{
      console.log("response = ",response)
    }).catch(erro =>{
      console.log("erro = ",erro)
    })
  };

  prepareCadastrar = () => {
    window.location.href = '/cadastro-usuarios'
  }

  render() {
    return (
      <div className="row">
        <div
          className="col-md-6"
          style={{ position: "relative", left: "300px" }}
        >
          <div className="bs-docs-section">
            <Card title="Login">
              <div className="row">
                <div className="col-lg-12">
                  <div className="bs-component">
                    <fieldset>
                      <FormGroup label="Email: *" htmlFor="exampleInputEmail1">
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          aria-describedby="emailHelp"
                          placeholder="Digite o Email ..."
                          value={this.state.email}
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                        />
                      </FormGroup>
                      <FormGroup
                        label="Senha: *"
                        htmlFor="exampleInputPassword1"
                      >
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          aria-describedby="passwordHelp"
                          placeholder="Digite a sua senha ..."
                          value={this.state.senha}
                          onChange={(e) =>
                            this.setState({ senha: e.target.value })
                          }
                        />
                      </FormGroup>
                      <button onClick={this.entrar} className="btn btn-success">
                        Entrar
                      </button>
                      <button onClick={this.prepareCadastrar} className="btn btn-danger">Cadastrar</button>
                    </fieldset>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
