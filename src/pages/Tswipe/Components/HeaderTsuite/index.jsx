import React from "react";
import {Link} from "react-router-dom";
import "./index.scss";

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.--dropbtn')) {
    var dropdowns = document.getElementsByClassName("--dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const HeaderTsuite =()=> { return ( <>
<header>
<nav className="header-tsuite--nav">
  <div className="header-tsuite--logo" alt="Navbar-logo"><Link to="/tsuite" className="header-tsuite--span"></Link></div>
<div className="header-tsuite--container">
  <ul className="tsuite--ul">
    <li className="tsuite--li"><Link to="/tsuite/about/analizador">ACELERADOR DE RESERVAS</Link></li>
    <li className="tsuite--li"><Link to="/tsuite/about/estudio">INTELIGENCIA ARTIFICIAL</Link></li>
    <li className="tsuite--li"><Link to="/tsuite/about/pronosticosypromociones">PRODUCTO</Link></li> 
    <li className="tsuite--li"><Link to="/tsuite/about/preciosdinamicos">PRECIOS</Link></li> 
    <li className="tsuite--li"><Link to="/tsuite/about/contacto">NOSOTROS</Link></li> 
    <li className="tsuite--li"><Link to="/tsuite/about/comparadordecanales">BLOG</Link></li> 
  </ul>
</div>
  <div className="--dropdown">
    <button onClick={()=>myFunction()} className="--dropbtn btnmenu"> </button>
      <div id="myDropdown" className="--dropdown-content">
      <Link to="/tsuite/about/analizador">ACELERADOR DE RESERVAS</Link>
      <Link to="/tsuite/about/contacto">INTELIGENCIA ARTIFICIAL</Link>
      <Link to="/tsuite/about/pronosticosypromociones">PRODUCTO</Link> 
      <Link to="/tsuite/about/preciosdinamicos">PRECIOS</Link> 
      <Link to="/tsuite/about/contacto">NOSOTROS</Link> 
      <Link to="/tsuite/about/contacto">BLOG</Link> 
    </div>
  </div>
</nav>
</header>

<div>alkdhf</div>
</> ) }; export { HeaderTsuite};