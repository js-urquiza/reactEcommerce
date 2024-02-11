import React, { useContext, useEffect, useState } from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
import { CartContext } from "../../../context/CartContext";

const Item = ({product}) => {
  
  const { addToCart } = useContext(CartContext);
  
  const [ quantity, setQuantity ] = useState(1);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value);
  }

  const handleAddToCart = () => {
    const newItem = { ...product, quantity };
    addToCart(newItem);
  };
  
  return (
    <>
      <div className="item-list-card">
        <div className='image'>
          <img src={product.img} alt="Product Image" />
        </div>
        <div className="card-content">
          <Link to={`/item/${product.id}`}>Ver detalle</Link>
          <div className="card-title">{product.name}</div>
          <div className="card-price">${product.price}</div>
          <div className="card-description">{product.description}</div>
          <div className="quantity-container">
            <span className="quantity-label">Cantidad:</span>
            <input type="number" className="quantity-input" onChange={handleInputChange} min="1" value={quantity} />
          </div>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
}

export default Item