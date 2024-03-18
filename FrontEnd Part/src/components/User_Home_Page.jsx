import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavItem,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import "../styles/UserHomePage.css"
//import Navbar from './Navbar';

const UserHomePage = () => {

    return (
        <>
       
        <div className='div1'>
        
            <div className='div2'>

                <Navbar color="yellow" light expand="md" style={{
                    display: 'block', width: 1500, padding: 5
                }}>
                    {/* <NavbarBrand > <Link to="/UserHomePage" className='link1'>Home</Link></NavbarBrand> */}

                    <Collapse navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink>
                                <Link to="/UserHomePage" className='link1'>Home</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to='/Category' className='link1'>Category</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to='/Cartt' className='link1'>Cart</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to='/WishList' className='link1'>wishList</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to='/SortLowToHigh' className='link1'>Sort Product</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to='/Bill' className='link1'>order History</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><Link to='/' className='link1'>Logout</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink><h6 style={{marginLeft:"300px" , color:"black" }} >Hii... {sessionStorage.getItem('userName')}</h6></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <hr style={{fontWeight:"10px"}}></hr>
                

               
                <h2 style={{color : 'black' , marginLeft:"100px",marginTop:"20px"}}>WELCOME TO SHOPFORHOME</h2>
                <div className='pdiv'>
                    <p>Need outdoor seating in a hurry? This simple bench,<br></br> based on author and
                     ecologist Aldo Leopold's classic <br></br>design, can be constructed in a couple
                     of hours, even<br></br> if you are a novice woodworker. All it takes is two boards<br></br> 
                     and 18 screws, for a cost of less than $25. You'll find the<br></br> simple how-to 
                     instructions here.
                    </p>
                </div>
            </div >

        </div>
        </>
    );
}
export default UserHomePage;