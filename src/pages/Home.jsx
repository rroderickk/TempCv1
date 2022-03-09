import React from "react";
import Header from "@components/Header"; import CollectionCard from "../components/CollectionCard";
import { useState, useEffect } from "react"; import axios from "axios";
import PunkList from "@components/PunkList"; import Main from "@components/Main";
import Dataset from "../components/Dataset";
import Projects from "../components/Projects";

const Home =()=> {
const [punkListData, setPunkListData] = useState([]);
const [selectedPunk, setSelectedPunk] = useState(0);
const [selectedU, setSelectedU] = useState("");

// console.log(Dataset.assets[0].id ,"$$$$"); //todo mejorar publicidad;

useEffect( ()=> { 
  const getMyNft = async()=> {
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
};

return ( <>
<Header comprarNft={u}/>

{
  punkListData.length>0 && (<>
    <Main punkListData={punkListData}     selectedPunk={selectedPunk}       />
    <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
  </>)
}

<Projects/>

</> ) }; export default Home;