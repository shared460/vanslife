import React from 'react'
import { NavLink } from  'react-router-dom'

export default function Heading(){

     const activestyles = {
          borderBottom:'2px solid black',
     }

     return(<div className='heading'>
          <div className='logo'>
               <NavLink to='/' style={({isActive})=> isActive? activestyles:null} >#VanLife</NavLink>
          </div>
          <div className='main-navbar'>
               <NavLink to='/host' style={({isActive})=> isActive? activestyles:null}>Host</NavLink>
               <NavLink to='/about' style={({isActive})=> isActive? activestyles:null}>About</NavLink>
               <NavLink to='/vans' style={({isActive})=> isActive? activestyles:null}>Vans</NavLink>
          </div>
     </div>)
}