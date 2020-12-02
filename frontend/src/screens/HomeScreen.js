import React,{useEffect} from "react";
import Product from "../components/Product";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Banner from '../images/amazon.jpg';
import Add from '../images/amazon1.jpg';


import Item1 from '../images/dish.jpg';
import Item2 from '../images/bed.jpg';
import Item3 from '../images/wall.jpg';
import Item4 from '../images/fridge.jpg';
import Item5 from '../images/washing.jpg';
import Item6 from '../images/tv.jpg';
import Item7 from '../images/shelf.jpg';
import Item8 from '../images/grey.jpg';



//import Header from './Header';



export default function HomeScreen() {

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

 
    useEffect(() => {
      dispatch(listProducts());
  }, [dispatch]);
   

  return (
    <div>


        <img className='home_image' src={Banner} alt='amazon ad'/>

      {loading ? (
      <LoadingBox></LoadingBox>
    ) : error ? (
      <MessageBox variant="danger">{error}</MessageBox>
    ) : (
      <div className="row center">
      
        {products.map((product) => (
          
          <Product key={product._id} product={product}></Product>
        ))}
      </div>  
    )}

    <section className='section-meals'> 
       <ul className='meals-showcase'>
         <li>
           <figure className='meal-photo'>
           <img className='menu' src={Item1} alt='amazon ad'/>
           </figure>
         </li>
         <li>
           <figure className='meal-photo'>
           <img className='menu' src={Item2} alt='amazon ad'/>
           </figure>
         </li>
         <li>
           <figure className='meal-photo'>
           <img className='menu' src={Item3} alt='amazon ad'/>
           </figure>
         </li>
         <li>
           <figure className='meal-photo'>
           <img className='menu' src={Item4} alt='amazon ad'/>
           </figure>
         </li>
       </ul>
       <ul className='meals-showcase'>
         <li>
           <figure className='meal-photo'>
           <img className='menu' src={Item5} alt='amazon ad'/>
           </figure>
         </li>
         <li>
           <figure className='meal-photo'>
           <img className='menu' src={Item6} alt='amazon ad'/>
           </figure>
         </li>
         <li>
           <figure className='meal-photo'>
           <img className='menu' src={Item7} alt='amazon ad'/>
           </figure>
         </li>
         <li>
           <figure className='meal-photo'>
           <img className='menu' src={Item8} alt='amazon ad'/>
           </figure>
         </li>
       </ul>

    </section>



    
    {/*<div className='ad-container'>
    <img className='ad_image' src={Add} alt='amazon ad'/>
      </div>*/}
    
    
    </div>
  
   
  );

  
}
