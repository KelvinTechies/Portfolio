import './NavBar.css';
import Toggle from '../Tog/Tog'
import { Link } from 'react-scroll'

const NavBar = () => {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Osas </div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: 'none' }}>
                        <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='Services' smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to='Experience' smooth={true} >
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to='Portfolio' smooth={true}>
                            <li>Portfolio</li>
                        </Link>
                        <Link spy={true} to='Testimonials' smooth={true}>
                            <li>Testimonials</li>
                        </Link>

                    </ul>
                </div>
                <Link spy={true} to='Contact' smooth={true}>
                <button className='button n-button'>Contact Us</button>
                </Link>
                
            </div>
        </div>
    );
}

export default NavBar;