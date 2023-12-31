import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { getProducts } from '../../../database/asyncProductsDB'
import ItemList from '../../molecules/ItemList/ItemList'
import Loader from '../../atoms/Loader/Loader'


const ItemListContainer = ({greeting}) => {

  const [ products, setProducts ] = useState([])
  const [ loaded, setLoaded ] = useState(true)

  useEffect(() => {
    getProducts().then(res => {
      setProducts(res); // Carga los productos en "products" con nuestra respuesta de la promesa
    })
    .finally(res => {
      setLoaded(false);
    })
  }, [])
  
  return (
    <>
      <h1>{greeting}</h1>
      {loaded ? <Loader /> : <ItemList products={products} />}
    </>
  );
}

export default ItemListContainer