import React from 'react'
import './NewsLetter.css'
function NewsLetter() {
  return (
    <div className='newsletter'>
        <h1>Get Our Exclusive Offers Via Email</h1>
        <p>Subscribe to hear more from us</p>
        <div>
            <input type="email" placeholder='Your Email address'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter