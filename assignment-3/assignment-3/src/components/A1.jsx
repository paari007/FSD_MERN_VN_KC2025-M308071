import Foul from '../assets/foul.png'

function A1() {

  const stDetails = [
    {
      name:'vinoth',
      dept:"Bme",
      year:1
    },
    {
      name:'vasanth',
      dept:"Cse",
      year:2
    },
    {
      name:'Dheena',
      dept:"mech",
      year:3
     }]
  
  return (
   
   <div className='flex gap-x-2'>
   
  {stDetails.map((st)=>{
    
    return (
      <div className="border w-50 h-80">
          <img src={Foul}  className="w-full h-40 object-cover" alt='Foul'/>
          <p > Name : {st.name}</p>
          <p>Dept  : {st.dept} </p>
          <p>Year : {st.year}</p>
      </div>
     ) 

  })} 
   </div>

  )
}

export default A1
