import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { getProducts } from '../../../database/asyncProductsDB'
import ItemList from '../../molecules/ItemList/ItemList'


const ItemListContainer = ({greeting}) => {

  const [ products, setProducts ] = useState([])

  useEffect(() => {
    getProducts().then(res => {
      setProducts(res); // Carga los productos en "products" con nuestra respuesta de la promesa
    })
  }, [])
  
  return (
    <>
    <h1>{greeting}</h1>
    <ItemList products={products} />
    </>
  )
}

export default ItemListContainer