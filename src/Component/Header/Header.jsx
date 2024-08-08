import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom';
import "./Header.css"
import useOnlineStatus from '../../utils/useOnlineStatus';
import UserConetxt from '../../utils/UserContext';
import { useSelector } from 'react-redux';

export const Header = () => {

    let [btnName, setbtnName] = useState("LogIn");
    console.log("header Render");

    const onlineStatus = useOnlineStatus()

    const { loggedInUser } = useContext(UserConetxt);

    // subscribing to the store to the selector
    const cartItem = useSelector((store) => store.cart.items)
    // console.log(data);

    // if no dependency array => useEffect is called every time when Header component is Render
    // if dependency array is empty =[]=>useEffect is called on initial render(just one)
    useEffect(() => {
        // console.log("UseEffect render");
        // every time Header component render effect call
    }, [])

    return (
        <div className='flex justify-between bg-white shadow-lg  '>
            <div className='logo-container'>
                <img className='w-28 h-24 p-1 ' src="https://img.freepik.com/free-vector/ecofood-logo-template_1195-33.jpg?size=626&ext=jpg&ga=GA1.1.1463087347.1700461840&semt=ais_user" alt="" />
            </div>

            <div className='nav-Item'>
                <ul>
                    <li>Online Status:{onlineStatus ? "✅" : "❌"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li><Link to="/cart">Cart  <span className='absolute text-red-500 text-sm mb-4'>🛒<span className='font-bold'>{cartItem.length}</span></span> </Link></li>
                    <button className='login-btn' onClick={() => { btnName === "LogIn" ? setbtnName("LogOut") : setbtnName("LogIn") }}>{btnName}</button>
                    <li className='px-4 font-bold'>{loggedInUser}</li>
                </ul>
            </div>

        </div>
    )
}

export default Header
