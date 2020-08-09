import React from "react";
import home from "../../assets/Images/home.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="main-home">
      <img src={home} alt="home" />
      <h2>Editores do Lab|208 em um típico dia de trabalho</h2>;
    </div>
  );
}

export default Home;
