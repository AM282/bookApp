import React from 'react';
import './aboutus.css'

export default function AboutUs(props){
    return (
     <div className="container-fluid bg-white aboutus-landing">
         <div className="row ">
                <h1 className="w-100 text-center">About us</h1>
         </div>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 order-1 order-lg-0 order-md-0 d-flex align-items-center flex-column justify-content-center text-center">
                {props.children}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 w-100 order-0 order-lg-1 order-md-1">
                <img src="https://cdn.dribbble.com/users/2112205/screenshots/6453933/services_illustration_4x.png?compress=1&resize=800x600" alt="...." />
            </div>
        </div>
    </div>
    )}