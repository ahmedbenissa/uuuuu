import React,{useState,useEffect} from "react";
import axios from "axios";
export default function Addproduct(props)
{
const [title,settitle]=useState("")
const [price,setprice]=useState(0)
const [description,setdescription]=useState("")
const [image,setimage]=useState("")
const handleChange = event => {
    settitle({title:event.target.value})
    
  }
  const handleChange1 = event => {
    setprice({price:event.target.value})
    

}
const handleChange2 = event => {
    setdescription({description:event.target.value})   
}
const handleChange3 = event => {
    setimage({image:event.target.value})   
}
const handleSubmit = event => {
    event.preventDefault();

    const Product= {
      
  title: title.title,
  description: description.description,
  price: price.price,
  likes: "0",
  
  
  
    };
console.log({Product})
axios.post(`http://localhost:3008/api/product`,Product,{
    method: 'POST',
    
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    }})
  .then(res => {
    console.log(res); 
    console.log(res.data);
  })
  }
return (
    <div>
      <form onSubmit={handleSubmit} >
        <label>
          Product title:
          <input type="text" name="product_title" onChange={handleChange}  /><br></br><br></br>
        </label>
        <label>
          Product Price:
          <input type="text" name="product_price" onChange={handleChange1}  /><br></br><br></br>
        </label>
        
        <label>
          Product description :
          <textarea type="text" name="product_description" onChange={handleChange2}></textarea><br></br><br></br>
        </label>
        <label>
        <input type="file" id="myFile" name="filename" onChange={handleChange3} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}