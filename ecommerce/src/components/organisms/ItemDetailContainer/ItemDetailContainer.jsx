import React, { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import { getProductById } from '../../../database/asyncProductsDB';
import ItemDetail from '../../molecules/ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState(null);

  useEffect (() => {
    getProductById('1')
      .then(res => {
        setProduct(res);
      })
      .catch(err => {
        console.log(err + " " + err.message);
      })
  }, [])
  
  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer