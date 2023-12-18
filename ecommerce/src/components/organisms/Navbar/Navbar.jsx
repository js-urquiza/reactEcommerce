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
            <NavButton btnTitle={titles[0]} />
            <NavButton btnTitle={titles[1]} />
            <NavButton btnTitle={titles[2]} />
            <CartWidget />
        </nav>
      </>
    );
}

export default Navbar