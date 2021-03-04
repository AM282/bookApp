import React from 'react';
import './landingHeader.css'

export default  function LandingHeader(){
    return (
      <div className="container-fluid d-flex justify-content-center align-items-center navHeader p-0">
        <div className="row d-flex flex-column align-items-center landing-header-content">
          <h1>Welcome to BookApp </h1>
          <p>Now Find amazing collection of books and get complete details </p>
          <a href="/dashboard" className="btn btn-primary">Go to Dashboard</a>
        </div>
      </div>      
    )} 