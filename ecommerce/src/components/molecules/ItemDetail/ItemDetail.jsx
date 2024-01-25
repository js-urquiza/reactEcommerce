import React, { useState, useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import './ItemDetail.css'

const ItemDetail = ({product}) => {
  
  const [quantity, setQuantity] = useState(1);

  const { cart, addToCart } = useContext(CartContext);

  console.log(cart);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  const hanleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  }

  const handleAddToCart = () => {
    const newItem = {...product, quantity};
    addToCart(newItem);
  }
  
  return (
    <>
      {
        product &&
          <div className="item-detail">
            <img src={product.img} alt="Product Image" />
            <h2 id="productName">{product.name}</h2>
            <p className="category" id="productCategory">
              {product.category}
            </p>
            <p id="productDescription">{product.description}</p>
            <p className="price" id="productPrice">
              ${product.price}
            </p>
            <div className="quantity-section">
              <button onClick={hanleDecreaseQuantity}>-</button>
              <span id="productQuantity">{quantity}</span>
              <button onClick={handleIncreaseQuantity}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Agregar al carrito
            </button>
          </div>
      }
    </>
  );
}

export default ItemDetail