import React, { useContext } from 'react'
import './CartWidget.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext } from "../../../context/CartContext";
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const { itemQuantity } =  useContext(CartContext);

  return (
    <Link className='cart-widget' to={'/cart'}>
      <div className='cartIcon'>
        <ShoppingCartOutlinedIcon />
        <p>{itemQuantity()}</p>
      </div>
    </Link>
  )
}

export default CartWidget