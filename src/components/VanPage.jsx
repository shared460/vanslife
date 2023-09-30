import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function VanPage(){

     const params=useParams()

     const [data,setData] = React.useState({})

     React.useEffect(() => {
          fetch(`/api/vans`)
               .then(res => res.json())
               .then(data => setData(data.vans[params.id-1]))
     },[params.id])

     let color

     if(data.type == 'simple'){
          color = '#E17654'
     }else if(data.type == 'rugged'){
          color = '#115E59'
     }else{
          color = '#161616'
     }


     return(<div className='van-page'>
          <Link to='/vans'>Back to all vans</Link>
          <div className='van-page-img'>
               <img src={data.imageUrl}/>
          </div>
          <div className='van-page-box'>
               <p style={{background:color}}>{data.type}</p>
          </div>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <button>Rent this van</button>
     </div>)
}