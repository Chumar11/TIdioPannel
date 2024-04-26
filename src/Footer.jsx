import React from 'react'
import logo from "./images/Captur1.PNG";
import { FaLinkedinIn, FaStar, FaStarHalf, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
        <div className='About-part'>
            <ul className='f-ul'>
                <li className='f-li'>
                   <ul className='f2-ul'>
                    <div className='f2-text'>TIDIO</div>
                    <li className='f2-li'>About Us</li>
                    <li className='f2-li'>Contact</li>
                    <li className='f2-li'>Partner Programs</li>
                    <li className='f2-li'>Jobs – We're hiring!</li>
                    <li className='f2-li'>Security</li>
                    <li className='f2-li'>Status Page</li>
                   </ul>
                </li>
                <li className='f-li'>
                   <ul className='f2-ul'>
                    <div className='f2-text'>PRODUCT</div>
                    <li className='f2-li'>Pricing</li>
                    <li className='f2-li'>Lyro AI Chatbot</li>
                    <li className='f2-li'>Live Chat</li>
                    <li className='f2-li'>Flows!</li>
                    <li className='f2-li'>Helpdesk</li>
                    <li className='f2-li'>Tidio AI</li>
                    <li className='f2-li'>Tidio+</li>
                    <li className='f2-li'>All features</li>
                    <li className='f2-li'>Product Updates</li>
                   </ul>
                </li>
                <li className='f-li'>
                   <ul className='f2-ul'>
                    <div className='f2-text'>INTEGRATIONS</div>
                    <li className='f2-li'>Shopify</li>
                    <li className='f2-li'>WordPress</li>
                    <li className='f2-li'>All platforms</li>
                    <li className='f2-li'>Messenger</li>
                    <li className='f2-li'>Instagram</li>
                    <li className='f2-li'>WhatsApp</li>
                    <li className='f2-li'>All apps</li>
                   </ul>
                </li>
                <li className='f-li'>
                   <ul className='f2-ul'>
                    <div className='f2-text'>RESOURCES</div>
                    <li className='f2-li'>All Resources</li>
                    <li className='f2-li'>Blog</li>
                    <li className='f2-li'>Case Studies</li>
                    <li className='f2-li'>Help Center</li>
                    <li className='f2-li'>Tidio vs. Gorgias</li>
                    <li className='f2-li'>Tidio vs. Intercom</li>
                    <li className='f2-li'>Tidio vs. LiveChat</li>
                    <li className='f2-li'>Tidio vs. Zendesk</li>
                   </ul>
                </li>
                <li className='f-li'>
                   <ul className='f2-ul'>
                    <div className='f2-text'>HELP CENTER</div>
                    <li className='f2-li'>Installation</li>
                    <li className='f2-li'>Get Started</li>
                    <li className='f2-li'>Integrations</li>
                    <li className='f2-li'>Flows setup</li>
                    <li className='f2-li'>Developers</li>
                   </ul>
                </li>
                <li className='f-li'>
                <div className='btn-div'>
                    <button className='btn-div1'>Contact sales</button>
                    <button className='btn-div2'>Pricing</button>
                  <div className='footer-line'></div>
                  
              <div className="staritems-footer">
                <FaStar className="star1" />
                <FaStar className="star1" />
                <FaStar className="star1" />
                <FaStar className="star1" />
                <FaStar className="star1" />
              </div>
             
            
            <div className='span1'> <img src="https://www.tidio.com/images/footer/rating/shopify_gray.svg" alt="" /><span>4.7 on Shopify</span></div>
<div className='span1'><img src="	https://www.tidio.com/images/footer/rating/G2_gray.svg" alt="" /><span>4.7 on G2</span></div>
<div className='span1'><img src="https://www.tidio.com/images/footer/rating/capterra_gray.svg" alt="" /><span>4.8 on Capterra</span></div>
                </div>
                </li>
            </ul>

        </div>
        <div className='footer-line'></div>
        <div className='footer-logo'>
            <div className='di3'>
                <img src={logo} alt="" />
                <div className='tt'>
                    <h5>Join 300k+ businesses that use Tidio</h5>
                    <p>Improve your business with sales, support, and customer service automation</p>
                </div>
                <div className="but">
                    <button className='di2'>Get Started free</button>
                </div>

            </div>
        </div>
        <div className="ser">
            <div>Available on :</div>
            <ul> <li><img src="https://www.tidio.com/images/footer/platforms/browser.svg" alt="" />Browser</li>
            <li><img src="https://www.tidio.com/images/footer/platforms/android.svg" alt="" />Android</li>
            <li><img src="https://www.tidio.com/images/footer/platforms/mac.svg" alt="" />iOS</li>
            <li><img src="https://www.tidio.com/images/footer/platforms/windows.svg" alt="" />Windows</li>
            <li><img src="https://www.tidio.com/images/footer/platforms/mac.svg" alt="" />Mac</li>
            </ul>
        </div>
        <div className='footer-line'></div>
        <div className='e23'>
            <FaLinkedinIn className='logo1'/>
            <FaYoutube className='logo1'/>
            <FaTwitter className='logo1'/>
            
        </div>
    </footer>
  )
}
