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
import "../styles/Admin_Home_Page.css"

const AdminHomePage = () => {

    let userName = sessionStorage.getItem('userName');

    return (
        <>
        <Navbar/>
        <div className='divv'>
            <div className="overlay">
            <Navbar color="grey" light expand="md"  style={{
            display: 'block', width: 1500, padding: 5
        }}>
                <br></br>
                {/* <NavbarBrand ><Link to = "/AdminHomePage">Home</Link></NavbarBrand> */}
              
                <Collapse  navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink><Link to = "/AdminHomePage" className='link2'>Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to = "/CrudUsers" className='link2'>Crud-User</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to = "/CrudProduct" className='link2'>Crud-Product</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to = "/SalesReport" className='link2'>Report</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to = "/Mail" className='link2'>Mail</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to = "/" className='link2'>Logout</Link></NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink><h6 style={{marginLeft:"400px" , color:"black" }}>Hello  {userName}</h6></NavLink>
                        </NavItem>
                       
                        
                    </Nav>
                </Collapse>
            </Navbar>
            <hr></hr>
           
            <h2 style={{color : 'black' , marginLeft:"80px"}}>WELCOME TO SHOP FOR HOME</h2>
                <div className='pdiv'>
                    <p>@home is the retail division of Nilkamal Limited, the world's <br></br>largest 
                        manufacturer of moulded furniture & India's leading<br></br> manufacturer of 
                        Material Handling Systems
                    </p>
                </div>
            </div>
        </div >
        </>
    );



}
export default AdminHomePage;