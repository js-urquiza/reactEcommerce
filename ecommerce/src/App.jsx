import { useState } from 'react'
import './App.css'
import Navbar from './components/organisms/Navbar/Navbar'
import ItemListContainer from './components/organisms/ItemListContainer/ItemListContainer'
import ItemDetailContainer from "./components/organisms/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Bienvenidos'} />} />
          <Route path='/category/:category' element={<ItemListContainer greeting={'Bienvenidos'} />} />
          <Route path='/product/:id' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
