import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <ItemListContainer greeting={'Hola!'} />
      </div>
    </>
  )
}

export default App
