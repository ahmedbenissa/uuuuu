import react from "react";
import styled from "styled-components";
import list from './ListProducts.json';
import React, { useState, useEffect }  from 'react';
import Product0 from "./Product";
export default function Products(){
    const ProductsWrapper = styled.div `
 text-align: center; 
 display: flex;`;
 const [products, setProducts] = useState([]);
 useEffect(() => {
    fetch("http://localhost:3008/api/products")
        .then(res => res.json())
        .then(
            (data) => {
                
                setProducts(data);
                console.log(data)
             
            },
            (error) => {
               console.log(error)
            }
        )
  }, [])
 return (
     <ProductsWrapper>{products.map((product,index)=>{
        return  <Product0 product={product}></Product0>
     })}</ProductsWrapper>
 )


}