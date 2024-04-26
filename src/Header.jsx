import React, { useState } from "react";
import logo from "./images/Capture.PNG";
import "animate.css";

import logo1 from "./images/Capture1.PNG";
function Header({ color, setcolor }) {
  let [show, setshow] = useState(false);
  let [sho, setsho] = useState(false);
  let [sh, setsh] = useState(false);
  let [shownav, setshownav] = useState(false);

  return (
    <>
      <header className={`header${color ? "bg" : ""}`}>
        <div className={`logoo1 ${shownav ? " logo " : "activelogo"}`}>
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>
        <div className={`wrapper ${shownav ? " activenav " : "wrapper-1"}`}>
          <div className={`logo ${shownav ? " logo " : "activelogo"}`}>
            <a href="#">
              <img src={logo} alt="Logo" />
            </a>
          </div>

          <nav className="navbar">
            <div>
              <div
                className="navitems new-navbar"
                onMouseOver={() => {
                  setshow(true);
                  let blb = document.getElementById("ee");
                  var newbtn = document.getElementById("new-ul");
                  if (show) {
                    blb.src =
                      "https://www.tidio.com/images/icons/icon-chevron-down-white.svg";
                    blb.style.transform = "rotate(180deg)";
                    blb.style.width = "24px";
                    blb.style.height = "24px";
                    newbtn.style.animation = " animate__bounceInUp infinite";
                  }
                }}
                onMouseOut={() => {
                  setshow(false);
                  let bl = document.getElementById("ee");
                  bl.src =
                    "https://www.tidio.com/images/icons/icon-chevron-down-white.svg";
                  bl.style.transform = "rotate(0deg)";
                }}
              >
                Product{" "}
                <span>
                  <img
                    id="ee"
                    src="https://www.tidio.com/images/icons/icon-chevron-down-white.svg"
                    alt="Dropdown Icon"
                  />
                </span>
              </div>
            </div>

            <div className="navitems">Pricing</div>
            <div>
              <div
                className="navitems"
                onMouseOver={() => {
                  setsho(true);
                  let blb = document.getElementById("tt");
                  if (sho) {
                    blb.src =
                      "https://www.tidio.com/images/icons/icon-chevron-down-white.svg";
                    blb.style.transform = "rotate(180deg)";
                    blb.style.width = "24px";
                    blb.style.height = "24px";
                  }
                }}
                onMouseOut={() => {
                  setsho(false);
                  let bl = document.getElementById("tt");
                  bl.src =
                    "https://www.tidio.com/images/icons/icon-chevron-down-white.svg";
                  bl.style.transform = "rotate(0deg)";
                }}
              >
                Resources{" "}
                <span>
                  <img
                    id="tt"
                    src="https://www.tidio.com/images/icons/icon-chevron-down-white.svg"
                    alt="Dropdown Icon"
                  />
                </span>
              </div>
              <div></div>
            </div>
            <div>
              <div
                className="navitems"
                onMouseOver={() => {
                  setsh(true);
                  let blb = document.getElementById("rr");
                  if (sh) {
                    blb.src =
                      "https://www.tidio.com/images/icons/icon-chevron-down-white.svg";
                    blb.style.transform = "rotate(180deg)";
                    blb.style.width = "24px";
                    blb.style.height = "24px";
                  }
                }}
                onMouseOut={() => {
                  setsh(false);

                  let bl = document.getElementById("rr");
                  bl.src =
                    "https://www.tidio.com/images/icons/icon-chevron-down-white.svg";
                  bl.style.transform = "rotate(0deg)";
                }}
              >
                Partners
                <span>
                  <img
                    id="rr"
                    src="https://www.tidio.com/images/icons/icon-chevron-down-white.svg"
                    alt="Dropdown Icon"
                  />
                </span>
              </div>
              <div></div>
            </div>
          </nav>

          <div className="btn">
            <button className="btt">Get Started free</button>
            <button className="bt">Get a demo</button>
          </div>
        </div>
        <button className="three-lines" onClick={() => setshownav(!shownav)}>
          {shownav ? (
            <span className="color-1">&times;</span>
          ) : (
            <span>&#9776;</span>
          )}
        </button>

        <div
          style={{ transition: "all 0.7s ease" }}
          className={`div2 ${show ? "show" : "hide"}`}
          onMouseOver={() => setshow(true)}
          onMouseOut={() => setshow(false)}
        >
          <div className="div3">
            <ul className="ul1 " id="new-ul">
              <li className="li1">
                <ul className="ul2">
                  <li>
                    <div className="divh">OFFER GREAT CUSTOMER SERVICE</div>
                    <ul className="ul3">
                      <li>Live Chat</li>
                      <li>Helpdesk</li>
                      <li>Multichannel</li>
                      <li>Analytic</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <div class="vertical-line"></div>
              <li className="li1">
                <ul className="ul2">
                  <li>
                    <div className="divh">GROW SALES & AUTOMATE SUPPORT</div>
                    <ul className="ul3">
                      <li>Chatbots</li>
                      <li>Visitors List live preveiw</li>
                      <li>Email campaigns</li>
                      <li>Tido+</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <div class="vertical-line"></div>
              <li className="li1">
                <ul className="ul2">
                  <li>
                    <div className="divh">BE MORE EFFECTIVE WITH AI</div>
                    <ul className="ul3">
                      <li>Lyro AI</li>
                      <li>Reply Assistant</li>
                      <li className="dis">
                        {" "}
                        <span>Discover Tidio AI</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <div class="vertical-line"></div>
              <li className="li1">
                <ul className="ul2">
                  <li>
                    <div className="divh">INTEGRATIONS</div>
                    <ul className="ul3">
                      <li>Shopify</li>
                      <li>WordPress</li>
                      <li>All paltforms</li>
                      <li>All apps</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="div4">
              <div className="div4items">
                <span>See all features</span>
                <span>Watch Demo</span>
              </div>
              <div className="div4items">
                <span>Contact Sales</span>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ transition: "all 0.7s ease !important" }}
          className={`div8 ${sho ? "show" : "hide"}`}
          onMouseOver={() => setsho(true)}
          onMouseOut={() => setsho(false)}
        >
          <div className="div6">
            <ul className="ul7">
              <li className="li1">
                <ul className="ul2">
                  <li>
                    <div className="divh">LEARN</div>
                    <ul className="ul3">
                      <li>Blog</li>
                      <li>Academy</li>
                      <li>Playbook Library</li>
                      <li>Customer Service</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <div class="vertical-line"></div>
              <li className="li1">
                <ul className="ul2">
                  <li>
                    <div className="divh">COMPARE TIDIO</div>
                    <ul className="ul3">
                      <li>vs.Gorgias</li>
                      <li>vs.LiveChat</li>
                      <li>vs.Intercom</li>
                      <li>vs.Zendesk</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <div class="vertical-line"></div>
              <li className="li1">
                <ul className="ul2">
                  <li>
                    <div className="divh">HELP CENTER</div>
                    <ul className="ul3">
                      <li>Installation</li>
                      <li>Chatbots 101</li>
                      <li className="dis">
                        {" "}
                        <span>See all articals</span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <div class="vertical-line"></div>
              <li className="li2">
                <ul className="ul4">
                  <li>
                    {" "}
                    <img
                      className="liimage"
                      src="https://www.tidio.com/_next/image/?url=%2Fimages%2Fnav%2Facademy.png&w=1920&q=75"
                      alt=""
                    />
                  </li>

                  <li className="dis">
                    {" "}
                    <span>Join Tido Accadmy </span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{ transition: "all 0.7s ease !important" }}
          className={`part ${sh ? "show" : "hide"}`}
          onMouseOver={() => setsh(true)}
          onMouseOut={() => setsh(false)}
        >
          <div className="part1">
            <ul className="ul">
              <li className="li">
                <div>LET'S TALK</div>
              </li>
              <li className="li">
                <ul className="ull">
                  <li>Partner Programs</li>
                  <li>Find a trusted agency</li>
                  <li>Partner Portal</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
