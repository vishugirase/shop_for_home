import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {
    Navbar,
    NavItem,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';
import { Link } from 'react-router-dom';


const Category = () => {

    return (
        <>
        <Navbar/>
       <div className='div1'>
         <div >
           
           <Navbar color="" light expand="md"  style={{
           display: 'block', width: 1500, padding: 5
       }}>
               <NavbarBrand ><Link to = "/UserHomePage"  className='link1'>Home</Link></NavbarBrand>
             
               <Collapse  navbar>
                   <Nav className="mr-auto" navbar>
                       <NavItem>
                           <NavLink><Link to = '/KitchenDinning'  className='link1'>Kitchen And Dining</Link></NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink><Link to ='/HomeDecor'  className='link1'>Home Decor</Link></NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink><Link to ='/Furniture'  className='link1'>Furniture</Link></NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink><Link to = '/'  className='link1'>Logout</Link></NavLink>
                       </NavItem>
                       <NavItem>
                                <NavLink><h6 style={{marginLeft:"300px" , color:"black" }} >Hii... {sessionStorage.getItem('userName')}</h6></NavLink>
                     </NavItem>
                   </Nav>
               </Collapse>
           </Navbar>
            <hr></hr>
            <div className='pdiv'>
                    <p style={{fontSize:"xx-large",paddingTop:"70px",fontStyle:"italic"}}>"No decision should be 
                    made<br></br> on an empty shopping bag"
                    </p>
                </div>
           
       </div >
       </div>
       </>
    )
}

export default Category;