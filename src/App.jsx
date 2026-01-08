import React from 'react'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import AboutPage from './pages/AboutPage'
import RegisterPage from './pages/RegisterPage'
import MenuPage from './pages/MenuPage'
import LayoutMain from './layouts/LayoutMain'
import ContactUs from './pages/ContactUs'
import ReservationsPage from './pages/ReservationsPage'





export default function App() {
  return (
    <div className='bg-white overflow-auto min-h-screen w-full '>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LayoutMain/>}>
    <Route index element={<Homepage />}/>
    <Route path='about' element={<AboutPage/>}/>
    <Route path='menu' element={<MenuPage/>}/>
    <Route path='contact' element={<ContactUs/>}/>
    <Route path='reservations' element={<ReservationsPage/>}/>
    </Route>
   
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/register' element={<RegisterPage/>}/> 
    <Route path="*" element={<h1>Error 404 | Page Not Found</h1>} />

    
   </Routes>
   </BrowserRouter>

      </div>
    
  )
}
