import React,{useEffect} from "react";
import Product from "../components/Product";
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Banner from '../images/amazon.jpg';
import Add from '../images/amazon1.jpg';
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


    <div className='ad-container'>
    <img className='ad_image' src={Add} alt='amazon ad'/>
    </div>
  </div>
   
  );

  
}
