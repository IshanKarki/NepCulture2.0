import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from '@fortawesome/free-brands-svg-icons';

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
                        NepCulture &nbsp;
                        <FontAwesomeIcon icon={faApple} />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <div className='nav-contents'>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/blogs' className='nav-links' onClick={closeMobileMenu}>
                                    Blogs
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/exhibition' className='nav-links' onClick={closeMobileMenu}>
                                    Exhibition
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                    About
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
                                    <i class="fas fa-user-circle" />
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/main-cart-section' className='nav-links' onClick={closeMobileMenu}>
                                    <i class="fas fa-cart-plus" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='dropdown'>
                        {button && <Button buttonStyle='btn--outline'>Login / Register</Button>}
                        <div class="dropdown-content">
                            <a href="/sign-in">Login</a>
                            <a href="/sign-up">Register</a>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    );
}

export default Navbar;