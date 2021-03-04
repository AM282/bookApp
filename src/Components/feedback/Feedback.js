import React,{useState} from 'react'
import './feedback.css'

function Feedback() {
const [name,setname]=useState('')
const [email,setemail]=useState('')
const [feedback,setfeedback]=useState('')
    

function buttonhandler(e){
  e.preventDefault()
  console.log("clicked")
  const newfeedback={
    name,
    email,
    feedback
  }
 console.log(newfeedback)

 fetch(" http://localhost:3002/feedback",{
   method:'POST',
   headers:{
     'Content-Type':'application/json'
   },
   body:JSON.stringify(newfeedback)

 })
 .then((res)=>{
   return res.json()
 })
 
 .then((data)=>{
   return data
 })
    setname('')
    setemail('')
    setfeedback('')
    window.location.href="/"
}

    return (
        <div>
          <div class="container">
            <button type="button" className="btn btn-danger mybtn"data-toggle="modal" data-target="#form">
              Click here to give feedback
            </button>  
          </div>

          <div className="modal fade" id="form" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header border-bottom-0">
                  <h5 className="modal-title" id="exampleModalLabel">Feedback form</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <form>
                  <div className="modal-body">
                    <div className="form-group">
                      <label for="email1">Name</label>
                      <input type="text" autoComplete="off" value={name} onChange={(e)=>setname(e.target.value)}class="form-control" id="email1" aria-describedby="emailHelp" placeholder="Enter name"/>
                      <small id="emailHelp"  class="form-text text-muted">Your information is safe with us.</small>
                    </div>
                    <div className="form-group">
                      <label for="password1">Email</label>
                      <input type="email" autoComplete="off"  value={email} onChange={(e)=>setemail(e.target.value)}class="form-control" id="password1" placeholder="enter Email"/>
                    </div>
                    <div className="form-group">
                      <label for="password1">Feedback</label>
                      <textarea type="text" autoComplete="off" value={feedback} onChange={(e)=>setfeedback(e.target.value)} class="form-control" placeholder="enter feedback"></textarea>
                    {/* <input type="text" value={feedback} onChange={(e)=>setfeedback(e.target.value)} class="form-control" id="password2" placeholder="enter feedback"/>*/}
                    </div>
                  </div>
                  <div className="modal-footer border-top-0 d-flex justify-content-center">
                    <button type="submit" onClick={buttonhandler} class="btn btn-success">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
    )
}

export default Feedback
