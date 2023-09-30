import React from 'react'
import { Link } from 'react-router-dom';

export default function Vans(){
     
     const [vans,setVans] = React.useState([]);

     React.useEffect(()=>{
          fetch('/api/vans')
               .then(res => res.json())
               .then(data => setVans(data.vans))
     },[])
     


     const vansArray = vans.map((van)=>{
          
          let color
          if(van.type == 'simple'){
               color = '#E17654'
          }else if(van.type == 'rugged'){
               color = '#115E59'
          }else{
               color = '#161616'
          }
          
          return(
               <Link to={`/vans/${van.id}`}>
                    <div key={vans.id} className='vans-van'>
                         <div className='vans-img'>
                              <img src={ van.imageUrl }/>
                         </div>
                    <div className='vans-info'>
                         <h3>{ van.name }</h3>
                         <p>${ van.price } <br/><span>/day</span></p>
                    </div>
                    <div className='vans-box' style={{background:color}}>{van.type}</div>
                    </div>
               </Link>
          )
     })


     return(<div>
          <h1 className='vans-heading'>Explore our van options</h1>
          <div className='vans-array'>
               {vansArray}
          </div>
     </div>)
}
