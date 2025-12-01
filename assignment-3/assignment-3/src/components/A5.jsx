import { useState } from "react"

const A5 = () => {

  const [name,setName] = useState("")
    const [email,setEmail] = useState("")

    const [newName,setNewName] = useState("")
    const [newEmail,setNewEmail] = useState("")


    const onSubmit = (e)=>{
      e.preventDefault();
      setNewName(name);
      setNewEmail(email);

    }

  return (
  <form>

    <label for="name" >Name : </label>
    <input className="border" value={name} onChange={(e)=>{ setName( e.target.value)}} type="text" placeholder="name nigga? name?" id="name"/>

       <label for="email" >Email : </label>
       <input className="border" value={email} onChange={(e)=>{ setEmail( e.target.value)}} type="email" placeholder="enter email" id="email" />

       <button className="border ms-4" onClick={onSubmit} >Submit</button>


       <p>{newName}</p>

        <p>{newEmail}</p>
    
  </form>

 


  )
}

export default A5
