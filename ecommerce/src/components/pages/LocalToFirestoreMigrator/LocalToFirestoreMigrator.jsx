import React from 'react'
import './LocalToFirestoreMigrator.css'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../services/firebaseConfig'
import { products } from '../../../database/asyncProductsDB'

const LocalToFirestoreMigrator = () => {

  const productsRef = collection(db, 'products');

  const handleUpload = () => {
    products.forEach(element => {
      delete element.id;
      addDoc(productsRef, element);
    });
  }

  return (
    <>
      <div>Migrador de datos</div>
      <button onClick={handleUpload()}>Sincronizar datos</button>
    </>
  )
}

export default LocalToFirestoreMigrator