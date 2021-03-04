import React, { useState  } from 'react' ;
//import { useHistory } from 'react-router-dom';

import './login.css';

export default function Login()
{
    const [username , setUserName] = useState('');
    const [password , setPassword] = useState('');

   // const history = useHistory();

    function handleOnClick(e)
    {
        e.preventDefault();
        const user = {username , password}
        console.log(user);
        fetch(' http://localhost:3001/auth/v1', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        }).then((res) => {
            if (res.ok) {
                return res.json();
            } else {
                console.log("here in fetch error");
            }
        })
        .then((data) => {
            if(data){
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', username);
            }
          //  history.push('/dashboard');    
          window.location.href="/dashboard"            
        });

    }

    return(

        <>
         <nav className="navbar navbar-fixed-top navbar-expand-md bg-white navbar-light d-flex align-items-baseline fixed-top">
            <div className="container">
                <a className="h2 font-weight-bold text-dark" href="/">Book<span className="text-primary" >App</span></a>
                <div className="ml-auto d-flex">
                    <a href="/" className="nav-link mr-2 h5">Home</a>
                    <a className="nav-link h5" href="/blog">Blog</a>
                </div>
             
            </div>
        </nav>

        <div id="pills-tabContent" className="container login-container">
                <div className="d-flex justify-content-center">
                    <ul className="nav justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active text-white" id="pills-Customer-tab" data-toggle="pill" href="#CustomerLogin" role="tab" aria-selected="true">Customer Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" id="pills-Restaurant-tab" data-toggle="pill" href="#RestaurantLogin" role="tab"  aria-selected="false">Register</a>
                        </li>
                    </ul>
                </div>
                
                <div className="tab-content row d-flex justify-content-around">
                    
                    <div className="login-form tab-pane fade show active" id="CustomerLogin" role="CustomerLogin" aria-labelledby="pills-Customer-tab">
                        <h2>Login</h2>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control" value={username} onChange={(e) => setUserName(e.target.value)}  name="username" placeholder="Your username *"  />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Your Password *" />
                            </div>
                            <div className="form-group">
                                <input type="submit" onClick={(e) => handleOnClick(e)} className="btnSubmit" value="Login" />
                            </div>
                        </form>
                    </div>
                    <div className="login-form tab-pane fade" id="RestaurantLogin" role="RestaurantLogin" aria-labelledby="pills-Restaurant-tab">
                        <h2>Register</h2>
                        <form name="r-login-form" method="post" action="restaurantlogin.php" onSubmit="return validateRForm()">
                            <div className="form-group">
                                <input type="text" className="form-control" name="username" placeholder="Your username *" value="" />
                            </div>
                            <div className="form-group">
                                <input type="password" className="form-control" name="password" placeholder="Your Password *" value="" />
                            </div>
                            <div className="form-group">
                                <input type="submit" className="btnSubmit" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
        </div>
        </>

    )
}
