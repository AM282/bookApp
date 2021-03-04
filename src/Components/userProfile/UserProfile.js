import React, { useEffect, useState } from 'react'
import './userProfile.css'

export default function UserProfile()
{
    let [user ,setUser] = useState({})
    let [interest , setInterest] = useState([])
    useEffect(()=> {
        fetch(`http://localhost:3002/user/1`).then((res) => {
            if (res.status === 200) {
                // console.log("user details fetch");
                return res.json();
            }
        }).then((data) => {
            console.log("here", data)
            if (data) {
                setInterest(data.interest)
                setUser(data);
            }
        })
        .catch((err) => {
            console.log("Error occured" + err)
        })
    } , [])

    return(
        
        <>
            <div className="container">
                <div className="row p-4">
                    <div className="d-flex justify-content- align-items-center flex-wrap">
                        <img src={user.profileImg} alt='' width="200" height="200" className="rounded-circle mr-4" />
                        <div>
                            <h2>{user.username}</h2>
                            <p className="my-0">User</p>
                        </div>
                    </div>                        
                </div>
                <br/> 
                
              
                 <div className="row mx-lg-2 mx-md-2 mr-2">
                    <div className="p-1 table-responsive">
                        <div className="pl-2 pt-3 pb-2 bg-primary text-light">
                            <h5>Personal Details</h5>
                        </div>
                        <table className="bg-light table-shadow table table-borderless">
                            <tr>
                                <th>Full Name:</th>
                                <td>
                                   <p>{user.name}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>DOB:</th>
                                <td>
                                    <p>{user.DOB}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>Gender:</th>
                                <td>
                                    <p>{user.gender}</p>
                                </td>
                            </tr>
                            <tr>
                                <th>Email:</th>
                                <td>
                                    <p>{user.email}</p>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div> 
                <div className="row mx-lg-2 mx-md-2 mr-2">
                    <div className="p-1 table-responsive">
                        <div className="pl-2 pt-3 pb-2 bg-primary text-light">
                            <h5>More Details</h5>
                        </div>
                        <table className="bg-light table-shadow table table-borderless">
                            <tr>
                                <th>Interets :</th>
                                <td>
                                   {interest.map(i => <p>{i}</p> )}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div> 

        </div>
        </>
    )
}

