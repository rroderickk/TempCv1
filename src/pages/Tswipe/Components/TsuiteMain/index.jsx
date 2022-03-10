import React from "react";
import AwesomeSlider from "../AwesomeSlider";
import "./index.scss";

const TsuiteMain =()=> { return ( <>
<main>

<div className="tsuite-main--container textRelativo">
  <div className="tsuite-carrousel--container ">
    <div className="tsuite--carrousel">
      <h1 className="h1 textRelativo">Con nuestros algoritmos de inteligencia artificial maximizas el rendimiento de tus reservas en viviendas vacacionales, apartamentos turisticos y establecimientos hoteleros.</h1>
      <div className="learnmore--container">
        <a href="https://turbosuite.es/index.php" className="b--learnmore" target="_blank"  rel="noopener noreferrer">APRENDE MAS +</a>
      </div>
    </div>
  </div>
</div>
<AwesomeSlider/>

</main>
</> ) }; export default TsuiteMain;