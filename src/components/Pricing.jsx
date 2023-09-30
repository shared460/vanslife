import React from 'react'
import { useParams } from 'react-router'

export default function Pricing(){

     const [van,setVan]=React.useState({})
     const params = useParams();

     React.useEffect(()=>{
          fetch('/api/host/vans')
               .then(res => res.json())
               .then(data => setVan(data.vans[params.id-1]))
     },[params.id])


     return(<div className='van-detail-info'>
          <p><span>Pricing</span>: ${van.price}/day</p>
     </div>)
}