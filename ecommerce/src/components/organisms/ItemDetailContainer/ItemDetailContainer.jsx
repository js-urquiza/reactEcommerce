import React, { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import { getProductById } from '../../../database/asyncProductsDB';
import ItemDetail from '../../molecules/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect (() => {
    getProductById(id)
      .then(res => {
        setProduct(res);
      })
      .catch(err => {
        console.log(err + " " + err.message);
      })
  }, [id])
  
  return (
    <div>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer