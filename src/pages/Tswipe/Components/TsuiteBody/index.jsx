import React from "react";
import Banner from "../Banner"
import FancyButton from "../FancyButton";
import "./index.scss";

/* imgs */
import res from "../Banner/ar2.png";
import dinamicos from "../Banner/precios.png";
import comparador from "../Banner/comparador.png";
import pronosticos from "../Banner/pronos.png";
import data from "../Banner/data.png";

const TsuiteBody =({children})=> { return ( <>

<div className="tsuite-body--container">
  <div className="tsuite-banner--wrapper">
    <Banner num="01" text="Analizador" info="de reservas" img={res} textinfo="insert text info here">
      <FancyButton text="Ver analizador" to="" spa="5px" color="black" bg="" bor="black" fancy="crimson" />
    </Banner>
    <Banner num="02" text="Estudio" info="de mercado">
      <FancyButton text="estudio" to="" spa="19px" color="black" bg="" bor="orange"/>
    </Banner>
    <Banner num="03" text="Precios" info="dinamicos" img={dinamicos}>
      <FancyButton text="Ver precios" to="" spa="5px" color="black" bg="orange" bor="orange" fancy="black"/>
    </Banner>
    <Banner num="04" text="Comparador" info="de canales" img={comparador}>
      <FancyButton text="Ver comparador" to="" spa="2px" color="limegreen" bg="" bor="var(--customcrimson)" />
    </Banner>
    <Banner num="05" text="Pronosticos" info="promociones" img={pronosticos}>
      <FancyButton text="pronosticos y promociones" to="" spa="1px" color="black" bg="" bor="lime" fancy="black"/>
    </Banner>
    <Banner num="06" text="Datos" info="de contacto" img={data}>
      <FancyButton text="compon.temporal(redes)" to="" spa="1px" color="black" bg="" bor="lime" fancy="black"/>
    </Banner>
  </div>
</div>
{children}
</> ) }; export default TsuiteBody;