import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './navbar.css';
import { AiOutlineBank } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LiaUserNurseSolid } from "react-icons/lia";
import { FaHospitalAlt } from "react-icons/fa";
import { MdOutlineLocalHospital } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { MdOutlinePersonAddAlt1 } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import logo from '../Assets/logo.png'
import carticon from '../Assets/cart_icon.png'

const NavBar = () => {

    const [menu, setMenu] = useState("shop")


    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" /> 
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'> Women</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login"><button>Login</button></Link>
                <Link to='/cart'><img src={carticon} alt="" /></Link>
                <div className="nav-cart-count">0</div>
            </div>

        </div>
    )
}

export default NavBar;
