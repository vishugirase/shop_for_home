import React from 'react'
import  { useEffect,useState } from "react";
import { Table } from 'reactstrap';

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
const Coupons = () => {


    const[ category , setCategory ] = useState("");
    let userName = sessionStorage.getItem('userName');
    const[coupon , setCoupon] = useState("");

    useEffect(() => {

       
        console.log(userName);
        // let role = sessionStorage.getItem('role');
        // console.log(username);
        // if (username === '' || username === null || role !== 'admin') {
        //     usenavigate('/');
        // }

        fetch("http://localhost:8085/coupon/getCoupon/" +userName)
            .then((res) => {
                return res.json();

            }).then((resp) => {
                console.log(resp);
                setCoupon(resp);
               
            }).catch((err) => {
                console.log(err.message);
            })

    }, []);

    return (

        <div >
           
        <Navbar color="light" light expand="md"  style={{
        display: 'block', width: 1500, padding: 5
    }}>
           
          
            <Collapse  navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink><Link to = '/UserHomePage'>Home</Link></NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink><Link to = '/LoginRegister'>Logout</Link></NavLink>
                    </NavItem>
                </Nav>
                <Nav>
                
              </Nav>

            </Collapse>
        </Navbar>
       
        <center><h2 style={{color : 'blue',padding: 30 , backgroundColor :'purple'}}>YOUR COUPON</h2></center>

        <Table striped>
        <thead>
          <tr>
            <th>Coupon Code</th>
            <th>Valid Or Not</th>
            <th>Discount</th>
            
          </tr>
        </thead>
        <tbody>

         
         {coupon &&
            coupon.map(item => (

                <tr key={item.couponCode}>
                    <td>{item.couponCode}</td>
                    <td>{item.used}</td>
                    <td>{item.disc}</td>
                </tr>
            ))
         }

        </tbody>
      </Table>
        </div >
    )
}

export default Coupons;