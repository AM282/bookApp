import React from 'react';
import './bookCard.css'

function Card(props)
{
    return (
        <div className="card-col col-lg-3 col-md-4 col-sm-6 col-12 ">
        <div id={props.id} className="card h-100 border-0 ">
            <img
            src={props.imgaddress}
            
            className="card-img-top"
            alt="Nothing toshow "
            />
            <div className="card-body position-relative py-4">
                <a href={props.link} className = "text-dark nav text-decoration-none pt-3" ><h5 className="card-title">{props.title}</h5></a>
                <p className="card-text d-none">
                    {props.publishedDate}
                </p>
                <p className="author pl-2s">-{props.author}</p>
                <i onClick={() => props.addToFavourites(props.obj)} id="fav_btn" className="fas fa-heart rounded-circle bg-danger text-white p-2 shadow h2"></i>
            </div>
        </div>
    </div>
        
    )
}

export default Card;