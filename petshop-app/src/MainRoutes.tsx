import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Admin from './MyComponents/admin'
import { Dog } from './MyComponents/Dog'
import Home from './MyComponents/Home'
import Login from './MyComponents/Login'
import Logout from './MyComponents/Logout'
import Navbar from './MyComponents/Navbar'
import Order from './MyComponents/Order'
import OrderNext from './MyComponents/OrderNext'
import Register1 from './MyComponents/Register1'
import { ShoppingCart } from './MyComponents/ShoppingCart'
import { StoreItem } from './MyComponents/StoreItem'
import { Store } from './MyComponents/Store'
import AllUsers from './MyComponents/AllUsers'
import AllPets from './MyComponents/AllPets'
import AllPetFood from './MyComponents/AllPetFood'
import EditPet from './MyComponents/EditPet'
import { Favourites } from './MyComponents/Favourites'
import AddPet1 from './MyComponents/AddPet1'
import AddPets from './MyComponents/AddPets'


export default function MainRoutes() {

  const Test = () => (
    <h1>Page Not Found 404 Error</h1>
  )
  return (
      <ShoppingCartProvider>
        <Routes>
            <Route path='/' element={<Navbar/>}>
            <Route path='/' element={<Navigate replace to="home"/>}/>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/dog' element={
        <Dog/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/logout' element={<Logout/>}></Route>
                <Route path='/register' element={<Register1/>}></Route>
                <Route path='/shoppingCart' element={<ShoppingCart isOpen={true}/>}></Route>
                {/* <Route path='/cart' element={<Store/>}></Route> */}
                <Route path='/order' element={<Order isOpen={true}/>}></Route>
                <Route path='/orderNext' element={<OrderNext/>}></Route>
                <Route path='/admin' element={<Admin/>}></Route>
                <Route path='/allusers' element={<AllUsers/>}></Route>
                <Route path='/allpets' element={<AllPets/>}></Route>
                <Route path='/allpetfood' element={<AllPetFood/>}></Route>
                <Route path='/editpet' element={<EditPet/>}></Route>
                <Route path='/favourites' element={<Favourites/>}></Route>
                <Route path='/addpet' element={<AddPet1/>}></Route>
                
            </Route>
            
            <Route path='*' element={<Test />}/>
        </Routes>
        </ShoppingCartProvider>
  )
}
