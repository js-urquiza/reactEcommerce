import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, name, price, category, stock, description, img}) => {
  return (
    <div className="item-detail">
      <h2 id="productName">{name}</h2>
      <p className="category" id="productCategory">{category}</p>
      <p id="productDescription">{description}</p>
      <p className="price" id="productPrice">{price}</p>
    </div>
  );
}

export default ItemDetail