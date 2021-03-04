import React from 'react'
import './navbar.css'
import {useHistory } from 'react-router'

export default function Header() {
    const history = useHistory();
    const removeLocalStorage=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.href = "/"
    }
    return (
        <nav className="navbar navbar-expand-lg text-light navbar-dark bg-dark">
            <a className="h2 font-weight-bold text-decoration-none text-white" href="/">Book<span className="text-primary" >App</span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav  ml-auto">
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/dashboard">Dashboard<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white" href="/blog">Blog<i className="fas ml-2 fa-book "></i></a>
                    </li>
                </ul>
                {
                    localStorage.getItem('token')?
                            <ul className="navbar-nav align-items-baseline ml-auto">
                                <li className="nav-item mx-3">
                                    <a className='text-white' href={"/user/" + localStorage.getItem('username')}>Hello {localStorage.getItem('username')}...</a>
                                </li>
                                <li className="nav-item">
                                    <a className='btn btn-danger' href='javascript:void(0)'><span onClick={() => { removeLocalStorage() }}>Logout</span></a>
                                </li>
                            </ul> :
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>
                        </ul>
                }
            </div>
        </nav>
    )
}
