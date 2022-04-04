import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2 className='text-3xl font-bold'>Gadget Valley</h2>
            <nav>
                <Link className='font-bold mr-4' to="/home">Home</Link>
                <Link className='font-bold mr-4' to="/reviews">Reviews</Link>
                <Link className='font-bold mr-4' to="/dashboard">Dashboard</Link>
                <Link className='font-bold mr-4' to="/blogs">Blogs</Link>
            </nav>
        </div>
    );
};

export default Header;