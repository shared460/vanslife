import React from 'react'
import Heading from './Heading'
import { Outlet } from 'react-router'
import Footer from './Footer'

export default function Home(){
     return(<div className='main-page'>
          <Heading/>
          <div className='outlet'>
               <Outlet/> 
          </div>
          <Footer/>
     </div>)
}