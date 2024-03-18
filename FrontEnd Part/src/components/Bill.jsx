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
import  { useEffect,useState } from "react";
import { Table } from 'reactstrap';


const Bill = () => {

    const[bill , setBill] = useState("");
    useEffect(() => {

        let userName = sessionStorage.getItem('userName');
        // let role = sessionStorage.getItem('role');

        // console.log(username);
        // if (username === '' || username === null || role !== 'admin') {
        //     usenavigate('/');
        // }

        fetch("http://localhost:8085/order/getBill/" + userName)
            .then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp);
                setBill(resp);
            }).catch((err) => {
                console.log(err.message);
            })

    }, []);

    return (


        


        <div className='main-div'>


            <Navbar color="" light expand="md" style={{
                display: 'block', width: 1500, padding: 5
            }}>
                <NavbarBrand > <Link to="/UserHomePage" className='link1'>Home</Link></NavbarBrand>

                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink><Link to='/Category' className='link1' style={{color:"black"}}>Category</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to='/Cartt' className='link1' style={{color:"black"}}>Cart</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to='/WishList' className='link1' style={{color:"black"}}>wishList</Link></NavLink>
                        </NavItem>
                       
                        <NavItem>
                            <NavLink><Link to='/' className='link1' style={{color:"black"}}>Logout</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><h6 style={{marginLeft:"500px" , color:"black" }} >Hii... {sessionStorage.getItem('userName')}</h6></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            <hr></hr>
            <center > <h3 style={{color:"black"}} >ORDER HISTORY</h3></center>

            <Table striped>
                <thead>
                    <tr>

                        <th>Order Id</th>
                        <th>Date</th>
                        <th>Product Id</th>
                        <th>Product Name</th>
                        <th>Product Img</th>
                        <th>Quantity</th>
                        <th>Selling Price</th>
                        <th>Discount</th>
                        <th>Total Bill</th>


                    </tr>
                </thead>
                <tbody>


                    {bill &&
                        bill.map(item => (
                            <tr key={item.orderId}>

                                <td>{item.orderId}</td>
                                <td>{item.date}</td>
                                <td>{item.productId}</td>
                                <td>{item.productName}</td>
                                <td><img src={item.productImg} style={{height:"80px"}} alt="" /></td>
                                <td>{item.quantity}</td>
                                <td>{item.sellingPrice}</td>
                                <td>{item.discount}</td>
                                <td>{item.totalBill}</td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default Bill;