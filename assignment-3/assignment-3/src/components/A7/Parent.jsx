import Child from "./Child"

const Parent = () => {

  const showAlert = ()=>{
    alert('nigga what')
  }


  return (
    <div>
       <Child  showAlert={showAlert}/>
    </div>
  )
}

export default Parent
