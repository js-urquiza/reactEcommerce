import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/organisms/Navbar/Navbar'
import ItemListContainer from './components/organisms/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/organisms/ItemDetailContainer/ItemDetailContainer";
import Cart from './components/pages/Cart/Cart';

// Contexts
import { CartContextProvider } from './context/CartContext';
import LocalToFirestoreMigrator from './components/pages/LocalToFirestoreMigrator/LocalToFirestoreMigrator'

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
            <Route path='/cart' element={<Cart />} />
            <Route path='/migrator' element={<LocalToFirestoreMigrator />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
