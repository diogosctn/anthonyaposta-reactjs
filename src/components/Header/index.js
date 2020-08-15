import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import hr from "../../assets/Images/hr.png";

class HeaderButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isActive: true });
  }
  render() {
    return (
      <Link to={this.props.path}>
        <button className={this.state.isActive ? "active" : null}>
          {this.props.name}
        </button>
      </Link>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header id="main-header">
        <div className="header-content">
          <Link to="/">
            <div>
              <h1>Lab|208</h1>
              <h2>Clusterizando conhecimento.</h2>
            </div>
          </Link>
          <Link to="/Login">Entrar</Link>
        </div>
        <div className="header-buttons">
          <HeaderButtons isActive={false} name="Home" path="/" />
          <HeaderButtons isActive={false} name="Sobre" path="/About" />
          <HeaderButtons isActive={false} name="Blog" path="/Blog" />
          <HeaderButtons isActive={false} name="Membros" path="/Members" />
        </div>
        <img src={hr} alt="header-line" />
      </header>
    );
  }
}

export default Header;
