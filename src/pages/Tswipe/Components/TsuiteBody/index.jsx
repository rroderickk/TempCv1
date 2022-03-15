import React from "react";
import {Banner} from "../Banner"
import {FancyButton} from "../FancyButton";
import "./index.scss";

/* imgs */
import res from "../Banner/ar2.png";
import dinamicos from "../Banner/precios.png";
import comparador from "../Banner/comparador.png";
import pronosticos from "../Banner/pronos.png";
import data from "../Banner/data.png";

// import TsuiteAbout from "@pages/Tswipe/Components/TsuiteAbout";
const TsuiteBody =({children})=> { return ( <>

<div className="tsuite-body--container">
  <div className="tsuite-banner--wrapper">
    <Banner num="01" text="Analizador" info="de reservas" img={res} textinfo="insert text info here">
      <FancyButton text="Ver analizador" spa="5px" color="black" bg="" bor="black" fancy="crimson" 
        link="/tsuite/about/analizador" 
      />
    </Banner>
    <Banner num="02" text="Estudio" info="de mercado">
      <FancyButton text="estudio" spa="19px" color="black" bg="" bor="orange"
        link="/tsuite/about/estudio" 
      />
    </Banner>
    <Banner num="03" text="Precios" info="dinamicos" img={dinamicos}>
      <FancyButton text="Ver precios" to="" spa="5px" color="black" bg="orange" bor="orange" fancy="black"
        link="/tsuite/about/preciosdinamicos"
      />
    </Banner>
    <Banner num="04" text="Comparador" info="de canales" img={comparador}>
      <FancyButton text="Ver comparador" to="" spa="2px" color="limegreen" bg="" bor="var(--customcrimson)" 
        link="/tsuite/about/comparadordecanales"
      />
    </Banner>
    <Banner num="05" text="Pronosticos" info="promociones" img={pronosticos}>
      <FancyButton text="pronosticos y promociones" to="" spa="1px" color="black" bg="" bor="lime" fancy="black"
        link="/tsuite/about/pronosticosypromociones"
      />
    </Banner>
    <Banner num="06" text="Datos" info="de contacto" img={data}>
      <FancyButton text="compon.temporal(redes)" to="" spa="1px" color="black" bg="" bor="lime" fancy="black"
        link="/tsuite/about/contacto"
      />
    </Banner>
  </div>
</div>
<FancyButton text="design system" spa="2px" color="white" bg="" bor="crimson" fancy="crimson"
  link="/tsuite/systems/fancycrimes"  c4="true"
/>
{children}
</> ) }; export { TsuiteBody};