import { useState } from "react"

const A4 = () => {


  const [text,setText] = useState("")

  return (
    <> 
    <input className="border" value={text} onChange={(e)=>{setText(e.target.value)}} placeholder="NIGGA TYPE SOMETHING" />
     <p>{text}</p>
    </>
  )
}

export default A4
