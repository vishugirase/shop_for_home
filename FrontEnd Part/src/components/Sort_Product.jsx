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
import { Link, useNavigate } from 'react-router-dom';
import  { useEffect,useState } from "react";
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/esm/Button';

const SortProduct = () =>{

    const[kitchenProduct , setKitchenProduct] = useState("");

    return (
        <div >
           
        <Navbar color="" light expand="md"  style={{
        display: 'block', width: 1500, padding: 5
    }}>
            <NavbarBrand ><Link to = "/UserHomePage">Home</Link></NavbarBrand>
          
            <Collapse  navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink><Link to ='/Cart'>Cart</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to ='/OrderHistory'>wishList</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to ='/SortProduct'>Sort Product</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to = '/LoginRegister'>Logout</Link></NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

<br></br>
<br></br>

        <Table striped>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Product Img</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Add TO Cart</th>
            <th>Add to WishList</th>
          </tr>
        </thead>
        <tbody>

         
         {kitchenProduct &&
            kitchenProduct.map(item => (
                <tr key={item.productId}>
                    <td>{item.productId}</td>
                    <td>{item.productImg}</td>
                    <td>{item.productName}</td>
                    <td>{item.productPrice}</td>
{/*                     
                    <td><Button onClick={() => { handleCart(item.productId) }}>Cart</Button></td>
                    <td><Button onClick={() => { handleWishList(item.productId) }}>WishList</Button></td> */}


                </tr>
            ))
         }

        </tbody>
      </Table>

    
    </div >
    )
}

export default SortProduct;