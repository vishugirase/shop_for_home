

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

const HomeDecor = () => {

    const[ search , setSearch ] = useState("");
    const[kitchenProduct , setKitchenProduct] = useState([]);
    const[quantity , setQuantity] = useState("1");
    const[userName , setUserName] = useState("");
    let username = sessionStorage.getItem('userName');
    const[productName , setProductName] = useState("");
    const[productPrice , setProductPrice] = useState("");
    const usenavigate = useNavigate();

    useEffect(() => {
        console.log(username);
        // let role = sessionStorage.getItem('role');
        // console.log(username);
        // if (username === '' || username === null || role !== 'admin') {
        //     usenavigate('/');
        // }

        fetch("http://localhost:8082/product/HomeDecor")
            .then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp);
                setKitchenProduct(resp);
                console.log(resp.productName);  
                setProductName(resp.productName);
                setProductPrice(resp.productPrice);
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

    const handleWishList = (productId,productName,productPrice) => {

        let userName = sessionStorage.getItem('userName');
        

        let wishList = {productId , userName,quantity,productName,productPrice};
        console.log(productName);
        console.log(productId);

        fetch("http://localhost:8084/wishList/add",
        { method:"POST", headers:{'content-type':'application/json'},body:JSON.stringify(wishList) })
        .then ((response) => {
          console.log ( ' Product Added in WishList sucessfully ');
           alert (' Product Added in WishList sucessfully '); 
          
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
                        <NavLink><Link to ='/Cartt' style={{color:"black"}}>Cart</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to ='/WishList' style={{color:"black"}}>wishList</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to ='/SortLowToHigh' style={{color:"black"}}> Sort Product</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to = '/LoginRegister' style={{color:"black"}}>Logout</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><h6 style={{marginLeft:"480px" , color:"black" }} >Hii... {sessionStorage.getItem('userName')}</h6></NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
        <hr></hr>
        <center><h3 style={{color:"black"}}>HOME DECOR PRODUCT</h3>
        <input  style={{width:"400px",justifyContent:"center"}}
                type="search"
                className="form-control mt-5"
                placeholder="search product"
                required
                value={search}
                onChange = {e => setSearch(e.target.value)}
                 /></center>



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

         
         {
            kitchenProduct.filter(data => data.productName.toLowerCase().includes(search.toLowerCase())).map(item => (
                <tr key={item.productId}>
                    <td>{item.productId}</td>
                    <td><img src={item.productImg} style={{height:"80px"}} alt="" /></td>
                    <td>{item.productName}</td>
                    <td>{item.productPrice}</td>
                    
                    <td><Button onClick={() => { handleCart(item.productId) }}>Cart</Button></td>
                    <td><Button onClick={() => { handleWishList(item.productId , item.productName,item.productPrice) }}>WishList</Button></td>


                </tr>
            ))
         }

        </tbody>
      </Table>

    
    </div >
    )
}

export default HomeDecor;