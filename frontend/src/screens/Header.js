import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {Link} from 'react-router-dom';

import { signout } from '../actions/userActions';
import logo from '../images/logo1.png';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HelpIcon from '@material-ui/icons/Help';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function NavBar() {
    const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };



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

                {userInfo ? (
              <div className="dropdown">
                <Link to="#">
               

                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                  < AccountCircleIcon />
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
                <Link to='/signin' className='header_link'>
                   <div className='header_option'>
                      
                      <span className='header_optionLineOne'> Hello</span>
                      <span className='header_optionLineTwo'> Sign In</span>
                     
                   </div>   
                </Link>
                 )}

                

                {/* 3nd link */}
                <Link to='/posting' className='header_link'>
                   <div className='header_option'>
                      <AddBoxIcon/>
                      <span  className='header_optionLineTwo'> Add Product</span>
                   </div> 
                </Link>

                {/* 0nd link */}
                
                <Link to='/company' className='header_link'>
                  
              
                   <div className='header_option'>
                   <HelpIcon />
                     
                      <span  className='header_optionLineTwo'>Need Help</span>
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
