import React from "react";
import HeaderTsuite from "../HeaderTsuite";
import BannerHeader from "../BannerHeader";
import NaviLinks from "../NaviLinks";
import prueba from "../Banner/ar2.png";
import TitleRight from "../TitleRight";
import "./index.scss";


const TsuiteAbout =(props)=> {  window.scrollTo(0,0); 
const imgstyle = {
  width: `${!props.width? "100%":props.width}`,
  height: `${!props.height? "auto":props.width}`,
  // padding: `${!props.padding? "4rem 0rem":props.padding}`,
  // margin: `${!props.margin? "1rem 0rem":props.margin}`,
  left: `${!props.left? "0px":props.left}`,
  top: `${!props.top? "0px":props.top}`,
};

return (  <>
<HeaderTsuite/>

<main className="tsuite-about--container">
  <BannerHeader/>
  {props.children  ||
  <NaviLinks a="about" rutaA="/tsuite/about" b="Analizador de reservas" rutaB="/tsuite" c="" rutaC=""/>}

<div className="tsuite-aboutmain--container">
  {
    <div className="tsuite-aboutmain--imgcontainer"> 
      <img className="aboutmain--img" alt="img-about" 
        src={props.children2 || prueba} style={imgstyle}/>
    </div>
  }

  <div className="aboutmain-title--container">
    {props.title || 
    <TitleRight sup="01" title="Analizador" sub="de reservas"/>}
  </div>


  <p className="p1">{props.paragraph ?? <p>436 caracteres Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat 436</p>}</p>
  <p className="p2">{props.paragraph2 ?? <p>Lorem ipsum dpisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit.
  Lorem ipsum dolor sit amet<br/><br/> consectetur adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit.
  Lorem ipsum dolor sit r adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit.
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit.|</p>}</p>
</div>


</main>
</> ) }; export default TsuiteAbout;