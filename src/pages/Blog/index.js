import React, { Component } from "react";
import "./Blog.css";
//posts test
import posts from "./posts.json";

class Blog extends Component {
  state = {
    posts: [],
  };
  render() {
    return (
      <div className="main-blog">
        {posts.posts.map((element) => (
          <article>
            <header>
              <h1>{element.titulo}</h1>
              <h2>{element.autor}</h2>
            </header>
            <div>{element.conteudo}</div>
          </article>
        ))}
      </div>
    );
  }
}

export default Blog;
