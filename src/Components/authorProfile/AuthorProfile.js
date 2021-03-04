import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './authorProfile.css'


export default function AuthorProfile(props)
{
    let { id } = useParams();
    let [author ,setAuthor] = useState({})
    let [description , setDescription] = useState([])
    let [books , setBooks] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:3002/author/${id}`).then((res) => {
            if (res.status == 200) {
                console.log("in author details fetch");
                return res.json();
            }
        }).then((data) => {
            if (data) {
                console.log("here", data)
                setAuthor({...data})
                setDescription(data.description)
                setBooks(data.works)
                console.log(author);
            }
        })
        .catch((err) => {
            console.log("Error occured" + err)
        })
    } , [])

    return(
        
        <>
            <div class="container">
                <div class="row p-4">
                    <div className="d-flex justify-content- align-items-center flex-wrap">
                        <img src={author.imgaddress} width="200" height="200" className="rounded-circle mr-4" />
                        <div>
                            <h2>{author.name}</h2>
                            <p className="my-0">Author</p>
                            <p >{author.country}</p>
                        </div>
                    </div>                        
                </div>
                <br/> 
                
              
                <div class="row mx-lg-2 mx-md-2 mr-2">
                    <div class="p-1 table-responsive">
                        <div class="pl-2 pt-3 pb-2 bg-primary text-light">
                            <h5>More Details</h5>
                        </div>
                        <table class="bg-light table-shadow table table-borderless">
                            <tr>
                                <th>Full Name:</th>
                                <td>
                                   {author.name}
                                </td>
                            </tr>
                            <tr>
                                <th>Birth:</th>
                                <td>
                                    {author.dob}
                                </td>
                            </tr>
                            <tr>
                                <th>Death:</th>
                                <td>
                                    {author.dod}
                                </td>
                            </tr>
                            <tr>
                                <th>Coutnry:</th>
                                <td>
                                    {author.country}
                                </td>
                            </tr>
                            <tr>
                                <th>Gender:</th>
                                <td>
                                    {author.gender}
                                </td>
                            </tr>
                            <tr>
                                <th>Last Release:</th>
                                <td>
                                    {books.map((b) => (
                                            <>{b} <br/></>
                                        ))}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <div class="row mx-lg-2 mx-md-2 mr-2">
                    <div class="p-1 table-responsive">
                        <div class="pl-2 pt-3 pb-2 bg-primary text-light">
                            <h5>Personal Details</h5>
                        </div>
                        <div>
                            {description.map((d) => (
                                 <p>{d}</p>
                            ))}
                    </div>
                </div>

            </div>

        </div>
        </>
    )
}

