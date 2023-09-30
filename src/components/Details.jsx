import React from 'react'
import { useParams } from 'react-router'

export default function Details(){

     const [van,setVan]=React.useState({})
     const params = useParams();

     React.useEffect(()=>{
          fetch('/api/host/vans')
               .then(res => res.json())
               .then(data => setVan(data.vans[params.id-1]))
     },[params.id])


     return(<div className='van-detail-info'>
          <p><span>Name</span>: {van.name}</p>
          <p><span>Category</span>: {van.type}</p>
          <p><span>description</span>: {van.description}</p>
          <p><span>Visiblity</span>: Public</p>
     </div>)
}