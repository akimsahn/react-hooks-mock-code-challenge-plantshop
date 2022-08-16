import React, {useState} from "react";

function PlantCard({ plant }) {
  const { image, name, price } = plant
  const [inStock, setInStock] = useState(true)

  function handleClick() {
    setInStock(!inStock)
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
