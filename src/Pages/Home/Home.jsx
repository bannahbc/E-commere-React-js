import React, { useRef } from 'react'
import {useFormik} from 'formik'
import Navbar from '../../Components/Navbar/Navbar'
import Cards from '../../Components/Cards/Cards'

function Home() {
  
  return (
    <div>      
      <Cards heading = "New Collections"/>

    </div>
  )
}

export default Home

// import React, { useRef } from 'react';
// import { useFormik } from 'formik';

// function Home() {
//     const formik = useFormik({
//         initialValues: {
//             email: '',
//             password: ''
//         },
//         onSubmit: values => {
//             console.log('Form data:', values);
//         }
//     });

//     return (
//         <div>
//             <form onSubmit={formik.handleSubmit}>
//                 <label htmlFor="email">Email</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.email}
//                 />
                
//                 <label htmlFor="password">Password</label>
//                 <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     value={formik.values.password}
//                 />

//                 <input type="submit" value="Submit" />
//             </form>
//         </div>
//     );
// }

// export default Home;
