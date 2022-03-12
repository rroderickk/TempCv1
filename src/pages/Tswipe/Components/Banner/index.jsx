import React from "react";
import img1 from "./ar.png";
import "./index.scss";

const Banner =(props)=> { return ( <>

<div className="banner-container">
  <sup>{props.num}</sup>
  <h2>{props.text}</h2>
  <p>{props.info}</p>
  <img src={img1? img1: props.img}/>
  <div className="button-banner--container">
    {props.children}
  </div>
</div>

</> ) }; export default Banner;