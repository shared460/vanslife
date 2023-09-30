import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function Host(){

     const activestyles = {
          borderBottom:'2px solid black',
     }

     return(<div className='host'>
          <div className='host-navbar'>
               <NavLink to='/host' style={({isActive})=> isActive? activestyles:null} end>Dashboard</NavLink>
               <NavLink to='/host/income' style={({isActive})=> isActive? activestyles:null}>Income</NavLink>
               <NavLink to='/host/van' style={({isActive})=> isActive? activestyles:null}>Vans</NavLink>
               <NavLink to='/host/review' style={({isActive})=> isActive? activestyles:null}>Reviews</NavLink>       
          </div>
          <div className='outlet'>
               <Outlet/>
          </div>
     </div>)
}