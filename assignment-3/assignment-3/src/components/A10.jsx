import products from '../data/data.json';
import image from '../../src/assets/Foul.png'




const A10 = () => {

  console.log(products);

  return (
    <div className='flex flex-wrap'>
    {
      products.map((product) => {
        return (
          <div key={product.id} className='border w-40 h-50 m-2'>
            <img src={image} c className='w-40 h-25 object-cover' />
            <p>Name: {product.name} </p>
            <p>Price: {product.price} $</p>
            <p>Category:{product.category}</p>

          </div>
        )
      })
    }
    </div>
  )
}

export default A10

