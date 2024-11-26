import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { api_url } from '../../Services/Services'
import { Link } from 'react-router-dom'

function Category() {
    const [apiData,setApiData] = useState([])
    useEffect(()=>{
        const category = ()=>{
            axios.get(`${api_url}category`)
            .then(res=>res.data)
            .then(res=>setApiData(res))
            .catch(err=>console.log(err))
        }
        category();
    },[])
    if(apiData){

        return (
            <div>
        <div className="category-content m-20 flex flex-wrap justify-center gap-5">
            {
                apiData.map((data,index)=>{
                    return(
                        <Link to={{pathname:`/category/products`}} state={{message:data.category_name,category_id:data.hash}}>
                        <div key={index} className="categoryCard w-52 h-20 flex transform transition-all duration-500 hover:shadow-none justify-center items-center cursor-pointer bg-gray-300 px-5 py-4 rounded-sm shadow-md">
                <p>{data.category_name}</p>
            </div>
                        </Link>
                    )
                })
            }
            
        </div>
    </div>
  )
}
}

export default Category