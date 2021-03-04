import React, { useEffect, useState } from 'react';
import BlogCard from '../blogCard/BlogCard';
import './blogList.css'

export default function BlogList()
{
    let [blogs, setBlogs] = useState([])
    useEffect(()=>{

        fetch(`http://localhost:3002/blogs`).then((res) => {
            if (res.status == 200) {
                console.log("in author details fetch");
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log("data ", data)
                setBlogs(data)
            }
        })
        .catch((err) => {
            console.log("Error occured" + err)
        })

    },[])
    return (
        <div className="container-fluid">
            <div className="row">
                <img className="w-100" id="blog_image" src="https://www.walesartsreview.org/wp-content/uploads/2020/06/lockdown-library.jpg" alt="img not found"/>
                <div id="header_content" className="position-absolute text-white">
                    <h1 className="">Welcome to our blog</h1>
                    <p>Find out best articles here on every topics</p>
                </div>
            </div>

            {blogs.map((blog) => (
                    <BlogCard
                        key = {blog.id}
                        blog={blog}
                    />
                ))}
        </div>
    )
}