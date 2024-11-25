import React, { useEffect, useState } from 'react'
import shirt from '../../Assets/img/31101.jpg'
import './Cards.css'
import {api_url} from '../../Services/Services'
import axios from 'axios'
import { faCarTunnel } from '@fortawesome/free-solid-svg-icons'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import { Link } from 'react-router-dom'


const Card =(props)=>{
  const [api_data,setApiData]=useState(null)
  const [loading,SetLoading] = useState(true)
  const btnClass = "px-4 py-1 text-gray-100 rounded-sm  transform transition-all hover:translate-y-0.5 duration-300 hover:shadow-xl hover:transition-x-2 transition-all transform"
  useEffect(()=>{
      const product = axios.get(`${api_url}/products`)
      .then(res=>res.data)
      .then(res=>setApiData(res))
      .catch(err=>{})
      setTimeout(()=>{
        SetLoading(false)
      },2000)
      console.log(api_data,'apidata')
  },[])
  if(loading){
    return(
      <Loading/>
    )
  }
  if(api_data){
  return(
    <div className='card '>
      <div className="card-title flex p-4 flex-col items-center  bg-gray-50">

        <h3 className=' font-light text-2xl'>{props.heading}</h3>
        <hr className='w-52 border-0 rounded h-0.5 bg-gray-400 m-auto mt-1'/>
      </div>
    <div className="bg-gray-100 w-full min-h-screen gap-6 flex-wrap flex justify-center items-center p-5">
      {
        api_data.map((data,index)=>{
          return(
          <div key={index} className="w-64 p-2 bg-white rounded-xl transform transition-all hover:translate-y-0.5 duration-300 shadow-lg hover:shadow-2xl mt-4 mb-4 lg:mt-0">
            <Link to={`/product/${data.hash}`}>
      <img src={`http://127.0.0.1:5000/api/im/${data.image1}`} className='justify-center object-cover rounded-sm border' alt={data.image1} />
        <div className="p-2">
        <p className="text-sm text-gray-600 mt-2 mb-2">{data.category}</p>
          <h5 className='font-semibold text-sm'>{data.product_name}</h5>
          <span className='text-xl font-semibold'>Rs. <span className='text-red -700'>{data.price}</span></span>
    
          <div className="flex items-center gap-3">
            <span className="text-sm line-through opacity-75">Rs. {data.mrp}</span>
            <span className="font-bold text-sm p-2 bg-yellow-300 rounded-s-2xl text-gray-500">Save {data.offer}%</span>
          </div>
        </div>
    </Link>
        <div className="flex item-center justify-stretch gap-2 mb-3">
          <button className={btnClass+" bg-green-400"}>Buy Now</button>
          <button className={btnClass +" bg-blue-200"}>Add to Cart</button>
        </div>
        </div>
          )
    })
    }
      </div>
      </div>
  )}
  else{
    return(
      <div className="nodata">
        <Error/>
      </div>
    )
  }
}

export default Card;


// import React,{useEffect, useState} from 'react'
// import './Cards.css'
// // import drawer from '../../../Assets/Img/1.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartArrowDown,faStar } from '@fortawesome/free-solid-svg-icons'
// import { Link } from 'react-router-dom'
// import Error from '../Error/Error'
// import {api_url} from '../../Services/Services'
// import axios from 'axios'
// // import Loading from '../Loading/Loading'
// // import { json } from 'react-router-dom'


// function Cards({category}) {
//   const [apiData,setApiData] = useState([])
//   const [loading,setLoading] = useState([])
//   useEffect(()=>{

//     axios.get(`${api_url}products`)
//     .then(res=>res.data)
//     .then(res=>{
//       setApiData(res);
//       console.log(apiData,'apidata')
//     })
    
//     .catch(err=>{
//       console.log(err,'errrorrr')

//     })
//     console.log('ree.=,',loading)
//     // fetch(`${api_url}products`)
//     // .then(res=>res.json())
//     // .then(json=>setApiData(json))
//     // .catch(err=>setLoading(true))
//     // setTimeout(()=>{
//     //   setLoading(false)
//     // },2000)
//   },[])


// //   if(loading){
// //     return(
// //     //   <Loading/>
// //     )
// //   }
//   if(apiData){
//   return (
//     <div className='cards'>
//       <div className="card-wrapper">
//         <div className="card-title">
//           <h3>{category?category:"Cards"}</h3>
//         </div>
//         <div className="card-content">

//         {
//           apiData.map((data,index)=>{
//             return(
//           <div className="card-item" key={index}>
//             <div className="card-img">
//               <Link to={`/product/${data.id}`} state={{product_id:data.id}}>
//               <img src={`http://127.0.0.1:5000/api/im/${data.image1}`} alt="" />

//               </Link>
//               <p>{data.image1}</p>
//             </div>
//             <div className="card-details">
//               <div className="cardtop">
//                   <p className="category">{data.category}</p>
//                     <h6 className='title'>{data.product_name}</h6>
//                     {/* <p className="rating">{data.rating.rate} <span> {Array(Math.floor(data.rating.rate)).fill(0).map((_,index)=>(<FontAwesomeIcon key={index} icon={faStar}/>))}</span></p> */}
//               </div>
//               <div className="cardbottom">
//                 <div className="price">
//                 <h5>${data.price}</h5>
//                 <h6><span>$ {data.mrp}</span> -</h6>
//                 <p>{data.offer}%</p>
//                 <p></p>
//                 </div>
//                 <button className="cardBtn" ><span><FontAwesomeIcon icon={faCartArrowDown}/></span> Add To Cart</button>
//               </div>
//             </div>
//           </div>
//           )})
//         }

          

//         </div>
//       </div>
//     </div>
//   )}
//   else{
//     return(
//     <div className="errorss">
//       <Error/>
//           </div>
//           )
//   }
// }

// export default Cards