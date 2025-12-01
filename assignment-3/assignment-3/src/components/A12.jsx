import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(res => {
        setProducts(res.data.products);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);    
      });
  }, []);

  if (loading) {
    return <p className="text-center text-xl">Loading...</p>;
  }

  return (
    <div className="flex flex-wrap">
      {products.map((item) => (
        <div key={item.id} className="border p-3 w-48 m-2 rounded">
          <p><strong>Name:</strong> {item.title}</p>
          <p><strong>Price:</strong> ${item.price}</p>
          <p><strong>Brand:</strong> {item.brand}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
