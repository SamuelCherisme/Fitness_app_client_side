import React, { useState, useEffect } from 'react';
// import { MenuItems } from "./MenuItems"
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { MenuItems } from '../NavBar/MenuItems'
import LogoutButton from '../Logout/logout-button'
import './NavBar.css';
import Auth0 from '../Auth0/Auth0.js'
import Auth0Logout from '../Auth0/AuthoLogout'

// import { useAuth0 } from '@auth0/auth0-react';
// import LoginButton from '../Login/Login-button';
// import LogoutButton from '../Login/Login-button'


// const AuthNav = () => {
//   const { isAuthenticated } = useAuth0();

//   return (
//     <Navbar className="justify-content-end">
//       {isAuthenticated ? <LogoutButton /> : <LoginButton />}
//     </Navbar>
//   );
// };


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Mr.Fitness
            <i class='fab fa-typo3' />
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>



                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
              </Link>

                        </li>
                        <li className='nav-item'>
                            <Link
                                to='/profile'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                profile
              </Link>
                        </li>


                        <li className='nav-item'>
                            <Link
                                to='/schedule'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Schedule
              </Link>
                        </li>



                        <li className='nav-item'>
                            <Link
                                to='/contact-us'
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                Contact Us
              </Link>
                        </li>


                    
                    </ul>
                    <li>
                        <Auth0Logout />
                    </li>
                    <li>
                        <Auth0 />
                    </li>
                </div>
            </nav>
        </>
    );
}

export default Navbar;