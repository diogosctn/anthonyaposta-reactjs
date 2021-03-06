import app from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

let firebaseConfig = {
  apiKey: "***",
  authDomain: "***",
  databaseURL: "***",
  projectId: "***",
  storageBucket: "***",
  messagingSenderId: "***",
  appId: "***",
  measurementId: "***",
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.app = app.firestore();
    this.storage = app.storage();
  }

  login(email, password) {
    return app.auth().signInWithEmailAndPassword(email, password);
  }

  logout() {
    return app.auth().signOut();
  }

  async singUp(nome, email, password) {
    await app.auth().createUserWithEmailAndPassword(email, password);

    const uid = app.auth().currentUser.uid;
    return app.firestore().collection("usuarios").doc(uid).set({ nome });
  }

  addPost(post) {
    console.log(post);
    app.firestore().collection("posts").add({
      autor: app.auth().currentUser.uid,
      body: post,
    });
  }

  getCurrent() {
    return app.auth().currentUser && app.auth().currentUser.email;
  }

  getCurrentUid() {
    return app.auth().currentUser && app.auth().currentUser.uid;
  }

  isInitialized() {
    return new Promise((resolve) => {
      app.auth().onAuthStateChanged(resolve);
    });
  }
}

export default new Firebase();
