import React, { Component } from "react";
import { Link } from "react-router-dom";

class HeaderButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };
    this.hadleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      isActive: true,
    });
    console.log("Mudar cor do " + this.props.name);
  }

  componentWillUnmount() {
    this.setState({
      isActive: false,
    });
  }

  render() {
    if (window.location.pathname !== this.props.path) {
      console.log(
        `Desmontar ${this.props.name}`,
        window.location.pathname,
        this.props.path
      );
    }
    return (
      <Link to={this.props.path}>
        <button onClick={() => this.handleClick()}>{this.props.name}</button>
      </Link>
    );
  }
}

export default HeaderButton;
