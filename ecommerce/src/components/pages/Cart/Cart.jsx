import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../../context/CartContext'

const Cart = () => {
  
  const { cart, total, emptyCart } = useContext(CartContext);

  console.log(cart);
  console.log(total);

  return (
    <div>
      <h2>Tu compra</h2>
      {cart.length == 0 ? (
        <h3 className="cart-empty">Tu carrito está vacío</h3>
      ) : (
        <>
        <div className='cart'>
          {cart.map((item) => (
            <div className='item' key={item.id}>
              <div className='image'>
                <img src={item.img} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p className='price'>Precio: ${item.price}</p>
            </div>
          ))}
          <h3>Total: ${total()}</h3>
          <button className='empty-cart' onClick={()=>emptyCart()}>Vaciar</button>
        </div>
        </>
      )}
    </div>
  );
}

export default Cart
