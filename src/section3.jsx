import React from 'react'


import video from "./images/video-more-customers.mp4"
import logo1 from "./images/Capturee3.PNG";
import logo2 from "./images/Capturee4.PNG";
import logo4 from "./images/Capturee2.PNG";import logo3 from "./images/Capturee1.PNG";

export default function Section3() {
  return (
    <section className="sec-2">
    <div className="sec2-div">
      <div className="row-1">
        <div className="colitems1 ">
          <h5>Automation</h5>
          <h1>Win more loyal customers with sales and support automation</h1>
        </div>
        <div className="colitems colitems12">
          <p>
          Proactively engage visitors and move leads through your funnels with automation. Use plug-and-play chatbots to handle missed conversations, offer discounts, recover abandoned carts, recommend products, and more.
          </p>
          <p>
          Choose from 35+ chatbot templates available, or create custom automation workflows with drag and drop simplicity - no coding skills required.
          </p>
          <div className="sec2-btn">
            <button>Discover Chatbots</button>
          </div>
        </div>
      </div>
      <div className="row-2">
        <div className="ro1 row3">
        <video autoPlay  loop >
    <source src={video} type="video/mp4" /></video>
        

        </div>
        <div className="colitems colitems123">
          <p>
          Proactively engage visitors and move leads through your funnels with automation. Use plug-and-play chatbots to handle missed conversations, offer discounts, recover abandoned carts, recommend products, and more.
          </p>
          <p>
          Choose from 35+ chatbot templates available, or create custom automation workflows with drag and drop simplicity - no coding skills required.
          </p>
          <div className="row2div22">
            <div className="div70">
              <h1>
                88%{" "}
                <sup>
                  <img src={logo1} alt="" />
                </sup>{" "}
              </h1>
              <p>Bots helpfulness rate</p>
            </div>
            <div className="line line1"></div>
            <div className="div70 div71">
              <h1>
            27%{" "}
                <sup>
                  <img src={logo2} alt="" />
                </sup>
              </h1>
              <p className="p1">
              Increase in conversion rates
              </p>
            </div>
          </div>
          <div className="sec2-btn">
            <button>Discover Chatbots</button>
          </div>
        </div>

        <div className="row2">
          <div className="row2div2">
            <div className="div70">
              <h1>
                88%{" "}
                <sup>
                  <img src={logo1} alt="" />
                </sup>{" "}
              </h1>
              <p>Bots helpfulness rate</p>
            </div>
            <div className="line line1"></div>
            <div className="div70 div71">
              <h1>
            27%{" "}
                <sup>
                  <img src={logo2} alt="" />
                </sup>
              </h1>
              <p className="p1">
              Increase in conversion rates
              </p>
            </div>
          </div>

          <div className="div-box">
            <p>
            “My main goal was to find an easy-to-teach app that covered all the tasks needed for our customer service. Tidio, from the beginning, was the perfect one.

            </p>
            <p>
            Right now, more than a third of our ecommerce revenue is made thanks to Tidio.”
            </p>
            <div className="image1">
              <img src={logo3} alt="" />
              <img src={logo4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
