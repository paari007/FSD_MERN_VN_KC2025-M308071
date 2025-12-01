import { useState } from "react"

const A13 = () => {
  const [fruits, setFruits] = useState(["apple", "banana", "grapes"]);
  const [text, setText] = useState("");

  const addFruit = () => {
    if (text.trim() === "") return;    
    setFruits([...fruits, text]);       
    setText("");                        
  };

  const deleteFruit = (index) => {
    const newFruits = [...fruits];
    newFruits.splice(index,1)
    setFruits(newFruits);
    };

  return (
    <div>
      <input
        className="border"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a fruit"
      />
      <button onClick={addFruit} className="border ms-2">
        Add
      </button>

      {fruits.map((fruit, index) => (
        <div key={index} className="flex items-center gap-3">
          <p>{fruit}</p>
          <button onClick={() => deleteFruit(index)} className="border px-2">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default A13;
