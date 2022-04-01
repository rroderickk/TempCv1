import React from "react"; 
import "./CollectionCard.scss" //!styles(@)==>

const openTab =(link)=> window.open(link);

const CollectionCard = ({ 
  id, 
  idinfo,
  name,
  trades, 
  image,
  weth,
  urlPlatzi,
  idInfoENG, 
 }) => {

return ( <>
<article className="collectionCard">
  <img className="imageCard" alt="coleccionImageCard" src={image} />
  <div className="details">
    <div className="name">
      {name} <div className="id">#{id}  
      <p className="idinfo">{typeof(idinfo)==="number"?idinfo:idInfoENG}</p></div>
    </div>
    <div className="priceContainer">
      <img className="wethImage"  alt="wethImage" src={weth} onClick={()=>openTab(urlPlatzi)}/>
      <div className="price">{trades[0]?.value}</div>
    </div>
  </div>
</article>
</> );  }; export default CollectionCard;