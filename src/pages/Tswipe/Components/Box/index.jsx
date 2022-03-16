import React from "react";

const Box =(props)=> {

const boxstyle ={
  display: "block",
  position: !props.pos? "relative": props.pos,
  top: !props.top? null: props.top,
  left: !props.left? null: props.left,
  right: !props.right? null: props.right,
  bottom: !props.bottom? null: props.bottom,
  zIndex: !props.z? "0" : props.z,
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  overflow: "hidden",
  objectFit: "contain",
  wordWrap: "break-Word",
  flexWrap: "wrap",

  width:  !props.w? "auto" : `${props.w}rem`,
  height: !props.h? "auto" : `${props.h}rem`, 

  textAlign: !props.textAlign? "justify"     :props.textAlign,
  padding:   !props.p?         "1rem 1rem"  :props.p,

  color:   !props.color?    "orange"          : props.color,
  outline: !props.children? "1px solid orange": null,
};


return ( <>
  
 <div style={boxstyle}>{props.children ?? "hola soy la caja"}</div>

</> ) }; export { Box };
