

function  Child({showAlert})  {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black"> 
          <button className="border border-amber-50 text-amber-50  h-8 w-10 " onClick={showAlert}>click</button>
    </div>

  )
}

export default Child
