import React, {useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import "../styles/register.css";
import { useNavigate, useParams } from "react-router";

const UpdateProduct = () => {

    const[ category , setCategory ] = useState("");
    const[ productImg , setProductImg ] = useState("");
    const[ productName , setProductName ] = useState("");
    const[ productPrice , setProductPrice ] = useState("");
    const[ quantity , setQuantity ] = useState("");

    const params = useParams();

    const productId = params.productId;

    console.log(productId);


    useEffect(() => {

        let username = sessionStorage.getItem('username');
        // let role = sessionStorage.getItem('role');

        // console.log(username);
        if (username === '' || username === null ) {
            // useNavigate('/');
        }

        fetch("http://localhost:8082/product/getProduct/" + productId )
            .then((res) => {
                return res.json();

            }).then((resp) => {
                console.log(resp);
                setCategory(resp.category);
                setProductImg(resp.productImg);
                setProductName(resp.productName);
                setProductPrice(resp.productPrice);
                setQuantity(resp.quantity);
               
            }).catch((err) => {
                console.log(err.message);
            })

    }, []);


    const submit = () =>{

        let product = {productId,category , productImg , productName, productPrice ,quantity};

        fetch("http://localhost:8082/product/update" ,
        { method:"PUT", headers:{'content-type':'application/json'},body:JSON.stringify(product) })
        .then ((response) => {
          console.log ( ' Product Updated Successfully ');
           alert ('  Product Updated  Successfully '); 
           window.location.href="/CrudProduct";
          
          })
        .catch ((error) => {console.log('Error Due to ' +error);alert ( 'Error Due to ' +error)});


    }

    return(
        <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={submit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
    
            <div className="form-group mt-3">
              <label>Category</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Product Category"
                required
                value={category}
                onChange = {e => setCategory(e.target.value)}
              />
            </div>
    
            <div className="form-group mt-3">
              <label>Product Img</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Img URL"
                required
                value={productImg}
                onChange = {e => setProductImg(e.target.value)}
              />
            </div>
    
            <div className="form-group mt-3">
              <label>Product Name</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Name"
                required
                value={productName}
                onChange = {e => setProductName(e.target.value)}
              />
            </div>
    
            <div className="form-group mt-3">
              <label>Product Price</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Product Price"
                required
                value={productPrice}
                onChange = {e => setProductPrice(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <label>Quantity</label>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Product Price"
                required
                value={quantity}
                onChange = {e => setQuantity(e.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <br></br>
            
            </div>
    
            <div className="d-grid gap-2 mt-3">
            <Link to = "/AdminHomePage" class="link-success">Back</Link>
            
            </div>
          </div>
        </form>
      </div>
    )
}

export default UpdateProduct;