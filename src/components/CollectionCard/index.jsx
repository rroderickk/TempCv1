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
  <img className="imageCard" alt="coleccionImageCard" src={image} />
  <div className="details">

    <div className="name">
      {name} <div className="id">{id}
      <p className="idinfo">{ typeof(idinfo)==="number" ? idinfo : idInfoENG }</p></div>
    </div>

    <div className="priceContainer">
      <UseAnchor anchor={urlPlatzi}>
        <img className="wethImage" alt="wethImage" src={weth} />
      </UseAnchor>
      <div className="price">{trades[0]?.value}</div>
    </div>

  </div>
</article>
</>; export default CollectionCard;