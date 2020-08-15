import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.entrar = this.entrar.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    if (firebase.getCurrent()) {
      return this.props.history.replace("/Perfil");
    }
  }

  entrar(e) {
    e.preventDefault();
    this.login();
  }

  login = async () => {
    const { email, password } = this.state;

    try {
      await firebase.login(email, password).catch((error) => {
        if (error.code === "auth/user-not-found") {
          alert("Este usuário não existe!");
        } else {
          alert(`Código de erro: ${error.code}`);
          return null;
        }
      });
      this.props.history.replace("/Perfil");
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <div className="main-login">
        <form onSubmit={this.entrar} id="Login">
          <input
            type="email..."
            autoComplete="off"
            autoFocus
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
            placeholder="email"
          />

          <input
            type="senha"
            autoComplete="off"
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
            placeholder="senha..."
          />
          <button type="submit">Entrar</button>
          <Link to="/SingUp">Ainda não possui conta?</Link>
        </form>
      </div>
    );
  }
}
