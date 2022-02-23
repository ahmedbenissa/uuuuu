import React,{useState,useEffect} from "react";
import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";
export default function Product(props)
{
const  [product,setProduct]=useState(props.product)  
const AppFrame = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;
const ProductFrame = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: rgb(110, 110, 110, 0.7);
  margin: 10px;
  display: flex;
  flex-direction: column;
 
`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImage = styled.img`
  width: 85%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
const ProductFrameBest = styled.div`
  border-radius: 25px;
  min-height: 200px;
  min-width: 200px;
  background-color: #DB7093;
  margin: 10px;
  display: flex;
  flex-direction: column;
  animation:  clignote 2s linear infinite;
  @keyframes clignote {  
  50% { opacity: 0.5; }
}
`;
const ProductImageWrapperBest = styled.div`
  margin: 5px;
  max-width: 200px;
`;
const ProductImageBest = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapperBest = styled.div`
  color:white;
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1.5em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;



const ProductsWrapper = styled.div`
  text-align: center;
  display: flex;
`;
const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.5fr 0.5fr;
  grid-template-areas:
    "content content"
    "footer footer";
  text-align: left;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1.2fr 1fr;
    grid-template-areas:
      "content"
      "footer";
  }
  color: black;
`;
const ContentBox = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const Content1 = styled.div`
  background: transparent !important;
  padding: 0.25rem;
  width: 40%;
  height: 100%;
`;
const Content2 = styled.div`
background: transparent !important;
padding: 0.25rem;
width: 60%;
height: 100%;
`;;
const Footer = styled.footer`
  background: transparent;
  grid-area: footer;
  padding: 0.25rem;
  text-align: right !important;
`;


const H1 = styled.h1`
  font-size: 3.5em;
  font-weight: bold;
`;

const H3 = styled.h3`
  color: palevioletred;
  font-size: 1.25em;
  font-weight: bold;
`;
const Span = styled.span`
  color: grey;
  font-size: 1.25em;
`;
function deleteRow(id,e){  
  axios.delete(`http://localhost:3008/api/product/${id}`)  
    .then(res => {  
      console.log(res);  
      console.log(res.data);  
  
     
    })  
  
}  
    const AddLikes = ()=>{
      setProduct({...product,likes:Number(product.likes)+1})
    }
    return (
        product.likes>=5 ?(
            <ProductFrameBest>
                <Span>Best...product</Span>
            
            <Span><a href={"/products/"+product._id}>{product.title}</a></Span>
            <p><ProductInfoWrapperBest>{product.price}</ProductInfoWrapperBest></p>
            <p><ProductInfoWrapperBest>{product.likes}</ProductInfoWrapperBest></p>
            <Button onClick={AddLikes}>Like</Button>
            </ProductFrameBest>
        )
        :(
            <ProductFrame>
            <p><ProductImage src={product.image}></ProductImage></p>
            <Span><a href={"/products/" + product._id}>{product.title}</a></Span>
            <p><ProductInfoWrapper>{product.price}</ProductInfoWrapper></p>
            <p><ProductInfoWrapper>{product.likes}</ProductInfoWrapper></p>
            <Button onClick={AddLikes}>Like</Button>
            <Button onClick={e=>deleteRow(product._id,e)}>Delete</Button>
            </ProductFrame>
        )
    )
    

    

}