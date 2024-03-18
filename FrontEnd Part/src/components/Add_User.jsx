import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "../styles/register.css";
import Navbar from './Navbar';

const AddUser = () => {

  const[ userName , setUserName ] = useState("");
  const[ password , setPassword ] = useState("");
  const[ name , setName ] = useState("");
  const[ email , setEmail ] = useState("");
  const[ role , setRole ] = useState("");

  const submit = (e) => {

    e.preventDefault();
    let user = {userName , password , email, name ,role};


    console.log(user);

    fetch("http://localhost:8081/adminCrud/add",
    { method:"POST", headers:{'content-type':'application/json'},body:JSON.stringify(user) })
    .then ((response) => {
      console.log ( ' User Added Successfully ');
       alert (' User Added Successfully '); 
       window.location.href="/CrudUsers";
      
      })
    .catch ((error) => {console.log('Error Due to ' +error);alert ( 'Error Due to ' +error)});
  }

  return (
    <>
    <Navbar/>

    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={submit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Up</h3>

        <div className="form-group mt-3">
          <label>UserName</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter UserName"
            required
            value={userName}
            onChange = {e => setUserName(e.target.value)}
          />
        </div>

        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            required
            value={password}
            onChange = {e => setPassword(e.target.value)}
          />
        </div>

        <div className="form-group mt-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter Name"
            required
            value={name}
            onChange = {e => setName(e.target.value)}
          />
        </div>

        <div className="form-group mt-3">
          <label>Email</label>
          <input
            type="Email"
            className="form-control mt-1"
            placeholder="Enter Email"
            required
            value={email}
            onChange = {e => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group mt-3">
          <label>Role</label>&nbsp;&nbsp;
          <input
               type="radio"  name="role" value="user" checked = {role === "user"} onChange ={e => setRole(e.target.value)}
          />&nbsp;&nbsp;
             <label>User</label>&nbsp;

          <input
               type="radio"  name="role" value="admin" checked = {role === "admin"} onChange ={e => setRole(e.target.value)}  
          />&nbsp;&nbsp;
           <label>Admin</label>
           <br></br>

        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br></br>
        
        </div>

        <div className="d-grid gap-2 mt-3">
        <Link to = "/CrudUsers" class="link-success">Back</Link>
        
        </div>
      </div>
    </form>
  </div>
  </>
)
}
export default AddUser;