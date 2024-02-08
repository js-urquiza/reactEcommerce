import React, { useContext, useState } from 'react'
import './Checkout.css'
import { CartContext } from '../../../context/CartContext'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../services/firebaseConfig';
import { Navigate } from 'react-router-dom';

const Checkout = () => {
  
  const { cart, emptyCart, total } = useContext(CartContext);

  // Creamos un estado con los valores que estan en el formulario
  const [ values, setValues ] = useState({
    name: '',
    adress: '',
    email: '',
  });

  const [ orderId, setOrderId ] = useState(null);

  console.log(values);

  
  // La función handleInputChange se asegura de que, cuando escribes en una sección específica,
  // la información se guarda en el lugar correcto de la lista.
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
    // La función setValue abre los valores previos,
    // identifica cuál de los inputs tiene un cambio en el valor con e.target.name,
    // y le asigna el valor de e.target.value
  };

  const ordersRef = collection(db, 'orders');

  const handleSubmit = (e) => {
    
    e.preventDefault();

    // Validaciones
    if (values.name.length == 0) {
      return
    }
    if ((values.adress.length == 0)) {
      return;
    }
    if ((values.email.length == 0)) {
      return;
    }

    const order = {
      date: new Date(),
      customerData: values,
      cart,
      total: total(),
    }
    
    // addDoc() añade la orden a la colección
    // en el .then capturamos la respuesta de Firebase luego de crear un documento
    // esa respuesta es el documento (doc) creado en la BD
    // la ID de ese documento la guardamos en un nuevo estado haciendo setOrderId(doc.id)
    addDoc(ordersRef, order)
      .then((doc) => { // Captura la respuesta que es el documento creado
        setOrderId(doc.id); // Asignamos el id del documento a un estado llamado orderId
        emptyCart(); // Vaciamos el carro
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  // Mensaje de checkout exitoso
  // Si existe un orderId damos el mensaje
  if (orderId) {
    return (
      <>
        <h3>Tu orden se generó correctamente.</h3>
        <p>Número de orden: {orderId}</p>
      </>
    )
  } 

  
  // Si el carro está vacío se redirecciona a home
  if (cart.length == 0) {
    return <Navigate to='/' /> // Como el redirect de expressjs.
  }
  
  // La acción del formulario se maneja desde onSubmit del form y no desde el btn
  return (
    <>
      <form className='simple-form' onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:
          <input type="text" name="name" id="name" onChange={handleInputChange} />
        </label>
        <label htmlFor="adress">Dirección:
          <input type="text" name="adress" id="adress" onChange={handleInputChange} />
        </label>
        <label htmlFor="email">Email:
          <input type="text" name="email" id="email" onChange={handleInputChange} />
        </label>
        <button type="submit" className='submit-btn'>Confirmar compra</button>
      </form>
    </>
  )
}

export default Checkout