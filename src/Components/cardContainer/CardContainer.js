import React ,  { useState, useEffect } from 'react';
import  BookCard from '../bookCard/BookCard';
import AuthorCard from '../authorCard/AuthorCard'
import FavouriteCard from '../favouriteCard/FavouriteCard'
import FlashMessage from 'react-flash-message';
// import { useHistory } from 'react-router-dom';
import {v4 as uuidv4 } from 'uuid';
import './cardContainer.css'

export default function CardContainer(props){

    let [author , setAuthor] = useState([])
    let [favourite , setFavourite] = useState([])
    let [recommedation , setRecommendation ] = useState([])
    let [favmessage,setFavMessage]=useState(false);
    let [delfavmessage,setDelFavMessage]=useState(false);
    let favouritesArray = []
    // const history = useHistory();

    useEffect(() =>{
        fetch("http://localhost:3002/author").then((res) => {
            if (res.status == 200) {
                console.log("in json");
                return res.json();
            }
        }).then((data) => {
            if (data && Array.isArray(data)) {
                console.log("here", data)
                setAuthor(data)
            }
        })
        .catch((err) => {
            console.log("Error occured" + err)
        })

        fetch("http://localhost:3002/favourites").then((res) => {
            if (res.status == 200) {
                console.log("in json");
                return res.json();
            }
        }).then((data) => {
            if (data && Array.isArray(data)) {
                console.log("here", data)
                setFavourite(data)
                data.map(b => {
                    favouritesArray.push(b.title)
                })
                console.log("favourites" , favouritesArray);
            }
        })
        .catch((err) => {
            console.log("Error occured" + err)
        })

        fetch('https://www.googleapis.com/books/v1/volumes?q=java')
        .then((response) => {
            if (response.ok) {
                 return response.json();
           }
        }).then((data) => {
            if(data.articles)
                console.log("articles loaded" , data.items)
            setRecommendation(data.items)
        })
    },[])


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
                // history.push("/");
                let tempfav =[...favourite]
                let length = tempfav.length
                data["id"] = length+1
                setFavourite([...favourite , data])
                setFavMessage(true);
                setTimeout(()=> {
                    setFavMessage(false);
                 }, 2000)
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

    const deletee=(id)=>{
        console.log(id)
     
        fetch(`http://localhost:3002/favourites/${id}`,{
     
         method:'DELETE',
         headers:{
             'Content-Type':'Application/JSON'
         }
     })
     
     .then((res)=>{
         return res.json()
     })
     .then((data)=>{
       const  newstate=favourite.filter((item)=>{
             return item.id !=id
         })
         setFavourite(newstate)
         setDelFavMessage(true);
         setTimeout(()=> {
            setDelFavMessage(false);
         }, 2000)
         console.log(delfavmessage)
     })
     }

    function openBooks()
    {
        document.getElementById("favourite").style.display = "none"
        document.getElementById("books").style.display = "flex"
        document.getElementById("author").style.display = "none"
        document.getElementById("books-link").classList.add("card-active");
        document.getElementById("favourite-link").classList.remove("card-active");
        document.getElementById("author-link").classList.remove("card-active");
        
    }
    function openFavourite()
    {
        document.getElementById("favourite").style.display = "flex"
        document.getElementById("books").style.display = "none"
        document.getElementById("author").style.display = "none"
        document.getElementById("favourite-link").classList.add("card-active");
        document.getElementById("books-link").classList.remove("card-active");
        document.getElementById("author-link").classList.remove("card-active");

    }
    function openAuthor()
    {
        document.getElementById("favourite").style.display = "none"
        document.getElementById("books").style.display = "none"
        document.getElementById("author").style.display = "flex"
        document.getElementById("author-link").classList.add("card-active");
        document.getElementById("favourite-link").classList.remove("card-active");
        document.getElementById("books-link").classList.remove("card-active");

    }

    return (
        <>
        {
            favmessage &&   <FlashMessage duration={3000}>
                <div style={{backgroundColor:'#28a745',padding:'10px',textAlign:'center'}}><strong>Succesfully Added to favourites</strong></div>
                
          </FlashMessage>
        }
        {
            delfavmessage &&  <FlashMessage duration={3000} > 
                <div style={{backgroundColor:'#28a745',padding:'10px',textAlign:'center'}}><strong>Removed from favourites</strong></div>
          </FlashMessage>
        }
        <div className="text-center d-flex  justify-content-start pt-3 sticky-top bg-white">
            <div className="d-flex">
                <span role="button"  id="books-link" className="h5 card-active nav-link " onClick={() => openBooks()}>Books</span>
                <span role="button" id="author-link" className="h5  nav-link " onClick={() => openAuthor()}>Author</span>
                <span role="button" id="favourite-link" className="h5 nav-link " onClick={() => openFavourite()}>Favourite</span>
            </div> 
        </div>
        <div className="container ">
            <div className="row cards-container" id="author">
                {author.map(n => (
                        <AuthorCard 
                        id={n.id}
                        key={n.id}
                        name={n.name}
                        dob = {n.dob}
                        imgaddress = {n.imgaddress}
                        />
                ))}
            </div>
            <div className="row cards-container" id="favourite" >
                { 
                favourite.length > 0 ? favourite.map(n => (
                        <FavouriteCard 
                            title = {n.title}
                            link={n.infoLink}
                            id={uuidv4()}
                            key={uuidv4()}
                            author={n.authors}
                            publishedDate = {n.publishedDate}
                            imgaddress = {n.imageLinks.thumbnail}
                            obj={n.id}
                            deletecall={deletee}
                        />
                )) :  <div class="alert my-4 w-100 border-warning alert-warning" role="alert">
                            !!!!No books added in favourites 
                        </div>
                 }
            
            </div>
            <div className="row cards-container" id="books">
                {recommedation.map(n => (
                        <BookCard 
                        title = {n.volumeInfo.title}
                        link={n.volumeInfo.infoLink}
                        id={uuidv4()}
                        key={uuidv4()}
                        author={n.volumeInfo.authors}
                        publishedDate = {n.volumeInfo.publishedDate}
                        addToFavourites = {addToFavourites}
                        imgaddress = {n.volumeInfo.imageLinks.thumbnail}
                        obj  = {n.volumeInfo}
                        />
                ))}
            </div>
        </div>
    </>
    )
}