import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import renderHTML from "react-render-html";
import firebase from "../../firebase";
import "./NewPost.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "O que você deseja contar?",
    };

    this.handleType = this.handleType.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleType(editor) {
    console.log(editor.getData());
    this.setState({ post: editor.getData() });
  }

  handleClick() {
    firebase.addPost(this.state.post);
  }

  render() {
    return (
      <div className="main-newpost">
        <h2>Compartilhe seu mundo!!!</h2>
        <div id="html-editor">
          <CKEditor
            editor={ClassicEditor}
            data={this.state.post}
            onInit={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(editor) => {
              this.handleType(editor);
            }}
          />
        </div>
        <div>{renderHTML(this.state.post)}</div>
        <div>
          <button onClick={() => this.handleClick()}>Publicar</button>
        </div>
      </div>
    );
  }
}

export default App;
