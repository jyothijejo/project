import React from 'react';
import { BrowserRouter,  Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import RegisterScreen from './screens/RegisterScreen';
import Header from './screens/Header';
import CompanyPage from './screens/CompanyPage';
import Help from './screens/Help';
import Submitadd from './screens/submitadd';



function App() {

  return (
    <BrowserRouter>
      <div className="grid-container">
        <switch>
    
          <header> 
            <Header />
          </header>
         

        <Route path='/posting'  component={Submitadd}></Route>
        <Route path='/help' component={Help}></Route>
        <Route path='/company' component={CompanyPage}></Route>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
        <Route path="/cart/:id?" component={CartScreen}></Route>   
        <Route path="/signin" component={SigninScreen} ></Route>
        <Route path="/register" component={RegisterScreen} ></Route>
        
      
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;