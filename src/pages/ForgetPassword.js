import React, { useState } from 'react';
import axios from 'axios';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reset, setReset] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [checkMessage, setCheckMessage] = useState(false);
  const [pinCode, setPinCode] = useState('');

  const handleFind = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/ForgetUsers', {
        email: email,
      });

      setReset(true);
      setErrorMessage('');
    } catch (error) {
      console.error('Error inserting data:', error.response.data.error);
      setErrorMessage(error.response.data.error);
      setReset(false);
    }
  };

  
  const handleResetPassword = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/check-pin', {
        email: email,
        pinCode: pinCode,
      });

      console.log(response.data.message);
      setErrorMessage("")
      setCheckMessage(true)
    } catch (error) {
      console.error('Error resetting password:', error.response.data.error);
      setErrorMessage("incorrect pin code")
    }
  };
  const handleResetPasswordNow = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/reset-password', {
        email: email,
        pinCode: pinCode,
        newPassword: password,
      });
      window.location.href = "http://localhost:3000/";
         
    } catch (error) {
      console.error('Error resetting password:', error.response.data.error);
      setErrorMessage("error resetting password");
    }
  };
  return (
    <div className='w-full h-[80vh] flex items-center justify-center'>
      <div className='w-full max-w-xs'>
        <p>Find your account</p>

        {checkMessage ? 
        
        <>
        
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <p>Please enter your New password.{email}</p>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
              password
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='password'
              type='password'
              placeholder='new password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex items-center justify-between'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='button'
                  onClick={handleResetPasswordNow}
                >
                  Reset Now
                </button>
              </div>
          {errorMessage && <p>{errorMessage}</p>}
        
        </form>

        
        </> :
        
        
        
        <>
        
        <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
          <p>Please enter your email or mobile number to search for your account.</p>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
              Email
            </label>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              id='username'
              type='text'
              placeholder='Username'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {reset ? (
            <>
              <div className='mb-6'>
                <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                  Pin code send to <span className='text-blue-gray-600'>{email}</span>
                </label>
                <input
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='password'
                  type='text'
                  placeholder='PIN code'
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                />
              </div>
              <div className='flex items-center justify-between'>
                <button
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
                  type='button'
                  onClick={handleResetPassword}
                >
                  Reset Password
                </button>
              </div>
            </>
          ) : null}
          {errorMessage && <p>{errorMessage}</p>}
          <div className='flex items-center justify-between'>
           
           {reset ? null: <>
           
            <button
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              type='button'
              onClick={handleFind}
            >
              Find
            </button>
           
           </>}
           
       
          </div>
        </form>
        
        </> }
        
        <p className='text-center text-gray-500 text-xs'>©2020 Acme Corp. All rights reserved.</p>
      </div>
    </div>
  );
};

export default ForgetPassword;
