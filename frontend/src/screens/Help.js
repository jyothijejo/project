import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { help } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function Help(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [usernumber, setUserNumber] = useState('');
  const [sellername, setSellername] = useState('');
  const [phone, setPhone] = useState('');
  
  

  const redirect = props.location.search
    ? props.location.search.split('=')[1]
    : '/';

  const userHelp = useSelector((state) => state.userHelp);
  const { userInfo, loading, error } = userHelp;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

      dispatch(help(name, email,usernumber,sellername,phone));
    
  };
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
    }
  }, [props.history, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Form : </h1>
          <p>please fill the below details,so that we can approch buyer on behalf of you!...</p>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter user name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter  user email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="name">User-Number</label>
          <input
            type="text"
            id="usernumber"
            placeholder="Enter user phone-number"
            required
            onChange={(e) => setUserNumber(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="name">Seller-Name</label>
          <input
            type="text"
            id="sellername"
            placeholder="Enter seller name"
            required
            onChange={(e) => setSellername(e.target.value)}
          ></input>
        </div>

        <div>
          <label htmlFor="name">Seller-Number</label>
          <input
            type="text"
            id="phone"
            placeholder="Enter seller phone-number"
            required
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>


        
        <div>
          <label />
          <button className="primary" type="submit">
            submit
          </button>
        </div>
        <div>
          <label />
          <div>
            Back to page?{' '}
            <Link to="/">Back-to-page</Link>
          </div>
        </div>
      </form>
    </div>
  );
}