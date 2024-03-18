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
import { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/esm/Button';

const Cartt = () => {


    let userName = sessionStorage.getItem('userName');
    const [cart, setCart] = useState("");
    const [quantity, setQuantity] = useState("");
    const [isShown, setIsShown] = useState(false);
    const [e1, setE1] = useState("");
    const navigate = useNavigate();


    useEffect(() => {


        console.log(userName);
        // let role = sessionStorage.getItem('role');
        // console.log(username);
        if (userName === '' || userName === null) {
            navigate('/');
        }

        fetch("http://localhost:8084/cart/getCartByUserName/" + userName)
            .then((res) => {
                return res.json();

            }).then((resp) => {
                console.log(resp);
                setCart(resp);

            }).catch((err) => {
                console.log(err.message);
            })

    }, []);

    const handleOrder = (productId) => {

        let userName = sessionStorage.getItem('userName');

        var order = {userName , productId};

        fetch("http://localhost:8085/order/placedOrder",
        { method:"POST", headers:{'content-type':'application/json'},body:JSON.stringify(order) })
        .then ((response) => {
          console.log ( ' Order Placed Sucesfully ');
           alert (' Order Placed Sucesfully '); 
          
          })
        .catch ((error) => {console.log('Error Due to ' +error);alert ( 'Error Due to ' +error)});

    }


    return (
        <div className='main-div'>

            <Navbar color="" light expand="md" style={{
                display: 'block', width: 1500, padding: 5
            }}>
                <NavbarBrand ><Link to="/UserHomePage" style={{color:"black"}}>Home</Link></NavbarBrand>

                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink><Link to='/WishList' style={{color:"black"}}>wishList</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to='/SortLowToHigh' style={{color:"black"}}>Sort High TO Low</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to='/LoginRegister' style={{color:"black"}}>Logout</Link></NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink><h6 style={{marginLeft:"480px" , color:"black" }} >Hii... {sessionStorage.getItem('userName')}</h6></NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            <center><h3 style={{color:"black"}}>YOUR CART</h3></center>

            <br></br>
            <br></br>
            <br></br>
            <br></br>




            <Table striped>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Product Img</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Quantity</th>
                        <th>Order</th>

                    </tr>
                </thead>
                <tbody>


                    {cart &&
                        cart.map(item => (
                            <tr key={item.cartId}>
                                <td>{item.cartId}</td>
                                <td><img src={item.productImg} style={{height:"80px"}} alt="" /></td>
                                <td>{item.productName}</td>
                                <td>{item.productPrice}</td>
                                <td>{item.quantity}</td>

                                <td><Button onClick={() => { handleOrder(item.productId) }}>Order</Button></td>



                            </tr>
                        ))
                    }

                </tbody>
            </Table>

        </div>
    )
}

export default Cartt;