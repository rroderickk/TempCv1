
import React from "react"; 
import CollectionCard from "../CollectionCard";
import "./PunkList.css";
import platzi from "@logos/platzi.svg";

const PunkList = ({ punkListData, setSelectedPunk }) => {

return (
  <div className="punkList">
    {punkListData.map( punk => (
      <div onClick={() => setSelectedPunk(punk.token_id)}>
        <CollectionCard
          keys={`${punk.token_id}`*Math.random()}
          idinfo={punk.id}
          id={punk.token_id}
          name={punk.name}
          trades={punk.traits}
          image={punk.image_original_url}
          weth={platzi}
          urlGh={punk.urlGh}
          urlPlatzi={punk.urlPlatzi}
        />
      </div>
    ))}
  </div>
); }; export default PunkList;