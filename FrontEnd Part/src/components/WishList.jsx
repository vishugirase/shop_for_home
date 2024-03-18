import React from 'react';
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    NavLink,
    Nav,
    NavbarBrand
} from 'reactstrap';

import { Link, useNavigate } from 'react-router-dom';
import  { useEffect,useState } from "react";
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/esm/Button';

const WishList = () => {

    const[wishList , setWishList] = useState("");
    const[quantity , setQuantity] = useState("1");
    let userName = sessionStorage.getItem('userName');

    useEffect(() => {

        
       
        console.log(userName);
        // let role = sessionStorage.getItem('role');
        // console.log(username);
        // if (username === '' || username === null || role !== 'admin') {
        //     usenavigate('/');
        // }

        fetch("http://localhost:8084/wishList/getWishListByUserName/" +userName)
            .then((res) => {
                return res.json();

            }).then((resp) => {
                console.log(resp);
                setWishList(resp);
               
            }).catch((err) => {
                console.log(err.message);
            })

    }, []);

    const handleCart = (productId) =>{

        let userName = sessionStorage.getItem('userName');

        console.log(userName);

        let cart = {productId , userName,quantity};

        fetch("http://localhost:8084/cart/addProduct",
        { method:"POST", headers:{'content-type':'application/json'},body:JSON.stringify(cart) })
        .then ((response) => {
          console.log ( ' Product Added in cart sucessfully ');
           alert (' Product Added in cart sucessfully '); 
          
          })
        .catch ((error) => {console.log('Error Due to ' +error);alert ( 'Error Due to ' +error)});
    }

    return (
        <div className='main-div'>
           <Navbar color="" light expand="md"  style={{
            display: 'block', width: 1500, padding: 5
        }}>
                <NavbarBrand ><Link to = "/UserHomePage" style={{color:"black"}}>Home</Link></NavbarBrand>
              
                <Collapse  navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink><Link to = '/Category' style={{color:"black"}}>Category</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to = '/Cartt' style={{color:"black"}}>Cart</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to = '/LoginRegister' style={{color:"black"}}>Logout</Link></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <hr></hr>
            <center><h3 style={{color:"black"}}>WISHLIST</h3></center>

            <br></br>
            <br></br>
            <br></br>
            <br></br>


            <Table striped>
        <thead>
          <tr>
            <th>WishListId</th>
            <th>Product Id</th>
            <th>Product Img</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Add Cart</th>
          </tr>
        </thead>
        <tbody>

         
         {wishList &&
            wishList.map(item => (

                <tr key={item.wishListId}>
                    <td>{item.wishListId}</td>
                    <td>{item.productId}</td>
                    <td><img src={item.productImg} style={{height:"80px"}} alt="" /></td>
                    <td>{item.productName}</td>
                    <td>{item.productPrice}</td>
                    <td><Button onClick={() => { handleCart(item.productId) }}>Add Cart</Button></td>
                </tr>
            ))
         }

        </tbody>
      </Table>
        </div>
    )
}

export default WishList;