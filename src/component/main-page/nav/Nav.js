import React from 'react'
import './nav.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoIosNotificationsOutline} from 'react-icons/io'
import {FaUserCircle} from 'react-icons/fa'
import {useState,useEffect} from 'react'

function Nav() {
  const[show,setShow]=useState(false);

  const eventHandler=()=>
  {
    //console.log(window.scrollY);
    if(window.scrollY>10)
    {
      setShow(true)
    }
    else
    {
      setShow(false)
    }
    console.log(show);
  };

  useEffect(()=>{
    window.addEventListener("scroll",eventHandler)

    return()=>
    {
      window.removeEventListener("scroll",eventHandler)
    }
  },[])

  return (
    <>
      <nav style={{backgroundColor:show?'rgb(20,20,20':'transparent'}}>
        <section>
            <div className="nav_left">
             <img className="nav_logo" alt="logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>

            <div className="nav_link">
                <a href='./'>HOME</a> 
                <a href='./'>TV SHOWS</a>
                <a href='./'>MOVIES</a>
                <a href='./'>POPULAR</a>
                <a href='./'>MY LIST</a>
            </div>

            </div>
           <div className="nav_right">
           <AiOutlineSearch className='navIcons'/>
           <p className='children'>CHILDREN</p>
           <IoIosNotificationsOutline className='navIcons' />
           <FaUserCircle className='navIcons' />
           </div>
        </section>
      </nav>
    </>
  )
}

export default Nav
