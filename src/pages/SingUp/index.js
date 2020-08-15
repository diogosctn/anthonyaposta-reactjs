import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import firebase from "../../firebase";
import "./SingUp.css";

class SingUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      password: "",
    };

    this.singUp = this.singUp.bind(this);
    this.onSingUp = this.onSingUp.bind(this);
  }

  singUp(e) {
    e.preventDefault();
    this.onSingUp();
  }

  onSingUp = async () => {
    try {
      const { nome, email, password } = this.state;

      await firebase.singUp(nome, email, password);
      this.props.history.replace("/Perfil");
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <div className="main-singup">
        <h1>Novo Usuário</h1>
        <form onSubmit={this.singUp} id="register">
          <label>Nome:</label>
          <input
            type="text"
            value={this.state.nome}
            onChange={(e) => {
              this.setState({ nome: e.target.value });
            }}
            autoFocus
            autoComplete="off"
          />

          <label>Email:</label>
          <input
            type="text"
            value={this.state.email}
            onChange={(e) => {
              this.setState({ email: e.target.value });
            }}
            autoComplete="off"
          />

          <label>Senha:</label>
          <input
            type="text"
            value={this.state.senha}
            onChange={(e) => {
              this.setState({ password: e.target.value });
            }}
            autoComplete="off"
          />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default withRouter(SingUp);
