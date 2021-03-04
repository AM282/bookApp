import React, { useEffect, useState } from 'react'
import BookCard from '../bookCard/BookCard'
import {v4 as uuidv4 } from 'uuid';
import Footer from '../footer/Footer'
import { useParams } from 'react-router-dom'
import FlashMessage from 'react-flash-message';
import './searchResult.css'

export default function SearchResult(props)
{
    console.log("in search");
    // const query = new URLSearchParams(props.location.search);
    // const searchTerm = query.get("searchTerm")
    // const category = query.get("category")
    let { searchTerm } = useParams();
    let [fetching , setFetching] = useState("fetching")
    let [books , setBooks] = useState([])
    let [favmessage,setFavMessage]=useState(false);
    // let [authors , setAuthors] = useState([])

    let noBookMsg = <div className="py-4">
                        <div class="alert alert-warning" role="alert">
                        No results found for given keyword Go back <a href="/dashboard">dashboard</a>
                        </div>
                    </div>
    let loadingMsg =  <div className="py-4">
                        <div class="alert alert-warning" role="alert">
                            Loading........
                        </div>
                    </div>

    useEffect(()=>{
        fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${searchTerm}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
        }
        }).then((data) => {
            if(data.items)
            {
                console.log("articles loaded" , data.items)
                setFetching("done")
                setBooks(data.items)
                return
            }
            setFetching("done")
            setBooks([])
        })
    } , [])

    const addToFavourites = (data) =>
    {
        console.log(data)
        fetch(`http://localhost:3002/favourites`, {
            method: 'POST',
            headers: {
                'content-Type': "application/json"
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.status == 201) {
                // history.push("/")
                setFavMessage(true);
                return data;
            } else if (response.status == 404) {
                return Promise.reject(new Error('Invalid URL'))
            } else if (response.status == 401) {
                return Promise.reject(new Error('UnAuthorized User...'));
            } else {
                return Promise.reject(new Error('Internal Server Error'));
            }
        })
        .catch((err) => {
            console.log("err ", err);
            return err;
        })

    }
    
    return(
        <>
            {
            favmessage &&   <FlashMessage duration={3000}>
                <div style={{backgroundColor:'#28a745',padding:'10px',textAlign:'center'}}><strong>Succesfully Added to favourites</strong></div>
                
          </FlashMessage>
        }
            <div id="search_result_area" className="container">

                { fetching == "fetching" ? <>{loadingMsg}  </> 
                    :  books.length > 0 ? <></> : <> {noBookMsg} </>}

                <div className="row cards-container">
                    {books.map(n => (
                        <BookCard 
                               title = {n.volumeInfo.title}
                               link={n.volumeInfo.infoLink}
                               id={uuidv4()}
                               key={uuidv4()}
                               author={n.volumeInfo.authors}
                               publishedDate = {n.volumeInfo.publishedDate}
                               addToFavourites = {addToFavourites}
                               imgaddress = { n.volumeInfo.imageLinks ?  n.volumeInfo.imageLinks.thumbnail : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/488px-No-Image-Placeholder.svg.png" }
                               obj  = {n.volumeInfo}
                       />
                    ))}

                </div>
            </div>
            <div className="footer-part" >
                <Footer />
            </div>
        </>
    )
}