import './Header.scss';
import telusLogo from '../../assets/images/Telus-Logo.svg.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={telusLogo} alt='Telus logo' className='logo__img' />
            </div>

            <nav className='navbar'>
                <Link to={'/streaming'} className='navbar__link navbar__link--streaming'>
                    <p className='navbar__text'>Streaming</p>
                </Link>

                <Link to={'/tv'} className='navbar__link navbar__link--tv'>
                    <p className='navbar__text'>TV</p>
                </Link>

                <Link to={'/theme-packs'} className='navbar__link navbar__link--theme-packs'>
                    <p className='navbar__text'>Theme Packs</p>
                </Link>
            </nav>
        </header>
    );
}

export default Header;
