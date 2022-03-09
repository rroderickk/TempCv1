import React from "react";
import navbarlogo from "../../Assets/tsuite.png";
import "./index.scss";

const HeaderTsuite =()=> { return ( <>
<header>
<nav className="header-tsuite--nav">
  <img className="Navbar-logo" src={navbarlogo} alt="Navbar-logo"/>
<div className="Navbar-container">
  <ul className="Navbar-ul">
    <li className="Navbar-li"><a href="#inicio">ACELERADOR DE RESERVAS</a></li>
    <li className="Navbar-li"><a href="#inicio">INTELIGENCIA ARTIFICIAL</a></li>
    <li className="Navbar-li"><a href="#programacion">PRODUCTO</a></li> 
    <li className="Navbar-li"><a href="#programacion">PRECIOS</a></li> 
    <li className="Navbar-li"><a href="#programacion">NOSOTROS</a></li> 
    <li className="Navbar-li"><a href="#programacion">BLOG</a></li> 
  </ul>
</div>
  <div className="dropdown">
    <button onClick={()=>myFunction()} className="dropbtn hamburguesa">
    </button>
    <div id="myDropdown" className="dropdown-content">
      <a href="#inicio">Inicio</a>
      <a href="#programacion">Programacion</a>
    </div>
  </div>
</nav>
</header>

</> ) }; export default HeaderTsuite;