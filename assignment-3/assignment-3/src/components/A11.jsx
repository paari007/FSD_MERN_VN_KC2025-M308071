import axios from'axios';
import {useState, useEffect } from 'react';

const A11 = () => {


  const [products,setProducts] = useState([]);




  useEffect(()=>{

   axios.get('https://dummyjson.com/products')
   .then((res)=>{
         setProducts(res.data.products)
         console.log(res.data.products);
         
   })


  },[])

 


  return (
      <div className='flex flex-wrap'>
    {
      products.map((product) => {
        return (
          <div key={product.id} className='border w-40 h-50 m-2'>
            <img src={product.thumbnail} c className='w-40 h-25 object-cover' />
            <p>Name: {product.title} </p>
            <p>Price:$ {product.price} </p>
            <p>stock:{product.stock}</p>

          </div>
        )
      })
    }
    </div>
  )
}

export default A11
