import React, { Component } from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./NewPost.css";

class App extends Component {
  render() {
    return (
      <div className="main-newpost">
        <h2>Compartilhe seu mundo!!!</h2>
        <div id="html-editor">
          <CKEditor
            editor={ClassicEditor}
            data="O que você deseja contar?"
            onInit={(editor) => {
              // You can store the "editor" and use when it is needed.
              console.log("Editor is ready to use!", editor);
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
            }}
            onBlur={(event, editor) => {
              console.log("Blur.", editor);
            }}
            onFocus={(event, editor) => {
              console.log("Focus.", editor);
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
