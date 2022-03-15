import React from "react";
import {TitleRight} from "../TitleRight";
import {FancyButton} from "../FancyButton";
import {Banner} from "../Banner";
import { NaviLinks       } from "../NaviLinks";
import "./index.scss";


const FancyCrimes =()=> { return (<>
  <p className="p1">Introduccion a sistemas de diseño, fancycrimes es la version v0.0.1
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem dolore esse voluptatem obcaecati. Sequi labore nostrum ex consectetur rem sunt! Dolorum qui sapiente nam dolore ullam delectus laboriosam quo dignissimos.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati se Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sequi esse explicabo ut animi laborum totam veritatis sed labore. Sit delectus corrupti quo. Placeat dolorem consequuntur nam commodi quam. Rerum.
  </p>
</>) };

const FancyCrimes2 =()=> { return (<>
<p className="p2">introduccion a sistemas de diseño, fancycrimes es la version v0.0.1 lorem
  <div className="global-paddings-button1">Fancycrimes</div>
  <div className="global-paddings-button2">Fancycrimes</div>
  <div className="global-paddings-button3">Fancycrimes</div>
  <div className="global-paddings-buttoncomunnity1">Fancycrimes</div>
  <div className="global-paddings-buttoncomunnity2">Fancycrimes</div>
  <div className="global-paddings-buttoncomunnity3">Fancycrimes</div>
  <TitleRight  sup="reutilizable" title="title" sub="Crimes"/>
</p>
<div className="caja-design-sistems">
  <Banner num="02" text="banner" info="reutilizable">
    <FancyButton text="estudio reutilizable" spa="3px" color="black" bg="limegreen" bor="black"
      link="/tsuite/about/estudio" 
    />
  </Banner>
  <FancyButton text="estudio" spa="19px" color="black" bg="" bor="orange"
    link="/" 
  />
  <FancyButton text="fancy" spa="14px" color="cyan" bg="" bor="cyan" link="/" />
  <FancyButton text="botonReutilizable" spa="5px" color="orange" bg="" bor="orange" link="/"/>
  <FancyButton text="botonReutilizable" spa="5px" color="green"  bg="" bor="salmon" link="/"/>
  <NaviLinks a="navireuti" rutaA="/tsuite" b="lizable" rutaB="/tsuite" c="" rutaC=""/>
</div>

</>) };
export { FancyCrimes, FancyCrimes2};