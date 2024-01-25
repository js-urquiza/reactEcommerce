import { useState } from 'react'
import './App.css'
import Navbar from './components/organisms/Navbar/Navbar'
import ItemListContainer from './components/organisms/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/organisms/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Contexts
import { CartContext, CartContextProvider } from './context/CartContext';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'} />} />
            <Route path='/category/:category' element={<ItemListContainer greeting={'Bienvenidos'} />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
