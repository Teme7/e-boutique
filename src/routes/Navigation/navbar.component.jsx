import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLcogo } from '../../assets/crown.svg';
import './navbar.styles.scss';

const Navbar = () => {
  return (
    <Fragment>
      <div className='navbar'>
        <Link className='logo-container' to='/'>
          <CrwnLcogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='cart'>
            CART
          </Link>
          <Link className='nav-link' to='sign-in'>
            Sign In
          </Link>
          <div>
            <Link to='about-us'>
              AboutUs
            </Link>
          </div>
          
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navbar;