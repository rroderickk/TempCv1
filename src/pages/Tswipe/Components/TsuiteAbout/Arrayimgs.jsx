import React,{useState} from "react";

import "./arrayimgs.scss";


const Arrayimgs =(props)=> { 
  
return ( <>
<div 
  className={
    `background-config background-img--${props.index}`}
>
  {props.index}
</div>

</> ) }; export {Arrayimgs};