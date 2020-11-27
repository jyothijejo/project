import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import logo from '../images/logo1.png';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


function NavBar() {
    const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;



    return (
        <nav className='header'>
        

            {/* logo on the left*/}
            <Link to='/'>
           <img  className='header_logo' src={logo} alt='' />
           </Link>


            {/*search box*/}
            <div className='header_search'>

            <input type='text' className='header_searchInput' />
            <SearchIcon className='header_searchIcon' />
            </div>


            {/* 3 links*/}
            <div className='header_nav'>

                {/* 1st link */}
                <Link to='/signin' className='header_link'>
                   <div className='header_option'>
                      <span className='header_optionLineOne'>Hello </span>
                      <span className='header_optionLineTwo'>Sign In</span>
                   </div> 
                </Link>

                

                {/* 3nd link */}
                <Link to='/' className='header_link'>
                   <div className='header_option'>
                      <span className='header_optionLineOne'>... </span>
                      <span  className='header_optionLineTwo'>...</span>
                   </div> 
                </Link>

                {/* 0nd link */}
                <Link to='/company' className='header_link'>
                   <div className='header_option'>
                      <span className='header_optionLineOne'>Need Help </span>
                      <span  className='header_optionLineTwo'>From Us</span>
                   </div> 
                </Link>

                

                {/* 4nd link */}
                <Link to ='/cart' className='header_link'>
                    <div className='header_optionBasket'>
                        {/*shopping basket icon*/}
                        <ShoppingCartIcon className='icon'/>
                        {/*number of item in the basket*/}
                        {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
                    </div>  
                </Link>
            </div>    
        </nav>
    )
}

export default NavBar;
