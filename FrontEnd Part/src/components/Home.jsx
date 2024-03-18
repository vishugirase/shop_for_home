import React, { useEffect, useState } from 'react'

import {useNavigate} from "react-router-dom"
import {Link} from 'react-router-dom'




import "../styles/Home.css"
import Navbar from './Navbar';


function Home() {
  const[ userName , setUserName ] = useState("");
  const[ password , setPassword ] = useState("");

const usenavigate = useNavigate();

  useEffect (() =>{

    sessionStorage.clear();
  })
  
    const submit = (e) => {
  
      e.preventDefault();
     
      if(validate()){
  
        //Implementation for login if userName and Password are filled
  
        fetch("http://localhost:8081/user/login/" + userName + "/" + password).then((response) =>{
          return response.json();
       }).then((response) => {
        
          if(Object.keys(response).length === 0){
  
            alert("Enter the valid UserName");
           
  
          }else if(response.password === password){
  
            if(response.role === 'user'){
              alert('Login Sucessfully '  + response.role)
              sessionStorage.setItem('userName',userName);
              usenavigate('/UserHomePage')
             
            }else{
              alert('Login Sucessfully : '+response.role)
              sessionStorage.setItem('userName',userName);
              usenavigate('/AdminHomePage')
  
            }
  
          }else{
            alert("Enter valid Password")
  
          }
  
       }).catch((error) => { 
        alert("User Name and Password not match");
       })
  
      }
    }
    const validate = () =>{
      let result = true;
  
      if(userName === '' || userName === null){
        result = false;
      }
      if(password === '' || password === null){
        result = false;
      }
      return result;
    }
  

  
  return (
    <>
    <Navbar />
    <div className='div1'>
    
   

    <div id='div2'>
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>UserName</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter UserName"
              
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
             
              value={password}
              onChange = {e => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <br></br>

            <Link to = "/RegisterUser" className='link1'>New User ? Register</Link>
          </div>

        </div>
        
      </form>
    </div>
    

    </div>
    <footer style={{marginLeft:"470px",marginTop:"4800px"}}>@AllRightsReserved</footer>
    </div>
    
   
    </>
  );
}

export default Home;





{/* <div style={{textAlign:'center'}}>


<br></br>


</div> */}