import React from 'react'
import './Navbar.css'
import NavButton from '../../atoms/NavButton/NavButton'
import CartWidget from '../../molecules/CartWidget/CartWidget'

const Navbar = () => {
  
    let categories = [
      {
        title: "Inicio",
        path: "/"
      },
      {
        title: "Smartphones",
        path: "/category/smartphones",
      },
      {
        title: "Laptops",
        path: "/category/laptops",
      },
    ];
  
    return (
      <>
        <nav>
            <h3>Ecommerce</h3>
            { categories.map((categories, index) => <NavButton key={index} categories={categories} />) }
            <CartWidget />
        </nav>
      </>
    );
}

export default Navbar