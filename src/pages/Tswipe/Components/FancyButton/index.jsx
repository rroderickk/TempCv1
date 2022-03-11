import React from "react";
import "./index.scss";

const container ={ display: "flex", position: "relative", zIndex: "0", };

const FancyButton =(props)=> {

const button ={
  fontFamily: `${!props.font? "Roboto":props.font}`,
  fontSize:     `${!props.fsize? "11.2px":props.fsize}`,
  width:         `${!props.width? "200px":props.width}`,
  padding:        `${!props.padding? "1.2rem 2rem":props.padding}`,
  backgroundColor:`${!props.bg? "transparent":props.bg}`,
  letterSpacing:  `${!props.spa? "2.2px":props.spa}`,
  border:        `1px solid ${!props.bor? "white":props.bor}`,
  color:        `${!props.color? "white":props.color}`,
};

return (  <>
<div style={container} className="fancy-button--container">
  <span className="fancy-span"></span>
  <a style={button} 
  className=
  {
    `fancy-button--a ${props.c1 && "fancy-red"} || ${props.c2 && "fancy-salmon"}
    || ${props.c3 && "fancy-orange"} || ${props.c4 && "fancy-crims"}
  `} 
    href={props.to} rel="noreferrer noopener" target="_blank">{props.text}</a>
</div>
</> ) }; export default FancyButton;