import React from "react";
import navbarlogo from "../../integratic_logo.png";
import "./index.scss";

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const Header =()=> { return ( <>
<header>
  <nav className="Navbar-Fixed">
  <img className="Navbar-logo" src={navbarlogo} alt="Navbar-logo"/>
  <div className="Navbar-container">
    <ul className="Navbar-ul">
      <li className="Navbar-li"><a href="#">Inicio</a></li>
      <li className="Navbar-li"><a href="#">Programacion</a></li> 
    </ul>
  </div>
  <div className="dropdown">
    <button className="hamburguesa" onClick={()=>myFunction()} className="dropbtn">
    </button>
    <div id="myDropdown" className="dropdown-content">
      <a href="#">Inicio</a>
      <a href="#">Programacion</a>
    </div>
  </div>
  </nav>
</header>
</> ) }; export default Header;