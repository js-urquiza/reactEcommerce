import { useState } from 'react'
import './App.css'
import Navbar from './components/organisms/Navbar/Navbar'
import ItemListContainer from './components/organisms/ItemListContainer/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Bienvenidos'} />
    </>
  )
}

export default App
