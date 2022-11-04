import React, { useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dog from './MyComponents/Dog'
import Home from './MyComponents/Home'
import Login from './MyComponents/Login'
import Navbar from './MyComponents/Navbar'
import Register from './MyComponents/Register'
import { StoreItem } from './MyComponents/StoreItem'

export default function MainRoutes() {

  const[isLoggedin, setLogin] = useState(false)
  const Test = () => (
    <h1>Page Not Found 404 Error</h1>
  )
  return (
    <div>
        <Routes>
            <Route path='/' element={<Navbar/>}>
            <Route path='/' element={<Navigate replace to="home"/>}/>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/dog' element={<StoreItem id={0} name={''} price={0} imgUrl={''}/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/register' element={<Register/>}></Route>
            </Route>
            <Route path='*' element={<Test />}/>
        </Routes>
    </div>
  )
}
