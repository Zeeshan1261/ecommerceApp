import React, { useEffect,useState } from "react";

function Products() {
  const[items,setItems] = useState([])
   console.log(items);
  useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>setItems(json))
},[])

const[cart,setCart] = useState([items])
return( 
    <>  <h1 className="h1">E commerce-Store</h1>   
    {cart.map((data)=> {
      return(
        <div> 
          <h1>{data.id}</h1>       
          <button onClick={()=> {console.log(data)}}>Cart</button>
        </div>       
      )
    })}
    {items.map((lists)=> {
        return(  
 <div>
    <div className="img">
    <img  width={300} height={300} src={lists.image}></img>       
    </div>  
    <div className="data">
    <h1>{lists.category}</h1> <br></br>
    {/* <h1>{lists.description}</h1> */}
    <h1>{lists.id}</h1> <br></br>
    <p> <br></br> Price :${lists.price}</p> 
    <h1>{lists.title}</h1> <br></br>
    </div>
    <div>
   <button className="btn1" onClick={()=> {console.log(lists)}} >Add to Cart</button> 
    </div> 
 </div>
 
 )
    })}
    </>
)
}
export default Products
