import React from "react";
import { HeaderTsuite  } from "../HeaderTsuite";
import { BannerHeader  } from "../BannerHeader";
import { NaviLinks     } from "../NaviLinks";
import { TitleRight    } from "../TitleRight";
import "./index.scss";


const TsuiteAbout =(props)=> { console.log({props}); window.scrollTo(0,0); 
const imgstyle ={
  width: `${!props.width? "100%":props.width}`,
  height: `${!props.height? "80%":props.width}`,
  left: `${!props.left? "0px":props.left}`,
  top: `${!props.top? "0px":props.top}`,
  //// padding: `${!props.padding? "4rem 0rem":props.padding}`,
  //// margin: `${!props.margin? "1rem 0rem":props.margin}`,
};
return (  <>
<HeaderTsuite/>

<main className="tsuite-about--container">
  <BannerHeader/>
  {props.children || <NaviLinks a="about" rutaA="/tsuite/about" b="Analizador de reservas" rutaB="/tsuite" c="" rutaC=""/>}

<div className="tsuite-aboutmain--container">
 <div className="tsuite-aboutmain--imgcontainer"> 
  {props.imagen ?? 
    <div className={`background-config background-img--${props.img || "dos"}`} alt="img-about" style={imgstyle}></div>}
 </div>



<div className="aboutmain-title--container">
  {props.title  || <TitleRight sup="01" title="Analizador" sub="de reservas"/>}
</div>


{props.paragraph  ?? <p className="p1">436 caracteres Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat 436</p>}
{props.paragraph2 ?? <p className="p2">Lorem ipsum dpisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit
Lorem ipsum dolor sit amet<br/><br/> consectetur adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit.
Lorem ipsum dolor sit r adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam fugiat quas laudantium, consequatur ea quae dignissimos suscipit fugit aliquid, nesciunt expedita soluta nulla quaerat veritatis facilis ab blanditiis. Maiores, suscipit.|</p>}
</div>


</main>
</> ) }; export { TsuiteAbout};