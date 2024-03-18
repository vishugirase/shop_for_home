
import { useParams } from 'react-router';
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import "../styles/register.css";

const UpdateUser = () => {

    const params = useParams();

    const userName = params.userName;

    const[ userName1 , setUserName1 ] = useState("");
    const[ password , setPassword ] = useState("");
    const[ name , setName ] = useState("");
    const[ email , setEmail ] = useState("");
    const[ role , setRole ] = useState();

    useEffect(() => {

        // let username = sessionStorage.getItem('username');
        // let role = sessionStorage.getItem('role');

        // console.log(username);
        // if (username === '' || username === null || role !== 'admin') {
        //     usenavigate('/');
        // }

        fetch("http://localhost:8081/adminCrud/getDetail/" + userName )
            .then((res) => {
                return res.json();

            }).then((resp) => {
                console.log(resp);
                setUserName1(resp.userName);
                setPassword(resp.password);
                setName(resp.name);
                setEmail(resp.email);
                setRole(resp.role);
               
            }).catch((err) => {
                console.log(err.message);
            })

    }, []);


   

    const submit = (e) => {

        e.preventDefault();
        let user = {userName , password , email, name ,role};
    
    
        console.log(user);
    
        fetch("http://localhost:8081/adminCrud/update" ,
        { method:"PUT", headers:{'content-type':'application/json'},body:JSON.stringify(user) })
        .then ((response) => {
          console.log ( ' User Added Successfully ');
           alert (' User update Successfully '); 
           window.location.href="/CrudUsers";
          
          })
        .catch ((error) => {console.log('Error Due to ' +error);alert ( 'Error Due to ' +error)});

    }

    return (

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
                value={userName1}
                onChange = {e => setUserName1(e.target.value)}
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
    )
}

export default UpdateUser;