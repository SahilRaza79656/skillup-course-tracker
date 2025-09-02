import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Navbar(){

    const { user } = useContext(UserContext);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
    }

    return (
        <nav className='navbar navbar-expand-lg custom-navbar'>
            <div className='container-fluid justify-content-center'>
                <span className='navbar-brand mb-0 h1 text-white'>SkillUp Tracker</span>
            </div>
            <span className='text-white'>{user ? `Welcome, ${user.email}` : 'Please login'}</span>
            <button onClick={handleLogout} className='btn btn-danger'>Logout</button>
        </nav>
    );
}

export default Navbar;