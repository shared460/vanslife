import React from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

export default function VanDetail(){
     
     const [van,setVan]=React.useState({})
     const params = useParams();

     React.useEffect(()=>{
          fetch('/api/host/vans')
               .then(res => res.json())
               .then(data => setVan(data.vans[params.id-1]))
     },[params.id])

     const stylish = {
          borderBottom:'2px solid black',
     }



     return(<div className='detail'>
          <NavLink to='..'>Back to all vans</NavLink>
          <div className='detail-page'>
               <div className='detail-block'>
                    <img src={van.imageUrl}/>
                    <div className='detail-info'>
                         <div>{van.type}</div>
                         <h2>{van.name}</h2>
                         <h2>${van.price}<span>/day</span></h2>
                    </div>
               </div>
               <div className='detail-link'>
                    <NavLink to='.' style={({isActive})=>isActive?stylish:null} end>Details</NavLink>
                    <NavLink to={`/host/van/vanDetail/${van.id}/pricing`} style={({isActive})=>isActive?stylish:null}>Pricing</NavLink>
                    <NavLink to={`/host/van/vanDetail/${van.id}/photos`} style={({isActive})=>isActive?stylish:null}>Photos</NavLink>
               </div>
               <Outlet/>
          </div>

     </div>)
}

// . means the same path as we on the website