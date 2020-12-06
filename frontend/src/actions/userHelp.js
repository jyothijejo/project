import Axios from 'axios';
import {
  USER_Help_FAIL,
  USER_Help_REQUEST,
  USER_Help_SUCCESS,
  USER_SIGNIN_SUCCESS,
} from '../constants/userConstants';


export const help = (name, email,usernumber,sellername,phone) => async (dispatch) => {
  dispatch({ type: USER_Help_REQUEST, payload: { name,email,usernumber, sellername,phone } });
  try {
    const { data } = await Axios.post('/api/users/help', { //create backend API
      name,
      email,
      usernumber,
      sellername,
      phone,
    });
    dispatch({ type: USER_Help_SUCCESS, payload: data });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });//only when login 
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_Help_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};











