import React from 'react'
import {  FaChevronDown, FaClock, FaEllipsisV, FaFacebookMessenger, FaPhone } from 'react-icons/fa'
export default function Form() {
  return (
<div className='er2'>
<div className='pe-mess'>
        <h5><span><FaClock className='icon2'/></span>Perivious messgaes</h5>
        
       </div>
       <form >
        <div className='e12'><h5>Get a Free Demo of Tidio's AI Customer Service Platform</h5></div>
        <input type="text"  placeholder='Name'/>
        <input type="email"  placeholder='Business email'/>
        <input type="text"  placeholder='Website URL'/>
        <input type="text"  placeholder='Monthly website traffic'/>
        <input type="text"  placeholder='Number of CS agents'/>
        <div className='checkbox'>
            <input type="checkbox" />
            <p>By checking this box, you agree to receive marketing communications from Tidio. We follow our Privacy Policy. Opt out anytime.</p>
        </div>
        <button className='button1'>Submit</button>

    </form>
    <div className='w23'>
        <div className='w234'>
            <p>Hi! <span><img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png" alt="" /></span>  What brings you here today? We'll be happy to assist you!</p>
        </div>
        <div className='w12'><FaPhone className='icon23' /><h5>Contact Sales</h5></div>
        <div className='line12'></div>
        <div className='w12'><FaFacebookMessenger className='icon34'/><h5>Contact Support</h5></div>
    </div>
    <div className='w23'>
        <div className='w234'>
            <p>Hi! <span><img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png" alt="" /></span>  What brings you here today? We'll be happy to assist you!</p>
        </div>
        <div className='w12'><FaPhone className='icon23' /><h5>Contact Sales</h5></div>
        <div className='line12'></div>
        <div className='w12'><FaFacebookMessenger className='icon34'/><h5>Contact Support</h5></div>
    </div>
    <div className='w23'>
        <div className='w234'>
            <p>Hi! <span><img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png" alt="" /></span>  What brings you here today? We'll be happy to assist you!</p>
        </div>
        <div className='w12'><FaPhone className='icon23' /><h5>Contact Sales</h5></div>
        <div className='line12'></div>
        <div className='w12'><FaFacebookMessenger className='icon34'/><h5>Contact Support</h5></div>
    </div>
    <div className='w23'>
        <div className='w234'>
            <p>Hi! <span><img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/12.1.1/72x72/1f44b.png" alt="" /></span>  What brings you here today? We'll be happy to assist you!</p>
        </div>
        <div className='w12'><FaPhone className='icon23' /><h5>Contact Sales</h5></div>
        <div className='line12'></div>
        <div className='w12'><FaFacebookMessenger className='icon34'/><h5>Contact Support</h5></div>
    </div>
</div>
  )
}
