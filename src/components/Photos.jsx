import React from 'react'
import { useParams } from 'react-router'

export default function Photos(){

     const [van,setVan]=React.useState({})
     const params = useParams();

     React.useEffect(()=>{
          fetch('/api/host/vans')
               .then(res => res.json())
               .then(data => setVan(data.vans[params.id-1]))
     },[params.id])


     return(<div className='van-detail-info'>
          <img src={van.imageUrl} className='van-detail-img-img'/>
     </div>)
}