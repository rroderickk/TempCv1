import React from "react";
import banner from "../../cabezote-programacion.png";
import card1 from "../../programacion-boton1.png";
import card2 from "../../programacion-boton2.png";
import card3 from "../../programacion-boton3.png";
import "./index.scss";

const SectionProgramacionFooter = () => { return ( <>

<div id="programacion">
  <div className="footer-container--banner">
    <img className="footer-banner" src={banner} alt="programacion-seccion"/>
  </div>
  <div className="footer-container--cards">
    <div className="footer-container--card1">
      <img className="card card1" src={card1} alt="card1"/>
    </div>
    <div className="footer-container--card2">
      <img className="card card2" src={card2} alt="card2"/>
    </div>
    <div className="footer-container--card3">
      <img className="card card3" src={card3} alt="card3"/>
    </div>
  </div>
</div>

</> ) }; export default SectionProgramacionFooter;