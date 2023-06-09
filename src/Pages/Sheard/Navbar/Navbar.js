import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/img/logo.png'
import { BsFillBrightnessLowFill } from "react-icons/bs";

const Navbar = () => {
    // const {user, logOut}=useContext(AuthContext);
    // const handleLogOut=()=>{
    //     logOut()
    //     .then(()=>{})
    //     .catch(error=>console.log(error));
    // }

    const menuItem = <>
    <li><Link to={'/'}>Home</Link></li>
    <li><Link to={'/blog'}>Blog</Link></li>
    <li><Link to={'/contact'}>Contact</Link></li>
    <li><Link to={'/about'}>About</Link></li>
    <li><Link to={'/chat'}>Live Chat</Link></li>
    
    {/* {user?.uid ?
        <>
        <li><Link to={'/dashboard'}>Dashboard</Link></li>
        <li><Link onClick={handleLogOut}>Sign Out</Link></li>
        </>
        :
        <li><Link to={'/login'}>Login</Link></li>
    }
    <Link to={'/addCard'}><FaCartPlus className="w-10 h-10"></FaCartPlus></Link> */}

</>
    return (
        <div className="navbar bg-white">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <div className=" py-2">
                    <div className="  w-24 h-20 ">
                        <img src={logo} alt='' />
                    </div>
                </div>

                <Link to={'/'} className=" text-xl "><span className='text-4xl text-blue-500 font-serif'>Typing</span> Test.com  </Link><BsFillBrightnessLowFill className='animate-ping opacity-70 text-blue-600 mx-2'></BsFillBrightnessLowFill>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuItem}
                </ul>
            </div>
            
            
        </div>
    );
};

export default Navbar;