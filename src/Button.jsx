import React, { useState } from 'react'
import { FaAnchor, FaFacebookMessenger, FaLocationArrow, FaStar} from "react-icons/fa";
import logo from "./images/mesage.PNG";
import logo1 from "./images/Capture123.PNG";
import logo2 from "./images/Capture56.PNG";
import Slider from './slider';
import Sidebar from './Sidebar';
export default function Button({setsh,sh}) {
    let[show,setshow]=useState(false);
let [change,setchange]=useState(false);
    let CHnagebutton =()=>{
     setchange(true);

    }
    let reverse=()=>{
        setchange(false);
    }
    let chnageitems=()=>{
        let btn =document.getElementById('btn');
      
  setshow(true);
  
    }
  return (
    <>
    <div  className={`drop-button ${show ?  "hide-side":"show-side"}`}>
        <button onClick={chnageitems} className={`e23 ${change?'e22':''}`} onMouseOver={CHnagebutton} onMouseOut={reverse}>
            <img id='img' src={change?logo1:logo} alt="" />
        </button>
            </div>
            <Sidebar sh={sh} setsh={setsh} show={show} setshow={setshow}/>
    </>
  )
}















