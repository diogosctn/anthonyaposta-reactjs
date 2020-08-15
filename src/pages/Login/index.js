import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <div className="main-login">
        <form>
          <input
            type="email..."
            autoComplete="off"
            autoFocus
            value={this.state.email}
            placeholder="email"
          />

          <input
            type="senha"
            autoComplete="off"
            value={this.state.password}
            placeholder="senha..."
          />
          <button type="submit">Entrar</button>
          <Link>Ainda não possui conta?</Link>
        </form>
      </div>
    );
  }
}
