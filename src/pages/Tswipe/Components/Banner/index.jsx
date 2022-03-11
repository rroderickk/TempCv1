import React from "react";
import img1 from "./ar.png";
import "./index.scss";

const Banner =(props)=> { return ( <>

<div className="banner-container">
  <sup>{props.num}</sup>
  <h2>{props.text}</h2>
  <p>{props.info}</p>
  <img src={img1}/>
</div>

</> ) }; export default Banner;