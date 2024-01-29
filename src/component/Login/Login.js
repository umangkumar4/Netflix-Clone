import React from 'react'
import './login.css'
import { useNavigate,Link,useLocation} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {initializeApp} from 'firebase/app'
import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import { firebaseConfig } from '../firebaseConfigure/FirebaseConfig'

function Login({page}){
  const location=useLocation();
  const app=initializeApp(firebaseConfig)
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')
  const[isUserExist,setIsUserExist]=useState(false)
  const[alreadyUser,setAlreadyUser]=useState(false)
  const changeEmail=(e)=>
  {
    setEmail(e.target.value)
  }
  const changePassword=(e)=>
  {
    setPassword(e.target.value)
  }


  const navigate=useNavigate()
    const auth=getAuth()
    const onSignInOrSignUpHandler=(e)=>
    { 
        e.preventDefault();
        if(page)
        {signInWithEmailAndPassword(auth,email,password)
        .then(auth=>{
            console.log(auth)
            if(auth){
            navigate('/content')
            }
        })
        .catch(error=>setIsUserExist(true))}
        else{
            createUserWithEmailAndPassword(auth,email,password)
            .then(
                auth=>{
                    alert('Registared Successfully!!')
                    if(auth){navigate('/login')}
                }
            )
            .catch(error=>{setAlreadyUser(true)})

        }
    }
    useEffect(()=>{
        setAlreadyUser(false)  
        setIsUserExist(false) 
                },[location])

    return(
        <div className='full-widths'>
        <Link to='/'>
        <img className="logos" alt="logo" src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
        </Link>
        <div className='login-container'>
            <h2 className='sign-text'>{page?"Sign In":"Register"}</h2>
            <div className='input-pass'>
                <input className='email common' type="email" required value={email} onChange={changeEmail} placeholder='Email or phone number' />
                <input className='pass common' type="password" required minLength='6' value={password} onChange={changePassword} placeholder="Password" />
                <input type="button" value={page?"Sign In":"Sign Up"} onClick={onSignInOrSignUpHandler} className='signInBtn common' />
            </div>
          { page &&
            <div className='remember-help'>
                <span><input type="checkbox"></input> Remember me</span><span><Link to='#'className='b' >Need help?</Link></span>
            </div>
            }
           { isUserExist?<p className="text-error">Incorrect email or password.</p>:""}
           { alreadyUser && <p className="text-error">Email already exist.</p>}
           
            <div  className='new-to-netflix'><p>{page?"New to Netflix? ":"Existing User?  "}  <Link to={page?'/':'/login'} className='c' >{page?"Sign Up":"Sign In"}</Link></p></div>
            <div className='learn-mores'><p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link to="#" className='d' >Learn more.</Link></p></div>
        </div>
        </div> 

    )
}

export default Login
