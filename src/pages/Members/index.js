import React, { Component } from "react";
import "./Members.css";
//posts test
import posts from "./members.json";

class Members extends Component {
  state = {
    posts: [],
  };
  render() {
    return (
      <div className="main-members">
        {posts.posts.map((element) => (
          <article>
            <header>
              <h1>{element.membro}</h1>
              <h2>{element.ocupacao}</h2>
            </header>
            <div>{element.conteudo}</div>
          </article>
        ))}
      </div>
    );
  }
}

export default Members;
