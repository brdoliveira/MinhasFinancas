import React from "react";

import Card from "../components/Card";
import FormGroup from "../components/FormGroup";

class CadastroUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
    senha: "",
    senhaRepeticao: "",
  };

  cadastrar = () => {
    console.log(this.state);
  };

  cancelar = () => {
    window.location.href = '/login'
  }

  render() {
    return (
      <Card title="Cadastro de Usuario">
        <div className="row">
          <div className="col-lg-12">
            <div className="bs-docs-section">
              <FormGroup label="Nome: *" htmlFor="inputNome">
                <input
                  className="form-control"
                  type="name"
                  id="inputNome"
                  name="nome"
                  onChange={(e) => this.setState({ nome: e.target.value })}
                />
              </FormGroup>
              <FormGroup label="Email: *" htmlFor="inputEmail">
                <input
                  className="form-control"
                  type="email"
                  id="inputEmail"
                  name="email"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </FormGroup>
              <FormGroup label="Senha: *" htmlFor="inputSenha">
                <input
                  className="form-control"
                  type="password"
                  id="inputSenha"
                  name="senha"
                  onChange={(e) => this.setState({ senha: e.target.value })}
                />
              </FormGroup>
              <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                <input
                  className="form-control"
                  type="password"
                  id="inputRepitaSenha"
                  name="senha"
                  onChange={(e) =>
                    this.setState({ senhaRepeticao: e.target.value })
                  }
                />
              </FormGroup>
              <button
                onClick={this.cadastrar}
                type="button"
                className="btn btn-success"
              >
                Salvar
              </button>
              <button type="button" className="btn btn-danger" onClick={this.cancelar}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default CadastroUsuario;
