import React, { useEffect, useState } from 'react'
import {useFormik} from  'formik'
import { useRef } from 'react'
import './Login.css'
import axios, { Axios } from "axios";
import { api_url } from '../../Services/Services';
function Login() {
    const [login,setLogin] = useState(true)
        const formik = useFormik({
            initialValues:{
                email:'',
                password:''
            }
        })
        const getTheToken = ()=>{
        
        }
        useEffect(()=>{
            const {email,password} = formik.values

            const getToken = async() =>{
                try{
                    const response = await axios.post(`${api_url}tokens`,{},{
                        auth:{
                            username:email,
                            password:password
                        }
                    }).then(res=>{
                        alert(res.data)
                    }).catch(err=>{
                        alert(err)
                    })
                }catch(error){
                    alert(error,'errrrjj')
                }
            }
            if(email && password ){
                getToken()
            }
        },[])
// //    formik.submitForm(()=>{
// //     const {email,password} = formik.values
// //     axios.post(`${api_url}tokens`,{},{
// //         auth:{
// //             username:email,
// //             password:password
// //         }
// //     }).then(res=>{
// //         alert(res.data)
// //     }).catch(err=>{
// //         alert(err)
// //     })
//    })
    // if (login){
    //     axios.post(`${api_url}tokens`,{},{
    //         auth:{
    //             username:'1@gmail.com',
    //             password:12
    //         }
    //     })
    //   .then(res => {
    //     const data = res.data;
    //     if (data.token){
    //         localStorage.setItem("token",data.token)
    //     }else{
    //         alert('no token')
    //     }
    // })
    // .catch(err => console.error('Error fetching data:', err.message));
    // }else{
        
    // }
    // const formik = useFormik({
    //     initialValues:{
    //         email:'',
    //         password:''
    //     }
    // })
  return (
    
    <div className='loginPage'>
        <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
        <div className="loginBody">
            <div className="loginForm">
                { login ?

                    <form>
                    <label htmlFor="email">Email</label>
                    <input type="text"  id='email' name='email' onChange={formik.handleChange} value={formik.values.email} required/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' required name='password' onChange={formik.handleChange} value={formik.values.password}/>
                    <input type='submit' className='submitBtn' value="Login" onClick={getTheToken()}/>
                
                    <div className="buttons">
                    <label>New User ? </label> 
                    <a className='aTagBtn' onClick={()=>setLogin(!login)}>Register </a>
                    </div>
                </form>
                :
                <form>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' required/>
                    <label htmlFor="phone">Phone</label>
                    <input type="number" id='phone' required/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' required/>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" id='confirmPassword' required/>
                    <input type="submit" value="Register" className='submitBtn' required/>
                    <div className="buttons">
                    <label>Already have Account ? </label> 
                    <a className='aTagBtn' onClick={()=>setLogin(!login)} title='login'>Login </a>
                    </div>
                    {/* <button onClick={()=>setLogin(!login)}>Click</button> */}
                </form>
                }
            </div>
        </div>
    </div>
  )
}

export default Login