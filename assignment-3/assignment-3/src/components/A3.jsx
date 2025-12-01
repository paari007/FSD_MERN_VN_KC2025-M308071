const A3 = ({ name, role, image }) => {
  return (
    
      <div className="border w-52 h-80 p-3">
        <img 
          src={image}  
          className="w-full h-40 object-cover" 
          alt="Profile"
        />

        <p className="mt-2 font-semibold">Name: {name}</p>
        <p>Role: {role}</p>
      </div>
    
  );
};

export default A3;
