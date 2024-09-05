import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Collection from './Pages/Collection'
import Login from './Pages/Login'
import Orders from './Pages/Orders'
import PlaceOrder from './Pages/PlaceOrder'
import Product from './Pages/Product'
import About from './Pages/About'
import Cart from './Pages/Cart'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import SearchBar from './Components/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
      <Navbar/>
      <SearchBar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/Collection' element={<Collection/>}/>
       <Route path='/About' element={<About/>}/>
       <Route path='/Cart' element={<Cart/>}/>
       <Route path='/Contact' element={<Contact/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/Orders' element={<Orders/>}/>
       <Route path='/Placeorders' element={<PlaceOrder/>}/>
       <Route path='/product/:productID' element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App