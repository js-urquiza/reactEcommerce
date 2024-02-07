import React, { useState, useEffect } from 'react'
import './ItemDetailContainer.css'
import { getProductById } from '../../../database/asyncProductsDB';
import ItemDetail from '../../molecules/ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../services/firebaseConfig';

const ItemDetailContainer = () => {

  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect (() => {

    // Traer un documento de Firestore
    const productRef = doc(db, 'products', id); // Tiene 3 parámetros: la bd, la colección y el id.

    getDoc(productRef)
      .then(snapshop => {
        const data = snapshop.data();
        const formattedProduct = {
          id: snapshop.id,
          ...data
        }
        setProduct(formattedProduct);
      })
      .catch(err => {
        console.log(err.message);
      })

      // getProductById(id)
      //   .then(res => {
      //     setProduct(res);
      //   })
      //   .catch(err => {
      //     console.log(err + " " + err.message);
      //   })
  }, [id])

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  )
}

export default ItemDetailContainer