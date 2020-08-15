import app from "firebase/app";
import "firebase/database";
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
    this.app = app.database();
    this.storage = app.storage();
  }
}

export default new Firebase();
