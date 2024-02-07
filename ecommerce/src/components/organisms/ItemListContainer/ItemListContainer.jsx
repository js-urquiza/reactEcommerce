import React, { useState, useEffect } from 'react'
import './ItemListContainer.css'
// import { getProductByCategory, getProducts } from '../../../database/asyncProductsDB'
import ItemList from '../../molecules/ItemList/ItemList'
import Loader from '../../atoms/Loader/Loader'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../../services/firebaseConfig'


const ItemListContainer = ({greeting}) => {

  const [ products, setProducts ] = useState([])
  const [ loaded, setLoaded ] = useState(true)
  const { category } = useParams()

  useEffect(() => {
    
    setLoaded(true);
    
    const productsRef = category
      ? query(collection(db, 'products'), where('category', '==', category)) // Si hay categoría, se usa el método query con el collection de la categoría pasada por parámetro.
      : collection(db, 'products') // Si no hay categoría, se accede a la colección 'products'.
        // El resultado se de la colección a usar se asigna a la variable 'productRef'.

    getDocs(productsRef) // Traemos los documentos de la colección indicada en 'productsRef'.
      .then(snapshot => {
        const formatedProducts = snapshot.docs.map(doc => {
          const data = doc.data(); // Trae los datos de cada producto
          return {
            id: doc.id, // Ponemos el id del documento
            ...data // Agregamos los datos con el spread operatos
          }
        })
        setProducts(formatedProducts); // Seteamos el estado con los nuevos productos formateados con el id.
      })
      .finally(() => {
        setLoaded(false);
      })
    
    // const fetchProducts = async () => {
    //   try {
    //     setLoaded(true);
    //     const result = category
    //       ? await getProductByCategory(category)
    //       : await getProducts();
    //     setProducts(result);
    //   } catch (error) {
    //     console.log(error.message);
    //   } finally {
    //     setLoaded(false);
    //   }
    // }

    // fetchProducts();

  }, [category])
  
  return (
    <>
      <div className="list-container">
        <h1>{greeting}</h1>
        {loaded ? <Loader /> : <ItemList products={products} />}
      </div>
    </>
  )
}

export default ItemListContainer