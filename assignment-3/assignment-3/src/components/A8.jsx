import { useState } from "react";

function A8() {
  const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Headphones", category: "Electronics" },
    { name: "T-Shirt", category: "Clothes" },
    { name: "Jeans", category: "Clothes" },
    { name: "Smartphone", category: "Electronics" }
  ];


  const [filter,setFilter]  = useState('All')

 
  const filterdedProducts = 
  filter === 'All' ? products : products.filter((p)=>p.category === filter)
 

  return (
    <>
    <div className="flex ">
      <h1>Product Filter : </h1>
      <button onClick={()=>{setFilter('All')}} className="border px-4 ms-2">All</button>
      <button onClick={()=>{setFilter('Electronics')}} className="border px-4 ms-2">Eloctronics</button>
      <button onClick={()=>{setFilter('Clothes')}} className="border px-4 ms-2">Clothes</button>
    </div>

  
  <ul>
    {filterdedProducts.map((f,i)=>{
      return(
        <li key={i}>
          {f.name }- <strong>{f.category}</strong>
        </li>
      )
    })}

  </ul>

  </>
 
  );
}

export default A8;
