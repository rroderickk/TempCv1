import React from "react";
import HeaderTsuite from "../HeaderTsuite";
import BannerHeader from "../BannerHeader";
import NaviLinks from "../NaviLinks";
import "./index.scss";
import prueba from "../Banner/ar2.png"

const TsuiteAbout =(props)=> { console.log(props); return (  <>
<HeaderTsuite/>

<div className="tsuite-about--container">
  <BannerHeader/>
  <NaviLinks a="about" rutaA="/tsuite/about" b="" rutaB="" c="" rutaC=""/>


<div className="tsuite-aboutmain--container">
  {props.title ?? <h2>Title-Ipsum</h2>}
  {/* {props.children ?? <img src={prueba} className="tsuite-img--about" alt="img-about" />} */}
  {props.paragraph ??  
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit.</p>}
</div>


</div>
</> ) }; export default TsuiteAbout;