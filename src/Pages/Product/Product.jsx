import React, { useEffect, useState } from 'react'
import shirt from '../../Assets/img/31101.jpg'
import shirt2 from '../../Assets/img/50195.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faArrowAltCircleLeft, faArrowDown, faArrowsRotate, faArrowsSpin, faArrowsSplitUpAndLeft, faCarTunnel, faDollar, faMoneyBill, faQ, faQuran, faTruck, faTruckArrowRight } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import { faAmazonPay, faProductHunt } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import { api_url } from '../../Services/Services'
import { useParams } from 'react-router-dom'
import { image_api } from '../../Services/api_list'
import Error from '../../Components/Error/Error'
import Loading from '../../Components/Loading/Loading'
import FontAwesome from 'react-fontawesome'
import { faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons/faMoneyBillWave'
import { faAccusoft } from '@fortawesome/free-brands-svg-icons/faAccusoft'
import { faPersonWalkingDashedLineArrowRight } from '@fortawesome/free-solid-svg-icons/faPersonWalkingDashedLineArrowRight'
import { faSquareGitlab } from '@fortawesome/free-brands-svg-icons/faSquareGitlab'
import Card from '../../Components/Cards/Cards'


function Product(props) {
  const {product_id} = useParams()
  const [api_data,setApiData] = useState(null)
  const [loading,setLoading] = useState(true)
  const getImage = api_url+image_api
  useEffect(()=>{
    const getProduct =()=>{
      axios.get(`${api_url}product/${product_id}`)
      .then(res=>res.data)
      .then(res=>setApiData(res))
      .catch(err=>console.log(err))
      setTimeout(()=>{
        setLoading(false)
      },2000)
      console.log(api_data)
    }
    getProduct();
  },[])
  const imgClass = "w-33 h-32 object-cover border hover:shadow-2xl hover:translate-y-2 duration-300 transform transform-all";
  const btnClass = "p-2  px-6 rounded-lg border mr-3 duration-300 text-white shadow-2xl hover:shadow-none hover:translate-y-0.5 duration-300 transform transform-all"
  
  if(loading){
    return(
      <>
      <Loading/>
      </>
    )
  }
  if(api_data){

  
  return (
    
    <>
    
    <div className='product bg-gray-100 py-10'>
      <div className="product-content flex gap-24 flex-wrap justify-center ">
        <div className="product-left">
          <div className="product-images">
            <div className="main-image w-80">
              <img className='bb ject-cover rounded-md hover:shadow-none shadow-2xl hover:translate-2 duration-300 transform transform-all' src={`${api_url}${image_api}${api_data?api_data.image1:""}`} alt="" />
            </div>
            <div className="small-image mt-2 w-36 flex space-x-4 ">
              <img className={imgClass} src={`${api_url}${image_api}${api_data?api_data.image1:""}`} alt="" />
              <img className={imgClass} src={`${getImage+api_data.image2}`} alt="" />
              <img className={imgClass} src={`${getImage+api_data.image3}`} alt="" />
              
            </div>
          </div>
        </div>

        <div className="product-right flex flex-col justify-stretch">
          <p className='text-sm text-gray-600'>{api_data.category}</p>
          <h2 className=' font-bold capitalize text-2xl'>{api_data.product_name}</h2>
          <div className="product-price mt-5">
            <p><span className='text-green-800 font-bold'><FontAwesomeIcon icon={faArrowDown}/>{api_data.offer +"%"}</span> <span className='text-gray-400 line-through'>{api_data.mrp}</span> <span className='text-red-900 font-bold'>{api_data.price}</span></p>
            {/* <p className='font-bold text-sm w-24 p-2 bg-yellow-300 rounded-s-2xl text-gray-500'>Save <span className='text-yellow-600'>
               {api_data.offer}%
              </span> -</p> */}
            {/* <h4 className='text-red-600 font-bold mb-1'><span className='text-gray-400  line-through'>$ {api_data.mrp}</span> $ {api_data.price}</h4> */}
          </div>
          <p>Description :</p>
            <p className='w-80 font-light'>{api_data.description}</p>
            <div className="delivery flex gap-2 items-center">
              <span className='text-sm opacity-24 text-gray-700'>

              <FontAwesomeIcon icon={faTruckArrowRight}/>
              </span>
              <div className="free flex items-center gap-1">
                <p className='text-green-600'>Freedelivey</p>
                <p className='line-through text-gray-500'>$40</p>
                <p className='text-xs'>Delivery with in 2 Days {`>`}</p>
              </div>
            </div>
            <div className="delivery flex gap-2 items-center">
              <span className='text-sm opacity-24 text-gray-700'>

              <FontAwesomeIcon icon={faArrowsRotate}/>
              </span>
              <div className="free flex items-center gap-1">
                <p className='text-xs'>10 Days Return Policy {`>`}</p>
                
              </div>
            </div>
            <div className="delivery flex gap-2 items-center">
              <span className='text-sm opacity-24 text-gray-700'>

              <FontAwesomeIcon icon={faMoneyBillWave}/>
              </span>
              <div className="free gap-1">
                <p className='text-xs'>Cash on Delivery Available {`>`}</p>
              </div>
            </div>
            
          <div className="product-btns mt-5">
            <div className="btn-top">
            <button className={`${btnClass}  bg-blue-300` }>Count</button>
            </div>
            <div className="btn-bottom mt-4">
            <button className={`${btnClass} bg-lime-400`}>Buy Now</button>
            <button className={`${btnClass} bg-yellow-400`}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="similarProduct mt-10">
        <Card heading="Similar Products" category={api_data.category_id}/>
      </div>
    </div>
    </>
  )}
  else{
    return(
      <>
      <Error/>
      </>
    )
  }
}

export default Product