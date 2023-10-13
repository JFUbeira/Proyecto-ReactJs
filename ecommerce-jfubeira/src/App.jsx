import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import CartContainer from './components/CartContainer/CartContainer'
import { CartContextProvider } from './context/CartContext'
import HomePage from './components/HomePage/HomePage'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <CartContextProvider value={{}}>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/category/:cid' element={<ItemListContainer />} />
            <Route path='/detail/:pid' element={<ItemDetailContainer/>} />
            <Route path='/cart' element={<CartContainer/>} />
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
