import React from 'react'
import {useNavigate} from 'react-router-dom'
import img from "./netflixImage.png";
import './headerlogin.css'
function Headerlogin() {
  const navigate=useNavigate();
  const signIN=(e)=>
  { 
    e.preventDefault();
    navigate('/login');
  }

  return (
    <>
     <div className='container'>
        <div className="left">
        <img className="logo" alt="logo" src={img}/>
        </div>
        <div className="right">
            <select>
                <option value="English">ENGLISH</option>
                <option value="Hindi">HINDI</option>
                <option value="Sanskrit">SANSKRIT</option>
                <option value="Tamil">TAMIL</option>
            </select>
            <p className='sign-in-btn' onClick={signIN}>SIGN IN</p>
        </div>
      </div>
      
     
    </>
  )
}

export default Headerlogin

