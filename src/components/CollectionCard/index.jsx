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
  url,
}) => {

return (
<div className="collectionCard">
  <img className="imageCard" alt="coleccionImageCard"  src={image} />

  <div className="details">
    <div className="name">
      {name} <div className="id">#{id}       <p className="idinfo">{idinfo}</p></div>
    </div>
    <div className="priceContainer">
      <img className="wethImage"  alt="wethImage" src={weth} onClick={()=>{openTab(url)}} />
      <div className="price">{trades[0]?.value}</div>
    </div>
  </div>
</div>
);  }; export default CollectionCard;