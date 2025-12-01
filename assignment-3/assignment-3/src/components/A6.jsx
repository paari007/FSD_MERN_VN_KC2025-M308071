

const A6 = () => {

const data = [
  {id:1,
  product:'Shoe',
  price : 44
  },
  {id:2,
  product:'t-shirt',
  price : 20
  },

]

  return (
    <div>
        <table class="table-auto border-collapse border border-gray-400">
  <thead>
    <tr class="bg-gray-200">
      <th class="border border-gray-400 px-4 py-2">Product</th>
      <th class="border border-gray-400 px-4 py-2">Price</th>
    
    </tr>
  </thead>

  {data.map((d)=>{
     return(
           
        <tbody>
    <tr key={d.id}>
      <td class="border border-gray-400 px-4 py-2">{d.product}</td>
      <td  class="border border-gray-400 px-4 py-2">${d.price}</td>
    </tr>
  </tbody>

     )
  })}
</table>

    </div>
  )
}

export default A6
