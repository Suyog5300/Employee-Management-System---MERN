import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import Employee from './Employee'
import image from "../assets/coding.svg"
import "../home.css"

function Home() {
  return (
    // <div className="home-container">
    <>
    <div className="home-container">
<div className='home-text'>
  <h1>"The best way to <span className='change-font'>predict</span> </h1>
     <h1>the future is to <span className='change-font'>create</span> it!" </h1>
      <h4 className='author'>- Abraham Lincoln</h4>
  {/* <h1>"Don't <span className='clock'>WATCH</span> the <span className='clock'>clock</span>;</h1>
     <h1>do what it does. Keep going!" </h1>
      <h4 className='author'>- Sam Levenson</h4> */}

</div>
<div className="home-img">
<img src={image} alt="" />

</div>
<div class="blob">
  <svg xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
  <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
  </svg>
  
</div>
<Link to="/employee" className='dashboard-btn btn'>Dashboard</Link>
</div>
</>
    // </div>
  )
}

export default Home