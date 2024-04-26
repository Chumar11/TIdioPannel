
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaStar} from "react-icons/fa";
import React, { useState ,useEffect} from "react";
import logo2 from "./images/Capture2.PNG";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Section from "./Section";
import Swction1 from "./Swction1";
import Section3 from "./section3";
import Section4 from "./Section4";
import Slider from "./slider";
import Poster from "./Poster";
import Button from "./Button";
import Sidebar from "./Sidebar";
import Mute from "./Mute";
import Header from './Header';

 function Main() {
  let[sh,setsh]=useState(false);
  let[color,setcolor]=useState(false);
 
  return (
    <>
      <Header color={color} setcolor={setcolor}/>
      <div className="main" style={{ backgroundImage: `url(${logo2})` }}>
        <section className="section-1">
          <div className="hero">
            <div className="reviews">
              <div className="staritems">
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
                <FaStar className="star" />
              </div>
              <h4 className="hh">
                4.7 (1716+ reviews){" "}
                <span>
                  <FontAwesomeIcon icon={faCalendar} />
                </span>
              </h4>
            </div>
            <div className="text1">
              <h1>Accelerate your growth with AI customer service</h1>
              <p>
                Answer up to 70% of customer inquiries without human
                intervention. Convert more leads, provide stellar support, and
                supercharge your revenue using our game-changing AI-driven
                customer service solution.
              </p>
            </div>
            <div className="btnn">
              <button className="bt1">Get Started free</button>
              <button className="bt2">Get a demo</button>
            </div>
          </div>
          <div className="credit">No credit card required</div>
        </section>

        <div className="main-image">
          <img
            src="https://www.tidio.com/_next/image/?url=%2Fimages%2Fcomponents%2Ffull-width-image%2Fpanel-desktop.png&w=1920&q=75"
            alt=""
          />
        </div>

        <section className="sec2">
          <h4 className="sec2h">Trusted by 300,000+ businesses:</h4>
          <div className="logodiv">
            <div className="divimg">
              <img
                src="https://www.tidio.com/images/components/partners-logo/glovo.svg"
                alt=""
              />
            </div>

            <div className="divimg">
              <img
                src="https://www.tidio.com/images/components/partners-logo/praktiker.svg"
                alt=""
              />
            </div>
            <div className="divimg">
              <img
                src="https://www.tidio.com/images/components/partners-logo/procosmet.svg"
                alt=""
              />
            </div>
            <div className="divimg">
              <img
                src="https://www.tidio.com/images/components/partners-logo/jaguar.svg"
                alt=""
              />
            </div>
          </div>
      <Button  sh={sh} setsh={setsh}/>
   <Mute sh={sh} />
        </section>
      </div>
      <Section/>
     <Swction1/>
     <Section3/>
     <Section4/>
    <Slider/>
     <Poster/>
 
    </>
  );
}
export default Main;
