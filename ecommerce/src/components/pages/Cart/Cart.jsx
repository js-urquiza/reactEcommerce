import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../../../context/CartContext'

const Cart = () => {
  
  const { cart, total, emptyCart, removeItem } = useContext(CartContext);

  console.log(cart);
  console.log(total);

  return (
    <div>
      {cart.length == 0 ? (
        <>
        <div className='cart'>
          <h2>Tu compra</h2>
          <h3 className="cart-empty">Tu carrito está vacío</h3>
        </div>
        </>
      ) : (
        <>
        <div className='cart-info-container'>
          <div className='cart'>
            {cart.map((item) => (
              <div className='item' key={item.id}>
                <div className='image'>
                  <img src={item.img} alt={item.name} />
                </div>
                <h3>{item.name}</h3>
                <p>Cantidad: {item.quantity}</p>
                <p className='price'>Precio: ${item.price}</p>
                <button className='remove-item' onClick={()=>removeItem(item.id)}>Eliminar</button>
                {/* Si no se hace una función callback on onClick entonces no se puede para id por parámetro */}
              </div>
            ))}
          </div>
          <div className='summary'>
            <h3>Total: ${total()}</h3>
            <button className='empty-cart' onClick={()=>emptyCart()}>Vaciar</button>
            <button className='continue'>Continuar</button>
          </div>
        </div>
        </>
      )}
    </div>
  );
}

export default Cart
