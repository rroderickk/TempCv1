import React from "react";
import Awesome from "../Awesome";
import "./index.scss";
const handleScroll =(param)=>()=> window.scrollTo(0, param);

function newwindow(){  
  var myChild= window.open('https://turbosuite.es/index.php','','width=1024,height=768,resizable=no');  
  myChild.blur();
};

const TsuiteMain =()=> { return ( <>
<Awesome/>
<main>
<div className="tsuite-main--container textRelativo">
  <div className="tsuite-carrousel--container ">
    <div className="tsuite--carrousel">
      <h1 className="h1 textRelativo">Con nuestros algoritmos de inteligencia artificial maximizas el rendimiento de tus reservas en viviendas vacacionales, apartamentos turisticos y establecimientos hoteleros.</h1>
      <div className="learnmore--container">
        <a onClick={()=>newwindow()} className="b--learnmore">APRENDE MAS +</a>
      </div>
    </div>
  </div>
<div className="i--container" onClick={handleScroll(1000)} rel="noreferrer noopener"><i className="i--flechita">►</i></div>
</div>
</main>
</> ) }; export default TsuiteMain;