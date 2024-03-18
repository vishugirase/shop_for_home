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
import { useEffect, useState } from "react";
import { Table } from 'reactstrap';
import Button from 'react-bootstrap/esm/Button';
import "../styles/crud_Product.css"


import 'bootstrap/dist/css/bootstrap.min.css'
const CurdProduct = () => {

    const[ search , setSearch ] = useState("");
    const [product, setProduct] = useState("");

    const navigate = useNavigate();


    useEffect(() => {

        // let username = sessionStorage.getItem('username');
        // let role = sessionStorage.getItem('role');

        // console.log(username);
        // if (username === '' || username === null || role !== 'admin') {
        //     usenavigate('/');
        // }

        fetch("http://localhost:8082/product/getAllProducts")
            .then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp);
                setProduct(resp);
            }).catch((err) => {
                console.log(err.message);
            })

    }, []);

    async function handleDelete  (productId)  {
       await fetch("http://localhost:8082/product/delete/" + productId, {
            method: "DELETE"
        })
            .then(() => {
                
            }).catch((err) => {
                console.log(err.message);
                alert('Item not Deleted');
            })


            fetch("http://localhost:8082/product/getAllProducts")
            .then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp);
                setProduct(resp);
            }).catch((err) => {
                console.log(err.message);
            })

    }

    const handleUpdate = (productId) => {

        navigate('/UpdateProduct/' + productId);
    }

    return (
        <>

        <div className='main-div'>

            <Navbar light expand="md" style={{
                display: 'block', width: 1500, padding: 5
            }}>

                <br></br>
                <Collapse navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink><Link to="/AdminHomePage" style={{color:"black"}}>Home</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/AddProduct" style={{color:"black"}}>Add Product</Link></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink><Link to="/LoginRegister" style={{color:"black"}}>Logout</Link></NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
            <div className='xyz'><center><h2>PRODUCT</h2></center></div>
            <center><input style={{alignContent:'center',width:"400px"}}
                type="search"
                className="form-control mt-1"
                placeholder="Enter Product Name"
                required
                value={search}
                onChange = {e => setSearch(e.target.value)}
                 /></center>
            <hr/>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Table striped>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Category</th>
                        <th>Product Img</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody id='tablebody'>


                    {
                        product &&
                        product.filter(data => data.productName.toLowerCase().includes(search.toLowerCase())).map(item => (
                            <tr key={item.productId}>
                                <td>{item.productId}</td>
                                <td>{item.category}</td>
                                <td><img src={item.productImg} style={{height:"100px", width:"100px"}} alt="" /></td>
                                <td>{item.productName}</td>
                                <td>{item.productPrice}</td>
                                <td>{item.quantity}</td>

                                

                                <td><Button onClick={() => { handleDelete(item.productId) }}>Delete</Button></td>
                                <td><Button onClick={() => { handleUpdate(item.productId) }}>Update</Button></td>


                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        </div >
        </>
    )

}
export default CurdProduct;


















