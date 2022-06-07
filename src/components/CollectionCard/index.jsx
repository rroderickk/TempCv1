import React         from "react"; 
import { UseAnchor } from "@utils/useLinks";
import "./CollectionCard.scss" //!styles(@)==>

const CollectionCard =({

  id,idinfo,
          name,
      trades,
  image,
    weth,
    urlPlatzi,
      idInfoENG,

 })=> <>

<article className="collectionCard">
  <img className="imageCard" alt="coleccionImageCard" src={image}/>
  <div className="details">

    <div className="name">
      {name} <div className="id">{id}
      <p className="idinfo">{ typeof(idinfo)==="number" ? idinfo : idInfoENG }</p></div>
    </div>

    <UseAnchor anchor={urlPlatzi}>
      <div className="priceContainer">
        <img className="wethImage" alt="wethImage" src={weth}/>
        <div className="price">{trades[0]?.value}</div>
      </div>
    </UseAnchor>

  </div>
</article>
</>; export default CollectionCard;