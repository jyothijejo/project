import React from 'react'
import {Link} from 'react-router-dom'
import './Company.css';


function CompanyPage() {
    return (
        <div>
            <div className='company'>
                <div className='company-text'>
                <h1> We are here to provide help for you ...</h1>
                <h1 >Thanks for keeping trust on XCHANGE!..</h1>
                <p> To know more about the details of this feature/option,</p>
                 <p>kindly please read the below information ...</p>
                 <Link className='link-button' to='/help'>Proceed to further..</Link>
                <Link className='link-button' to='/'>Go to Home Page</Link>
                </div>
                </div>
            <section className='features'>
                <div className='row'>
                    <h1 className='company-header'> Keep Trust On Us - We Are Here - Stay Home And Chill..</h1>
                    
                    
                </div>
                <div className='row'>
                    <div className='col span-1-of-4'>
                        <h3>Middle-Men</h3>
                        <p>the company will act as middle-men
                            between buyer and selller.
                            the company will make deal  
                            on behalf of the buyer.
                            so that the buyer can relax.
                            the company will take care of the buyer work
                            </p>

                    </div>
                    <div className='col span-1-of-4'>
                        <h3>Responsibility</h3>
                        <p>the company will take responsibility on behalf of buyer
                            and will take all neceesary action  for finishing the deal.
                            so that the buyer can be safe from frauds and quality of the products.

                        </p>

                    </div>
                    <div className='col span-1-of-4'>
                        <h3>Quality-Check</h3>
                        <p>we also provide Quality-check service 
                            and will give quality-check certificate 
                            for the product.so that in future the
                            buyer can ask the company if something went
                             wrong in quality of the product</p>

                    </div>
                    <div className='col span-1-of-4'>
                        <h3>Delivery-Services</h3>
                        <p>we also provide delivery services.
                            so if the buyer want delivery service, we  provide delivery service.
                            if not then buyer can collect item from ours nearby outlet.
                
                            </p>

                    </div>
                </div>
                <h1 className='charges'>Additional charges need to pay..</h1>
            </section>

            <div> 
            
                </div>
            



        </div>
         
    )
}

export default CompanyPage;
