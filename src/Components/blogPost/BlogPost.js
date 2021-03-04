import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import './blogPost.css'

export default function BlogPost()
{
    let { id } = useParams();
    let [blog,setBlog] = useState({})
    let [description , setDescription] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3002/blogs/${id}`).then((res) => {
            if (res.status == 200) {
                console.log("in blog fetch");
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log("here", data)
                setBlog(data)
                setDescription(data.Description)
                console.log(blog);
            }
        })
        .catch((err) => {
            console.log("Error occured" + err)
        })
    },[])

    return (
        <div className="container py-3">
            <div className="row py-2 d-flex align-items-center">
                <img id="profile_img" src="https://www.w3schools.com/howto/img_avatar.png" className="mr-3" />
                <div>
                    <h4 className="my-0">{blog.author}</h4>
                    <p className="my-0">{blog.date}</p>
                </div>
            </div>
            <br/>
            <div className="row">
                <img className="w-100 mr-4" id="blog_image" src={blog.img} alt="img not found"/>
            </div>
          
            <div data-testid='blogpost_content' className="row blog-content pt-4 ">
                <div className="col-lg-12 my-4 text-center border-bottom border-dark" >
                    <h1 className="">{blog.title}</h1>
                    <h4>{blog.subtitle}</h4>
                </div>
                <div className=" col-lg-12">
                    {description.map((d) => (
                        <p>{d} <br/></p>
                    ))}
                </div>
               
            </div>
        </div>
    )
}