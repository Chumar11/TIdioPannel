import React, { useState } from 'react'
import logo2 from "./images/Capture56.PNG";
import {  FaChevronDown, FaClock, FaEllipsisV } from 'react-icons/fa'
import logo1 from "./images/Capture234.PNG";
import logo3 from "./images/Capture20.PNG";
import Form from './Form';
export default function Sidebar({show,setshow,setsh,sh}) {
  return (
    
    
    <div className={`sidebar ${show ? "show-side" : "hide-side"}`}>
        <div className='e41'>

        <div className='e2'> 

        <div className='slider-items'>
            <div className='slider-items1'>

            <img src={logo1} alt="" />
            <h1>Hi there!<span><img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png" alt="" /></span></h1>
        <div className='icons'> 

           <FaEllipsisV className='icon'   onClick={()=>setsh(!sh)}/>
            <FaChevronDown className='icon1' onClick={()=>setshow(!show)}/>
        </div>

            </div>
        </div>
        <div className='slider-e23'> 
            <div className='text-e23'> 
                <h4>We are offline right now, we will get back to you via e-mail:</h4>
            </div>
        </div>
        </div>

        <div  className={`drop ${show ?  "show-side":"hide-side"}`}>
        <button  className='e24'>
            <img  src={logo2} alt="" />
        </button>
            </div>
        </div>
    
            <Form sh={sh}/>
            <div className='power'>
                <p>POWERED BY </p>
                <span><img src={logo3} alt="" /></span>
                </div>
    </div>
 
  )
}
