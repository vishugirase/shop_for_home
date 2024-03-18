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

const CrudUsers = () => {


    const[user , setUser] = useState("");

    const navigate = useNavigate();


    useEffect(() => {

        // let username = sessionStorage.getItem('username');
        // let role = sessionStorage.getItem('role');

        // console.log(username);
        // if (username === '' || username === null || role !== 'admin') {
        //     usenavigate('/');
        // }

        fetch("http://localhost:8081/adminCrud/display")
            .then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp);
                setUser(resp);
            }).catch((err) => {
                console.log(err.message);
            })

    }, []);

    const handleDelete = (userName) => {
        fetch("http://localhost:8081/adminCrud/delete/" + userName, {
            method: "DELETE"
        })
            .then(() => {
                alert("Item Deleted SuccessFully");
                window.location.href="/CrudUsers";
            }).catch((err) => {
                console.log(err.message);
                alert('Item not Deleted');
            })
    }

    const handleUpdate =(userName) => {

        navigate('/UpdateUser/'+userName);
    }

    const handleCoupon = (userName) => {

        var coupon = {userName};

        fetch("http://localhost:8087/coupon/setCoupon/"+userName,
        { method:"POST", headers:{'content-type':'application/json'},body:JSON.stringify(coupon) })
        .then ((response) => {
          console.log ( ' Coupon Apply Sucesfully ');
           alert (' Coupon Apply Sucesfully '); 
        //    window.location.href="/Coupons";
          
          })
        .catch ((error) => {console.log('Error Due to ' +error);alert ( 'Error Due to ' +error)});
    }

    return (

        <div className='main-div'>
        
        <Navbar color="" light expand="md"  style={{
        display: 'block', width: 1500, padding: 5
    }}>
            
            <br></br>
            <Collapse  navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                    <NavLink ><Link to = "/AdminHomePage" style={{color:"black"}}>Home</Link></NavLink>
                    </NavItem>
                    <NavItem>
                    <NavLink><Link to ="/AddUser" style={{color:"black"}}>Add User</Link></NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink><Link to ="/" style={{color:"black"}}>Logout</Link></NavLink>
                    </NavItem>
                    
                </Nav>
            </Collapse>
        </Navbar>
        <center><h2 style={{color : 'black',padding: 10}}>WELCOME TO SHOP FOR HOME</h2></center>

<br></br>
<br></br>
<br></br>
<br></br>
        <Table striped>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Password</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Delete</th>
            <th>Update</th>
            <th>Add Coupon</th>
          </tr>
        </thead>
        <tbody>

         
         {user &&
            user.map(item => (
                <tr key={item.userName}>
                    <td>{item.userName}</td>
                    <td>{item.password}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.role}</td>
                    
                    <td><Button onClick={() => { handleDelete(item.userName) }}>Delete</Button></td>
                    <td><Button onClick={() => { handleUpdate(item.userName) }}>Update</Button></td>
                    <td><Button onClick={() => { handleCoupon(item.userName) }}>Coupon</Button></td>



                </tr>
            ))
         }

        </tbody>
      </Table>
    </div >
    )
}
export default CrudUsers;



















