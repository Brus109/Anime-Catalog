import react from 'react';
import '../styles/navbar.css';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookBookmark, faBookmark, faStar } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <nav className='navbar-left'>
                <a href="/" className="logo">
                    <img src={logo} alt="AnimeRep" />
                    <span className="logo-text">{"{AnimeRep}"}</span>
                </a>
            </nav>
            <nav className='navbar-right'>
                <ul className='nav-links'>
                    <li>
                        <div className='search-container'>
                            <input type="text" placeholder='search...' className='search-input'/>
                        </div>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faBookmark}/>
                        <a href="">Watchlist</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar} />
                        <a href="">Recommendations</a>
                    </li>
                    <li>
                        <a className='SignIn' href="">Sign In</a>
                    </li>
                </ul>
                
            </nav>
        </nav>
    );
};

export default Navbar;