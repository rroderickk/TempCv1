import React from "react"; 
import CollectionCard from "../CollectionCard";
import platzi from "@logos/platzi.svg";
import "./PunkList.css";

const PunkList =({ punkListData, setSelectedPunk })=>
  <main className="punkList">
    { punkListData.map(punk=> (
      <section onClick={()=> setSelectedPunk(punk.token_id)} key={punk.token_id}>

        <CollectionCard
          idinfo={punk.id}
          id={punk.token_id}
          name={punk.name}
          trades={punk.traits}
          image={punk.image_original_url}
          weth={platzi}
          urlGh={punk.urlGh}
          urlPlatzi={punk.urlPlatzi}
          idInfoENG={punk.idENG}/>

      </section>
    ))}
  </main>
export default PunkList;