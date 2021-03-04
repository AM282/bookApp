import React from 'react'


export default function BlogCard({blog}){
    return(
        <div id="card" data-testid='card' className="card my-4 mx-4">
            <div className="row ">
                <div className="col-lg-3 col-md-3 ">
                    <img src={blog.img} alt="nothing to show" className="h-100 w-100" />
                </div>
                <div className="col-lg-8 col-md-9 px-3">
                    <div className="card-block py-2 px-3">
                        <h4 id="title" className="text-primary cursor-pointer card-title"  onClick={(e) => {window.location.href="/blogPost/"+blog.id}} role="button" >{blog.title}</h4>
                        <p  id="description" className="card-text">{blog.Description[0].substring(0,250)} ...
                        <span className="text-primary cursor-pointer"  onClick={(e) => {window.location.href="/blogPost/"+blog.id}} role="button">Read More</span>
                        </p>
                        <p>Author: {blog.author}</p>
                    </div>
                </div>
            </div>
        </div>  
    )
}