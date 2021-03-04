import React from 'react';
import './authorCard.css'

function Card(props)
{
    return (
        <div className="card-col col-lg-2 col-md-4 col-sm-4 col-6 p-3">
            <div id={props.id} className="card shadow h-100 border-0 ">
                <img
                src={props.imgaddress}
                className="card-img-top"
                alt="Nothing to show "
                />
                <div className="card-body position-relative ">
                    <a href={"/author/" + props.id} className = "text-dark nav text-decoration-none" ><h5 className="card-title">{props.name}</h5></a>
                    <p className="author pl-2s">{props.dob}</p>
                    <a id="details-btn" className="btn-primary btn my-4" href={"/author/" + props.id}>Details</a>
                </div>
            </div>
        </div>
        
    )
}

export default Card;