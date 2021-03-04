import React, { useState } from 'react'; 
import { useHistory } from 'react-router';
import './header.css'

export default function Header() {


    const [searchTerm , setSearchTerm] = useState('')
    const [category , setCategory] = useState('')
    const history = useHistory();

    function handleClick()
    {
        console.log("here in cloick");
        window.location.href = "/search/"+searchTerm
    }

    return (
        <>
        <div className="position-relative">
            <section>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner" id='cinner'>
                        <div className="carousel-item active">
                            <img className='caraousel-img' src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bGlicmFyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" className="d-block w-100 h-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img className='caraousel-img' src="https://miro.medium.com/max/1024/1*uvQCWIZ3amjtMWtkvDrgug.jpeg" className="d-block w-100 h-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img className='caraousel-img' src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" className="d-block w-100 h-100" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </section>
            <section className="search-sec">
                <div className="container ">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="w-sm-100 w-75">
                                        <input autoComplete="off" type="text" name="searchTerm" value={searchTerm} onChange={(e) =>  setSearchTerm(e.target.value) } className="form-control h-100 search-slt" placeholder='Search for books' required />
                                    </div>
                                    <div className="w-sm-100 w-25 ">
                                        <button type="button"  onClick={() => handleClick()} id="search-btn" className="btn btn-danger wrn-btn">Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
            </div>
        </>

    )
}



