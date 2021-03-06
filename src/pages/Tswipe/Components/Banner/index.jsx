import React from "react";
import img1 from "./ar.png";
import "./index.scss";

const Banner =(props)=> { return ( <>

<div className="banner-container">
  <sup>{props.num }</sup>
  <h2> {props.text}</h2>
  <p>  {props.info}</p>

  <img 
    src={ props.img? props.img : (props.img===null? null:img1) }
  />

  <div className="button-banner--container">
        {props.children}
    {/* <h5>{props.textinfo}</h5> */}
  </div>
</div>
{/* <p> </p> */} {/*fancy separation*/ }

</> ) }; export { Banner};