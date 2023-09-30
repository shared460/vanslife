import React from 'react'
import { Link } from 'react-router-dom'

export default function Van(){

     const [vans, setVans] = React.useState([])

     React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
     }, [])

     const vansArray=vans.map((van)=>{
          return(
               <Link to={`/host/van/vanDetail/${van.id}`}>
                    <div className='host-van-van'>
                    <div className='host-van-img'>
                         <img src={van.imageUrl} />
                    </div>
                    <div className='host-van-info'>
                         <h2>{van.name}</h2>
                         <p>${van.price}/day</p>
                    </div>
                    </div>
               </Link>
          )
     })

     return(<div className='host-van'>
               <h3 className='host-van-heading'>Your listed vans</h3>
               <div className='host-van-array'>
                    {vansArray}
               </div>
     </div>)
}