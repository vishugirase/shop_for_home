import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import "../styles/register.css";
import Navbar from './Navbar';

const AddProduct = () => {

  const[ productId , setProductId ] = useState("");
  const[ category , setCategory ] = useState("");
  const[ productImg1 , setProductImg ] = useState("");
  const[ productName , setProductName ] = useState("");
  const[ productPrice , setProductPrice ] = useState("");
  const[ quantity , setQuantity ] = useState("");

  const submit = (e) => {

    e.preventDefault();
   

    var productImg ="../Assets/"+ productImg1.substring(12 , productImg1.length);
    let product = {productId , category , productImg , productName, productPrice ,quantity};

    console.log(productImg);
    console.log(product);

    fetch("http://localhost:8082/product/add" ,
    { method:"POST", headers:{'content-type':'application/json'},body:JSON.stringify(product) })
    .then ((response) => {
      console.log ( ' Product Added Successfully ');
       alert ('  Product Added  Successfully '); 
       window.location.href="/CrudProduct";
      
      })
    .catch ((error) => {console.log('Error Due to ' +error);alert ( 'Error Due to ' +error)});

  }

  return (
    <>
    <Navbar/>
    <div className="Auth-form-container">
    <form className="Auth-form" onSubmit={submit}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign Up</h3>
        <div className="form-group mt-3">
          <label>ProductId</label>
          <input
            type="text"
            className="form-control mt-1"
            placeholder="Enter Product Id"
            required
            value={productId}
            onChange = {e => setProductId(e.target.value)}
          />
        </div>

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
            type="file"
            className="form-control mt-1"
            placeholder="Enter Img URL"
            required
            value={productImg1}
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
  </>
)
}
export default AddProduct;