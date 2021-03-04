import React from 'react'
import './footer.css'

export default function Footer() {
    return (

            <>
            <div className="container-fluid bg-dark p-4">
                <a className="h2 font-weight-bold text-decoration-none text-white" href="/">Book<span className="text-primary" >App</span></a>
                <div className="row p-4">
                    <div className="col-lg-3 col-md-6 col-sm-12 text-white">
                        <h3 className="border-bottom">About us</h3>
                        <p className="mt-2"> we're constantly striving to make information available to as many people as possible,
                            and our website is designed with that goal in mind. Well, Serial Box is a brand new 
                            medium for series drama and storytelling, bringing everything you love about TV to reading.
                        </p>
                    </div>    
                    <div className="col-lg-3 col-md-6 col-sm-12 text-white ">
                        <h3 className="">Information --</h3>
                        <ul className="footer-list list-unstyled">
                            <li className="menu-item "><a className="text-light text-decoration-none" href="#">Services</a></li>
                            <li className="menu-item "><a className="text-light text-decoration-none" href="#">Work</a></li>
                            <li className="menu-item "><a className="text-light text-decoration-none" href="#">Insights</a></li>
                            <li className="menu-item "><a className="text-light text-decoration-none" href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 text-white">
                        <h3 className="">In favour of Company --</h3>
                        <ul className="footer-list list-unstyled">
                            <li className="menu-item"><a className="text-light text-decoration-none" href="#">About</a></li>
                            <li className="menu-item"><a className="text-light text-decoration-none" href="#">Privacy</a></li>
                            <li  className="menu-item"><a className="text-light text-decoration-none" href="#">Compliance </a></li>
                            <li className="menu-item"><a className="text-light text-decoration-none" href="#">Contact</a></li>
                        </ul>
                    </div>   
                    <div className="col-lg-3 col-md-6 col-sm-12 text-white">
                        <div className="social-icons text-white h2 ">
                            <a href="#" target="_blank" className='icon'><i className="fab fa-linkedin "></i></a>
                            <a href="#" target="_blank" className='icon'><i className="fab fa-twitter"></i></a>
                            <a href="#" target="_blank" className='icon'><i className="fab fa-facebook"></i></a>
                            <a href="#" target="_blank" className='icon'><i className="fab fa-youtube-square"></i></a>
                            <a href="#" target="_blank" className='icon'><i className="fab fa-instagram-square"></i></a>
                        </div>
                        <h3 className="">Visit us</h3>
                        <address>
                            <strong>BookApp Pvt Ltd</strong>
                            13 D, Baladeya Colony<br />
                            Keonjhar, Odisha 758001<br />
                            Email: care@bookapp.co.in<br />
                            Phone: 1800 270 2356<br />
                            <a href="/" class="nav-link p-0">www.bookapp.com</a>
                        </address>
                    </div>
                </div>

                <hr className="bg-light" />
                <div className="copy-right text-center text-white">
                    <p className="copy-right-text">2021 Copyright BookApp. All rights reserved.</p>
                </div>

            </div>
            </>
    )
}


