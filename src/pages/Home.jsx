
import React from 'react';
import Header from "@components/Header"; import CollectionCard from "../components/CollectionCard";
import { useState, useEffect } from "react"; import axios from "axios";
import PunkList from "@components/PunkList"; import Main from "@components/Main";
import Dataset from "../components/Dataset"

const Home = () => {
const [punkListData, setPunkListData] = useState([]);
const [selectedPunk, setSelectedPunk] = useState(0)

const [selectedU, setSelectedU] = useState("");

console.log(Dataset.assets[0].id ,"$$$$"); //!mejorar publicidad;

useEffect( () => { 
  const getMyNft = async() => {
    setPunkListData(Dataset.assets);
  }
  return getMyNft();
}, [selectedU] );

function u() {
    const getMyNft = async() => {
      const openseaData = await axios.get("https://testnets-api.opensea.io/assets?asset_contract_address=0xC36d211Da64a4cDD727f722196545Ec8799BeD9e&order_direction=asc");
      // console.log(openseaData.data)
      setPunkListData(openseaData.data.assets)
    }
    return getMyNft();
  // getMyNft()
};
// u();

document.body.style.zoom = "96%"; 

return (
<>
{<Header comprarNft={u}/>}
{punkListData.length > 0 && (
  <React.Fragment>
    <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
    <PunkList 
      punkListData={punkListData} 
      key={`${punkListData[1].token_id}`*Math.random()}
      setSelectedPunk={setSelectedPunk}
    />
  </React.Fragment>
)}
{/* {<CollectionCard 
  id={4} 
  name={'BandanaPunk'} 
  trades={[{'value': 2345234567}]} 
  // image="https://lh3.googleusercontent.com/soR6JAuB0k-X3Az9G8-NJG9Cfoc4kyfgPUCYVtp6Ker9QQSHg9UQA52eFduoL_v_E5dHnnaB3LtZjBIAZdH6p5e2rLOm7aVm6eVoMg=s0"
  image={Dataset.assets[0].image_original_url}
  weth="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
/>} */}
{/* {<CollectionCard 
{/* {<CollectionCard 
  id={4} 
  name={'BandanaPunk'} 
  trades={[{'value': 2345234567}]} 
  image="https://lh3.googleusercontent.com/VazF0zbsCFS_ktnPirNvlv9yHSyY7duD8fwZTJkBfHdqWxhl21SKjAoYF7zTIj581LiRmgIPwwZ1SKrqXnj8EJHrFmU4OyeUQLWwAQ=s0"
  weth="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
/>}
{<CollectionCard 
  id={4} 
  name={'BandanaPunk'} 
  trades={[{'value': 2345234567}]} 
  image="https://lh3.googleusercontent.com/Tbqd11GZciljB-0bHRygyL87b6GjJKdG22zCMfmdjOFQhfC2CSUQSttFQkY0VbrEg8Nbkrt6jBEMLX7UjILlYdUXN3pNXot8OHmA=s0"
  weth="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
/>}
{<CollectionCard 
  id={4} 
  name={'BandanaPunk'} 
  trades={[{'value': 2345234567}]} 
  image="https://lh3.googleusercontent.com/ym79ulTsYEEHnP1TDBhjPUBbjRUGjhEn73SYV7LwlGxerFtgEQ7TcAzo89-wbbE1FMnFi1MIZZIPADjEou4kvtPmUdicipj5rt1r=s0"
  weth="https://storage.opensea.io/files/6f8e2979d428180222796ff4a33ab929.svg"
/>}
<h1 style={{color: 'cyan'}}>navBar</h1>
<h1 style={{color: 'cyan'}}>imagen</h1>
<h1>personName</h1>
<h1>personInfo</h1>
<h1>personPortfolio</h1>
<h1>personSkills</h1> */}
</>
); }; export default Home;