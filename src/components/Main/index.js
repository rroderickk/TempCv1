
import React from "react"; 
import "./Main.scss"; import yo from "@logos/ilops.jpg"; import linkedin from "@icons/linked.svg";
import github from "@icons/github.svg"; import twitter from "@icons/twitter.svg";
import instagram from "@icons/instagram.svg"; import { useState, useEffect } from "react";

const openTab =(link)=> window.open(link);

const Main = ({ selectedPunk, punkListData }) => { 
const [activePunk, setActivePunk] = useState(punkListData[0]);

useEffect( () => { setActivePunk(punkListData[selectedPunk]) }, [punkListData, selectedPunk]);
return (
<div className="main">
  <div className="mainContent">
    <div className="punkHighlight">
      <div className="punkContainer">
        <img className="selectedPunk"
          alt="selectedPunk"
          // src="https://lh3.googleusercontent.com/soR6JAuB0k-X3Az9G8-NJG9Cfoc4kyfgPUCYVtp6Ker9QQSHg9UQA52eFduoL_v_E5dHnnaB3LtZjBIAZdH6p5e2rLOm7aVm6eVoMg=s0"
          src={activePunk.image_original_url}
          onClick={()=>openTab(activePunk.urlGh)}
        />
      </div>
    </div>

    <div className="punkDetail" style={{color: "#fff"}}>
      <div className="title"> {activePunk.name} </div>
      <span className="itemNumber">#{activePunk.token_id}</span>
    </div>

    <div className="owner">
      <div className="ownerImageContainer">
        <img src={yo} alt="ownerImageContainer" className="yo"/>
      </div>
      <div className="ownerDetail">
        <div className="ownerNameAndHandle">
          <div className="ownerAdress">RodrigoMoreno socialMedia </div>
          <div className="ownerHandle">@cheatmodes4</div>
        </div>
        <div className="ownerSocialContain">
          <div className="ownerLink"> 
            <img onClick={()=>openTab("https://github.com/rroderickk")} src={github} alt="socialMedia"/> </div>
          <div className="ownerLink"> 
            <img onClick={()=>openTab("https://www.linkedin.com/in/rodrigo-moreno-rr")} src={linkedin} alt="socialMedia"/> </div>
          <div className="ownerLink"> 
            <img onClick={()=>openTab("https://twitter.com/cheatmodes4")} src={twitter} alt="socialMedia"/> </div>
          <div className="ownerLink"> 
            <img onClick={()=>openTab("https://www.instagram.com/rodrigomorenop/")} src={instagram} alt="socialMedia"/> </div>
        </div>
      </div>
    </div>
    
  </div>
</div>
); }; export default Main;