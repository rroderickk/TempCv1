import "./CollectionCard.scss" //!styles(@)==>

const CollectionCard = ({ 
  id, 
  name,
  trades, 
  image,
  weth,
}) => {

return (
<div className="collectionCard">
  <img className="imageCard" alt="coleccionImageCard"  src={image} />

  <div className="details">
    <div className="name">
      {name} <div className="id">.#{id}</div>
    </div>
    <div className="priceContainer">
      <img className="wethImage"  alt="wethImage" src={weth} />
      <div className="price">{trades[0]?.value}</div>
    </div>
  </div>
</div>
);  }; export default CollectionCard;