import { NavLink } from "react-router-dom";
import { createContext, isActive, useEffect, useState } from "react";
import imga from "../Images/logo.jpg";
export const AppContext = createContext(null);

// Function For Rendering The Navbar :
function Navbar() {
    const [status, setStatus] = useState(false);
    const [adminType, setadminStatus1] = useState(false);
    const [usertype, setusertype] = useState(false);
    // useEffect(() => {
    //     if (localStorage.getItem('usertype') === 'Admin') {
    //         setusertype(false);
    //         setadminStatus1(true);
    //         setStatus(true);
    //         console.log('Admin')
    //     }
    //     if (localStorage.getItem('usertype') === 'Customer') {
    //         setusertype(true);
    //         setadminStatus1(false)
    //         setStatus(true)
    //         console.log('user')
    //     }
    //     //setStatus()   
    //     // if(localStorage.getItem('type')==='Admin') 
    //     {
    //         //  setStatus1(false);     
    //         // 
    //         //  console.log(type1)      
    //         // 
    //     }
    //     // else
    //     {
    //         //   
    //         setStatus1(true);
    //         //   
    //         console.log('type1', type1);
    //         // }    
    //         if (localStorage.getItem('status') === 'true') {
    //             setStatus(true);
    //         }
    //         else {
    //             setStatus(false);
    //         }
    //     },
    //     [])
    const logout = (event) => {

    }
    // Returns the HTML file for the respective method and Displaying The Navbar On The Home Page : 
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src={imga} style={{height:"50px" , width:"50px",marginLeft:"50px"}}/>
                <a className="navbar-brand mx-5" href="/home"><h4> SHOP FOR HOME</h4></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">          <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" style={isActive = () => console.log(isActive)} to="/home">Home</NavLink>
                        </li>
                        {/* <li className="nav-item">

                            <NavLink className="nav-link" to="/adminHome">Admin-Portal</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/customerHome">Customer-Portal</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/location">Location</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/feedback">Feedback</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/helpAndSupport">Contact Us</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline nav-form my-2 mx-5 my-lg-0">

                        <NavLink id="signinbtn" className="form-inline my-2 mx-5 my-lg-0 btn btn-outline-success my-2 my-sm-0" to="/signin" >Sign-In</NavLink>
                        <NavLink id="signupbtn" className="form-inline my-2  my-lg-0 btn btn-outline-success my-2 my-sm-0" to="/signup">Sign-Up</NavLink>
                        {/* <NavLink id="logoutbtn" className="form-inline my-2 mx-5  my-lg-0 btn btn-outline-success my-2 my-sm-0" to="/logout" onClick={logout}>Logout</NavLink> */}
                    </form>
                </div>
            </nav>
        </>
    );
}
export default Navbar;