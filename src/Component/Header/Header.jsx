import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../../utils/useOnlineStatus';
import UserConetxt from '../../utils/UserContext';
import { useSelector } from 'react-redux';
import { Menu, X } from 'lucide-react'; // optional for hamburger icon

export const Header = () => {
    const [btnName, setbtnName] = useState("LogIn");
    const [menuOpen, setMenuOpen] = useState(false);

    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserConetxt);
    const cartItem = useSelector((store) => store.cart.items);

    useEffect(() => { }, []);

    return (
        <header className="bg-white shadow-md px-4 py-2">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    <img
                        className="w-20 h-20 object-contain"
                        src="https://img.freepik.com/free-vector/ecofood-logo-template_1195-33.jpg"
                        alt="Logo"
                    />
                </div>

                {/* Mobile Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Navigation Menu */}
                <nav
                    className={`flex-col md:flex md:flex-row md:items-center md:space-x-6 absolute md:static bg-white md:bg-transparent w-full md:w-auto top-full left-0 z-10 md:z-auto transition-all ease-in duration-300 ${menuOpen ? "flex" : "hidden"
                        }`}
                >
                    <ul className="flex flex-col md:flex-row w-full md:w-auto text-lg space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
                        <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/grocery">Grocery</Link></li>
                        <li className="relative">
                            <Link to="/cart" className="flex items-center">
                                Cart 🛒
                                <span className="ml-1 text-red-500 font-bold">{cartItem.length}</span>
                            </Link>
                        </li>
                        <li>
                            <button
                                className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition"
                                onClick={() => setbtnName(btnName === "LogIn" ? "LogOut" : "LogIn")}
                            >
                                {btnName}
                            </button>
                        </li>
                        <li className="font-bold">{loggedInUser}</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
