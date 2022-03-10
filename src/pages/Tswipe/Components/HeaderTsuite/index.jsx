import React from "react";
import navbarlogo from "../../Assets/tsuite.svg";
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
  <img className="header-tsuite--logo" src={navbarlogo} alt="Navbar-logo"/>
<div className="header-tsuite--container">
  <ul className="tsuite--ul">
    <li className="tsuite--li"><a href="#accelerador">ACELERADOR DE RESERVAS</a></li>
    <li className="tsuite--li"><a href="#artificial">INTELIGENCIA ARTIFICIAL</a></li>
    <li className="tsuite--li"><a href="#producto">PRODUCTO</a></li> 
    <li className="tsuite--li"><a href="#precios">PRECIOS</a></li> 
    <li className="tsuite--li"><a href="#nosotros">NOSOTROS</a></li> 
    <li className="tsuite--li"><a href="#blog">BLOG</a></li> 
  </ul>
</div>
  <div className="--dropdown">
    <button onClick={()=>myFunction()} className="--dropbtn btnmenu"> </button>
      <div id="myDropdown" className="--dropdown-content">
      <a href="#accelerador">ACELERADOR DE RESERVAS</a>
      <a href="#artificial">INTELIGENCIA ARTIFICIAL</a>
      <a href="#producto">PRODUCTO</a> 
      <a href="#precios">PRECIOS</a> 
      <a href="#nosotros">NOSOTROS</a> 
      <a href="#blog">BLOG</a> 
    </div>
  </div>
</nav>
</header>

</> ) }; export default HeaderTsuite;