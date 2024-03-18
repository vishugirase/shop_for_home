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
import  { useEffect,useState } from "react";
import { Table } from 'reactstrap';


const SalesReport = () => {

    const[report , setReport] = useState("");

    useEffect(() => {

        // let username = sessionStorage.getItem('username');
        // let role = sessionStorage.getItem('role');

        // console.log(username);
        // if (username === '' || username === null || role !== 'admin') {
        //     usenavigate('/');
        // }

        fetch("http://localhost:8085/order/salesReport")
            .then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp);
                setReport(resp);
            }).catch((err) => {
                console.log(err.message);
            })

    }, []);

    return(
        <div className='main-div'>
            
        <Navbar color="" light expand="md"  style={{
        display: 'block', width: 1500, padding: 5
    }}>
            <br></br>
            <NavbarBrand ><Link to = "/AdminHomePage" style={{color:"black"}}>Home</Link></NavbarBrand>
          
            <Collapse  navbar>
                <Nav className="mr-auto" navbar>
                    {/* <NavItem>
                        <NavLink><Link to = "/SalesReport" style={{color:"black"}}>This Month</Link></NavLink>
                    </NavItem> */}
                    <NavItem>
                        <NavLink><Link to = "/LoginRegister" style={{color:"black"}}>Logout</Link></NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>

        <center><h2 style={{color : 'black',padding: 20}}>SALES REPORT</h2></center>


        <Table striped>
        <thead>
          <tr>
           
            <th>Order Id</th>
            <th>Date</th>
            <th>Product Id</th>
            <th>Product Name</th>
            <th>Product Img</th>
            <th>User Name</th>
            <th>Quantity</th>
            <th>Selling Price</th>
            <th>Discount</th>
            <th>Total Bill</th>
           
           
          </tr>
        </thead>
        <tbody>

         
         {report &&
            report.map(item => (
                <tr key={item.orderId}>
                    
                    <td>{item.orderId}</td>
                    <td>{item.date}</td>
                    <td>{item.productId}</td>
                    <td>{item.productName}</td>
                    <td><img src={item.productImg} style={{height:"80px"}} alt="" /></td>
                    <td>{item.userName}</td>
                    <td>{item.quantity}</td>
                    <td>{item.sellingPrice}</td>
                    <td>{item.discount}</td>
                    <td>{item.totalBill}</td>
                  

                </tr>
            ))
         }

        </tbody>
      </Table>





    </div >



    

    )
}

export default SalesReport;