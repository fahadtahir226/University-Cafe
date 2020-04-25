import React from 'react';
import '../App.css';
import { login } from './auth'
class Login extends React.Component{
  render(){

    return (
        <div className="login bg-lightWhite h-full lg:h-screen">
        <svg viewBox="0 0 1656 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M455.351 149.061C1145.09 -27.4895 1536 66 1656 127.5L1656 0.0869791L0.49982 0.0869407L0.499832 204C0.499832 204 222.152 208.752 455.351 149.061Z" fill="#1A3F93">
        </path>
        </svg>
        <div className="h-screen relative lg:absolute w-full top-0">
          <div className="relative lg:top-0 lg:right-0 p-12 lg:p-2 w-full lg:w-1/2 mx-auto h-screen flex flex-col justify-center">
          <div className="py-12 text-center rounded-lg">
            <img alt="Logo" src="./img/logo.svg" className="mx-auto w-81" />
          <form className="w-full lg:w-2/4 mx-auto">
            <div className="mb-8 relative">
              <input id="login-email" type="email" placeholder="Email" className="bg-lightWhite focus:outline-none p-2 border rounded focus:border-mainBlue focus:placeholder-mainBlue w-full focus:text-mainBlue transition border-gray-400 placeholder-grey-400" />
            </div>
            <div className="mb-8 relative">
              <input id="login-pass" type="password" placeholder="Password" className="bg-lightWhite focus:outline-none p-2 rounded border focus:border-mainBlue focus:text-mainBlue focus:placeholder-mainBlue w-full transition border-gray-400 placeholder-grey-400 text-mainBlue" />
            </div>
            <div className="relative">
              <button type="submit" value="submit" onClick={login} className="btn-submit bg-mainBlue text-white py-2 px-12 rounded focus:outline-none transition">Login</button>
            </div>
          </form>
          </div>
          </div>
        </div>
        </div>
    ) 
  }
}



export default Login;
