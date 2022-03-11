import React from "react";
import HeaderTsuite from "./Tswipe/Components/HeaderTsuite";
import TsuiteMain from "./Tswipe/Components/TsuiteMain";
import FancyButton from "./Tswipe/Components/FancyButton";
import "./resetStyles.scss";

const Tswipe =()=> { window.scrollTo(0,0); return ( <>

<HeaderTsuite/>
<TsuiteMain/>
<FancyButton text="fancy" to="" spa="14px" color="cyan" bg="" bor="cyan"/>
<FancyButton text="botonReutilizable" to="" spa="5px" color="orange" bg="" bor="orange"/>
<FancyButton text="botonReutilizable" to="" spa="5px" color="white" bg="" bor="salmon"/>

</> ) }; export default Tswipe;