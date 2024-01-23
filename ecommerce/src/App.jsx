import { useState } from 'react'
import './App.css'
import Navbar from './components/organisms/Navbar/Navbar'
import ItemListContainer from './components/organisms/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/organisms/ItemDetailContainer/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'} />
      <ItemDetailContainer />
    </>
  )
}

export default App
