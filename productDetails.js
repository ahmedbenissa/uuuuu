import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import Product from "./Product";
import ListProducts from "./ListProducts.json"
import styled from "styled-components";
export default function ProductDetails(props)
{ const  userName  = useParams()
  /**http://localhost:3008/api/product/620bfb382ca600218c215691**/
  const [product, setProduct] = useState([]);
  useEffect(() => {
     fetch("http://localhost:3008/api/product/"+userName.name)
         .then(res => res.json())
         .then(
             (data) => {
                 
                 setProduct(data);
                 console.log(data)
              
             },
             (error) => {
                console.log(error)
             }
         )
   }, [])
    const a=product
    console.log(a)
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
  
   
   return (
       <Container>
           {
               a ? (<ContentBox><Content1><img src={a.img}></img></Content1>
               <Content2><H1>{a.name}</H1><H3>Description</H3>
               <Span>{a.description}</Span>
               </Content2></ContentBox>):(<div>product not found</div>)
           }
       </Container>
   )
}