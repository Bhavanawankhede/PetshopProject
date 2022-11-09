import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { Dog } from './MyComponents/Dog'
import Home from './MyComponents/Home'
import Login from './MyComponents/Login'
import Navbar from './MyComponents/Navbar'
import Order from './MyComponents/Order'
import OrderNext from './MyComponents/OrderNext'
import Register from './MyComponents/Register'
import { ShoppingCart } from './MyComponents/ShoppingCart'
import { StoreItem } from './MyComponents/StoreItem'

export default function MainRoutes() {

  const[isLoggedin, setLogin] = useState(false)
  const Test = () => (
    <h1>Page Not Found 404 Error</h1>
  )
  return (
    <div>
      <ShoppingCartProvider>
        <Routes>
            <Route path='/' element={<Navbar/>}>
            <Route path='/' element={<Navigate replace to="home"/>}/>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/dog' element={
        <Dog/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
                <Route path='/cart' element={<ShoppingCart isOpen={true}/>}></Route>
                <Route path='/order' element={<Order/>}></Route>
                <Route path='/orderNext' element={<OrderNext/>}></Route>
                
            </Route>
            
            <Route path='*' element={<Test />}/>
        </Routes>
        </ShoppingCartProvider>
    </div>
  )
}
