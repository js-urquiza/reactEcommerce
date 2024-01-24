import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
import { getProductByCategory, getProducts } from '../../../database/asyncProductsDB'
import ItemList from '../../molecules/ItemList/ItemList'
import Loader from '../../atoms/Loader/Loader'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {

  const [ products, setProducts ] = useState([])
  const [ loaded, setLoaded ] = useState(true)
  const { category } = useParams()

  useEffect(() => {
    
    const fetchProducts = async () => {
      try {
        setLoaded(true);
        const result = category ? await getProductByCategory(category) : await getProducts();
        setProducts(result);
        console.log(result);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoaded(false);
      }
    }

    fetchProducts();

  }, [category])
  
  return (
    <>
      <h1>{greeting}</h1>
      {loaded ? <Loader /> : <ItemList products={products} />}
    </>
  )
}

export default ItemListContainer