import React from 'react'
import logoo1 from "./images/Capture8.PNG";
import logoo2 from "./images/Capture9.PNG";
import logoo3 from "./images/Capture10.PNG";
import logoo4 from "./images/Capture11.PNG";
import video from "./images/video-support2.mp4"

export default function Swction1() {
  return (
    <section className="sec-3">
    <div className="sec3-div">
      <div className="row-3">
        <div className="colitems2">
          <h5>Live chat & helpdesk</h5>
          <h1>
            Provide excellent support with live chat and helpdesk tools
          </h1>
        </div>
        <div className="colitems3">
          <p>
            Talk to visitors in real-time with live chat. Track users across
            your website, see what pages they’re browsing, and boost sales
            with personalized discounts.
          </p>
          <p>
            Handle messages from all your communication channels in a single
            dashboard. Decrease your response times with ticket filtering
            and prioritization. Keep track of how your agents perform with
            actionable analytics.
          </p>
          <div className="sec2-btn">
            <button>Discover Lyro AI Agent</button>
            <button className="b">Discover Helpdesk</button>
          </div>
        </div>
      </div>
      <div className="row-4">
        <div className="row3">
        <video  autoPlay  loop >
    <source src={video} type="video/mp4" /></video>
        </div>
        <div className="colitems13">
          <p>
            Talk to visitors in real-time with live chat. Track users across
            your website, see what pages they’re browsing, and boost sales
            with personalized discounts.
          </p>
          <p>
            Handle messages from all your communication channels in a single
            dashboard. Decrease your response times with ticket filtering
            and prioritization. Keep track of how your agents perform with
            actionable analytics.
          </p>
          <div className="row5">
          <div className="row4div2">
            <div className="div72">
              <h1>
                59%{" "}
                <sup>
                  <img src={logoo1} alt="" />
                </sup>{" "}
              </h1>
              <p>Decrease in waiting time</p>
            </div>
            <div className="linee"></div>
            <div className=" div72 div73 ">
              <h1>
                29%{" "}
                <sup>
                  <img src={logoo2} alt="" />
                </sup>
              </h1>
              <p className="p11">
              Decrease in average response times
              </p>
            </div>
          </div>

          <div className="div-box1">
            <p>
            “After transitioning over to Tidio, we saw a significant decrease in our average response times.
            </p>
            <p>
            Our customer satisfaction saw a healthy 16% increase – this is despite us having some of our busiest months this year.”
            </p>
            <div className="image2">
              <img src={logoo3} alt="" />
              <img src={logoo4} alt="" />
            </div>
          </div>
        </div>
          <div className="sec2-btn1">
            <button>Discover Lyro AI Agent</button>
            <button className="b">Discover Helpdesk</button>
          </div>
        </div>

        <div className="row4">
          <div className="row4div2">
            <div className="div72">
              <h1>
                59%{" "}
                <sup>
                  <img src={logoo1} alt="" />
                </sup>{" "}
              </h1>
              <p>Decrease in waiting time</p>
            </div>
            <div className="linee"></div>
            <div className=" div72 div73 ">
              <h1>
                29%{" "}
                <sup>
                  <img src={logoo2} alt="" />
                </sup>
              </h1>
              <p className="p11">
              Decrease in average response times
              </p>
            </div>
          </div>

          <div className="div-box1">
            <p>
            “After transitioning over to Tidio, we saw a significant decrease in our average response times.
            </p>
            <p>
            Our customer satisfaction saw a healthy 16% increase – this is despite us having some of our busiest months this year.”
            </p>
            <div className="image2">
              <img src={logoo3} alt="" />
              <img src={logoo4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
