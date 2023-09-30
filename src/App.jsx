import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Vans from './components/Vans'
import Host from './components/Host'
import Dashboard from './components/Dashboard'
import Van from './components/Van'
import Income from './components/Income'
import Review from './components/Review'
import VanPage from './components/VanPage'
import VanDetail from './components/VanDetail'
import Pricing from './components/Pricing'
import Photos from './components/Photos'
import Details from './components/Details'
import Main from './components/main'

import "./server"

import './App.css'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }>
          <Route index element={ <Main/> }/>
          <Route path='host' element={ <Host/> }>
            <Route index element={ <Dashboard/> }/>
            <Route path='income' element={ <Income/> }/>
            <Route path='review' element={ <Review/> }/>
            <Route path='van' element={ <Van/> }/>
            <Route path='van/vanDetail/:id' element={ <VanDetail/> }>
              <Route index element={ <Details/> }/>
              <Route path='pricing' element={ <Pricing/> }/>
              <Route path='photos' element={ <Photos/> }/>
            </Route>
          </Route>
          <Route path='about' element={ <About/> }/>
          <Route path='vans' element={ <Vans/> }/>
          <Route path='vans/:id' element={ <VanPage/> }/>
        
        </Route>        
      </Routes>
    </BrowserRouter>
  )
}