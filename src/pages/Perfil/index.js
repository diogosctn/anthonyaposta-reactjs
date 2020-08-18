import React, { Component } from "react";
import firebase from "../../firebase";
import { Link } from "react-router-dom";

export class Perfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: localStorage.nome || "",
    };

    this.logout = this.logout.bind(this);
  }

  async componentDidMount() {
    if (!firebase.getCurrent()) {
      this.props.history.replace("/Login");
      return null;
    }
  }

  logout = async () => {
    await firebase.logout().catch((error) => {
      console.log(error);
    });
    localStorage.removeItem("nome");
    this.props.history.push("/");
  };

  render() {
    return (
      <div id="dashboard">
        <p>Logado com: {firebase.getCurrent()}</p>
        <Link to="/Perfil/NewPost">
          <button>NovoPost</button>
        </Link>
        <button onClick={() => this.logout()}>Deslogar</button>
      </div>
    );
  }
}

export default Perfil;
