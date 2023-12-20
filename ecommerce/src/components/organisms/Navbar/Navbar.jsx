import React from 'react'
import './Navbar.css'
import NavButton from '../../atoms/NavButton/NavButton'
import CartWidget from '../../molecules/CartWidget/CartWidget'

const Navbar = () => {
  
    let titles = ["Inicio", "Productos", "Carrito"];
  
    return (
      <>
        <nav>
            <h3>Ecommerce</h3>
            { titles.map((title, index) => <NavButton key={index} btnTitle={title} />) }
            <CartWidget />
        </nav>
      </>
    );
}

export default Navbar