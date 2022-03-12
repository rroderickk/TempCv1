import React from "react";
import Banner from "../Banner"
import FancyButton from "../FancyButton";
import "./index.scss";

const TsuiteBody =()=> { return ( <>

<div className="tsuite-body--container">
  <div className="tsuite-banner--wrapper">
    <Banner num="01" text="Analizador" info="de reservas">
      <FancyButton text="Ver precios" to="" spa="5px" color="black" bg="" bor="black"/>
    </Banner>
    <Banner num="01" text="Analizador" info="de reservas">
      <FancyButton text="Ver algoritmos" to="" spa="5px" color="black" bg="" bor="orange"/>
    </Banner>
    <Banner num="01" text="Analizador" info="de reservas">
      <FancyButton text="Ver algoritmos" to="" spa="5px" color="black" bg="" bor="orange"/>
    </Banner>
    <Banner num="01" text="Analizador" info="de reservas">
      <FancyButton text="Ver algoritmos" to="" spa="5px" color="black" bg="" bor="orange"/>
    </Banner>
  </div>
</div>

</> ) }; export default TsuiteBody;