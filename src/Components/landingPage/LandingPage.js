import React from 'react';
import AboutUs from '../aboutUs/AboutUs';
import LandingHeader from '../landingHeader/LandingHeader'
import Feedback from '../feedback/Feedback';

export default  function LandingPage(){
    return (
        <div className="">
            <LandingHeader />    
            <AboutUs>
             <p> we're constantly striving to make information available to as many people as possible,
                    and our website is designed with that goal in mind. Have you ever wished that reading a 
                    series could be more like watching your favorite shows? Well, Serial Box is a brand new 
                    medium for series drama and storytelling, bringing everything you love about TV to reading.</p>
             <p> we're constantly striving to make information available to as many people as possible,
                    and our website is designed with that goal in mind. Have you ever wished that reading a 
                    series could be more like watching your favorite shows? Well, Serial Box is a brand new 
                    medium for series drama and storytelling, bringing everything you love about TV to reading.</p>
          
            </AboutUs>
            <Feedback />
        </div>
    )}