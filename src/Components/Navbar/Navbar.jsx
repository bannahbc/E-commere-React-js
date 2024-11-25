import React, { useRef, useState,useEffect} from "react";
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faSun, faMoon} from '@fortawesome/free-regular-svg-icons'
import { faCartShopping,faMagnifyingGlass,faBars,faClose} from '@fortawesome/free-solid-svg-icons'

import { Link } from "react-router-dom";

const Navbar =()=>{
    const menuRef = useRef(null);
       
        const [clicked,setClicked] = useState(false)
    return(
        <div className="navbars sticky">
        <div className="navbar-wrapper">
            <div className="navbar-content">
                <div className="left-nav">
                <div className="nav-logo">
                   <Link to={'/'}>
                   <h4 className="font-mono font-thin text-white shadow-xl px-4">Shopping App</h4>
                   </Link> 
                </div>
                <div className="searchBar">
                    
                <form className="d-flex" role="search">
        <input className="form-control me-2 form-control-sm px-3 py-1 rounded-md" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success btn-sm" type="submit"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
      </form>

                </div>
                </div>
                <div className="right-nav" ref={menuRef}>

                        <ul className={`nav-list ${clicked?'open':''}`}>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/products'}>Products</Link></li>
                        <li><Link to={'/category'}>categories</Link></li>
                        <li><a><FontAwesomeIcon icon={faUser} /> Login</a></li>
                        <li><a><FontAwesomeIcon icon={faCartShopping} /></a></li>
                        <li className="sun"><a><FontAwesomeIcon icon={faSun} /></a></li>
                        <li className="moon"><a><FontAwesomeIcon icon={faMoon} /></a></li>
                    </ul>

                </div>
                    <div className="menu">
                        <div id="menuBar" onClick={()=>{setClicked(!clicked)}}>
                            <FontAwesomeIcon icon={clicked? faClose:faBars} />
                        </div>
                        {/* <div id="closeBtn">
                            <FontAwesomeIcon icon={faClose} />
                        </div> */}
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Navbar