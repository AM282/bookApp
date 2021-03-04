import React from 'react';
import './FavouriteCard.css'

function Card(props)
{
    console.log("in favourite " , props.obj)
    function OnDelete(id)
    {
        console.log("id for delte" , id);
        props.deletecall(id)
    }
    return (
        <div className="card-col  col-lg-3 col-md-4 col-sm-6 col-12" data-testid='favourite'>
        <div id={props.id} className="card h-100 border-0 ">
            <img
            src={props.imgaddress}
            
            className="card-img-top"
            alt="Nothing toshow "
            />
            <div className="card-body">
                <a href={props.link} className = "text-dark nav text-decoration-none" ><h5 className="card-title">{props.title}</h5></a>
                <p className="card-text d-none">
                    {props.publishedDate}
                </p>
                <p className="author pl-2s">-{props.author}</p>
                <i className="fas fa-trash text-danger" id="delete_btn" onClick={() => OnDelete(props.obj)}></i>
            </div>
        </div>
    </div>
        
    )
}

export default Card;