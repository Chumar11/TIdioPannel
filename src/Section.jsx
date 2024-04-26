import React from 'react'
import logo5 from "./images/Capture3.PNG";
import logo7 from "./images/Capture4.PNG";
import logo6 from "./images/Capture5.PNG";
import logo8 from "./images/Capture6.PNG";
import logo9 from "./images/Capture7.PNG";

export default function Section() {
  return (
 <>
   <section className="sec-2">
        <div className="sec2-div">
          <div className="row-1">
            <div className="colitems1">
              <h5>Lyro AI Agent</h5>
              <h1>The AI support agent for growing businesses</h1>
            </div>
            <div className="colitems">
              <p>
                Lyro is a conversational AI that talks to your audience. Solve
                up to 70% of customer problems - on any live channel, in 7
                languages - without extra hiring. Lyro AI Agent answers
                customers in 6 seconds using only your data and human-like
                language.
              </p>
              <p>
                Lyro AI also performs tasks, freeing your support agents to
                focus on high-value requests. Scale your operations with
                predictable customer service expenses - starting at
                $0.5/conversation.
              </p>
              <div className="sec2-btn">
                <button>Discover Lyro AI Agent</button>
              </div>
            </div>
          </div>
          <div className="row-2">
            <div className="row1">
              <img src={logo5} alt="" />
            </div>
            <div className="colitemss">
              <p>
                Lyro is a conversational AI that talks to your audience. Solve
                up to 70% of customer problems - on any live channel, in 7
                languages - without extra hiring. Lyro AI Agent answers
                customers in 6 seconds using only your data and human-like
                language.
              </p>
              <p>
                Lyro AI also performs tasks, freeing your support agents to
                focus on high-value requests. Scale your operations with
                predictable customer service expenses - starting at
                $0.5/conversation.
              </p>
              <div className="row2div22">
                <div className="div70">
                  <h1>
                    70%{" "}
                    <sup>
                      <img src={logo7} alt="" />
                    </sup>{" "}
                  </h1>
                  <p>Lyro resolution rate</p>
                </div>
                <div className="line"></div>
                <div className="div70 div71">
                  <h1>
                    76%{" "}
                    <sup>
                      <img src={logo6} alt="" />
                    </sup>
                  </h1>
                  <p className="p1">
                    of visitors don’t request transfer to a human agent
                  </p>
                </div>
              </div>

              <div className="sec2-btn">
                <button>Discover Lyro AI Agent</button>
              </div>
            </div>

            <div className="row2">
              <div className="row2div2">
                <div className="div70">
                  <h1>
                    70%{" "}
                    <sup>
                      <img src={logo7} alt="" />
                    </sup>{" "}
                  </h1>
                  <p>Lyro resolution rate</p>
                </div>
                <div className="line"></div>
                <div className="div70 div71">
                  <h1>
                    76%{" "}
                    <sup>
                      <img src={logo6} alt="" />
                    </sup>
                  </h1>
                  <p className="p1">
                    of visitors don’t request transfer to a human agent
                  </p>
                </div>
              </div>

              <div className="div-box">
                <p>
                  “I’m so much happier because we can trust that the customer
                  service is being taken care of by Lyro. The AI gives customers
                  24-hour support and helps visitors go through the website.
                </p>
                <p>
                  We’ve had a big revenue growth and Tidio is a large part of
                  why we’re growing. It’s a massive part of our customer
                  experience.”
                </p>
                <div className="image1">
                  <img src={logo8} alt="" />
                  <img src={logo9} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


 </>
  )
}
