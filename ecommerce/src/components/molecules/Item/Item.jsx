import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <>
      <div className="item-list-card">
        <img src={product.img} alt="Product Image" />
        <div className="card-content">
          <Link to={`/item/${product.id}`}>Ver detalle</Link>
          <div className="card-title">{product.name}</div>
          <div className="card-price">${product.price}</div>
          <div className="card-description">{product.description}</div>
          <div className="quantity-container">
            <span className="quantity-label">Cantidad:</span>
            <input type="number" className="quantity-input" value="1" min="1" />
          </div>
          <a href="#" className="add-to-cart-btn">
            Agregar al carrito
          </a>
        </div>
      </div>
    </>
  );
}

export default Item