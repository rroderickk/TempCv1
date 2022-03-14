import React from "react";
import "./index.scss";

const TitleRight =(props)=> { return ( <>

<div className="titleright-container">
  <h2>{props.sup}</h2>
  <h1> {props.title}</h1>
  <h3> {props.sub}</h3>
</div>

</> ) }; export { TitleRight};