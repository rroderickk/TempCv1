import React from "react";
import {Link} from "react-router-dom";
import "./index.scss";

const NaviLinks =(props)=> { return ( <>

<div className="navilinks-container">
<Link to="/tsuite">HOME               <span>»</span> </Link>

{props.a=="" ? null : <Link to={''+props.rutaA+''}>{props.a} <span>»</span> </Link>}
{props.b=="" ? null : <Link to={''+props.rutaB+''}>{props.b} <span>»</span> </Link>}
{props.c=="" ? null : <Link to={''+props.rutaC+''}>{props.c} <span>»</span> </Link>}
</div>

</>  ) }; export default NaviLinks;