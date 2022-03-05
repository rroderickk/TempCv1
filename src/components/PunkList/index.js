import React from "react"; 
import CollectionCard from "../CollectionCard";
import platzi from "@logos/platzi.svg";
import "./PunkList.css";

const PunkList =({ punkListData, setSelectedPunk })=> { return (
  <div className="punkList">
    {punkListData.map( punk=> (
      <div onClick={()=> setSelectedPunk(punk.token_id)} key={punk.token_id}>
        <CollectionCard
          key={punk.token_id}
          idinfo={punk.id}
          id={punk.token_id}
          name={punk.name}
          trades={punk.traits}
          image={punk.image_original_url}
          weth={platzi}
          urlGh={punk.urlGh}
          urlPlatzi={punk.urlPlatzi}
          idInfoENG={punk.idENG}
        />
      </div>
    ))}
  </div>
); }; export default PunkList;