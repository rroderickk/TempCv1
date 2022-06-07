import React from "react";
import Header from "./Udea.src/Components/Header";
import Layout from "@containers/Layout";
import SectionInicio from "./Udea.src/Components/SectionInicio";
import SectionProgramacion from "./Udea.src/Components/SectionProgramacion";
import SectionProgramacionFooter from "./Udea.src/Components/SectionProgramacionFooter";

/* Temporales */
import prueba from "./Udea.src/prueba.png";
import ejemplo from "./Udea.src/celular.png";
import ejemplo2 from "./Udea.src/escritorio.png";
import background from "./Udea.src/fondo.png";
const style={
  backgroundImage: `url(${background})`,
  height: "100vp",
  width: "100%",
  minWidth: "280px",
  backgroundAttachment: "fixed",
  position: "absolute",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
}

const Udea =()=> { window.scrollTo(0,0); return ( <>

<div style={style}>
  <Header/>

    <SectionInicio/>
    <SectionProgramacion/> 
    <SectionProgramacionFooter/> 

{/* <div>
  <img style={{maxWidth: "375px"}} src={prueba} alt="prueba" />
</div>

<div style={{marginTop: "980px"}}>
  <img style={{maxWidth: "875px"}} src={ejemplo} alt="prueba" />
</div>
<div style={{marginTop: "980px"}}>
  <img style={{maxWidth: "775px"}} src={ejemplo2} alt="prueba" />
</div> */}




</div>
</> ) }; export { Udea};