import { useState } from "react";

const A9 = () => {

  const students = [
    { name: "Arjun", age: 17, grade: "A" },
    { name: "Sanjay", age: 18, grade: "B" },
    { name: "Priya", age: 16, grade: "A" },
    { name: "Meera", age: 17, grade: "C" },
    { name: "Vikram", age: 18, grade: "B" },
    { name: "Rahul", age: 17, grade: "A" },
    { name: "Ananya", age: 16, grade: "A" },
    { name: "Karthik", age: 18, grade: "C" },
    { name: "Dinesh", age: 17, grade: "B" },
    { name: "Lavanya", age: 16, grade: "A" },
    { name: "Rohit", age: 17, grade: "B" },
    { name: "Suresh", age: 18, grade: "C" },
    { name: "Harini", age: 16, grade: "A" },
    { name: "Naveen", age: 17, grade: "B" },
    { name: "Swathi", age: 18, grade: "A" }
  ];

  const [text, setText] = useState("");

  // Filter logic
  const filteredStudents = students.filter((st) =>
    st.name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border px-2 py-1"
        type="text"
        placeholder="Search student..."
      />

      {/* Display Results */}
      <div className="mt-4">
        {filteredStudents.length > 0 ? (
          filteredStudents.map((st) => (
            <div
              key={st.name}
              className="border p-2 mb-2 rounded bg-gray-100"
            >
              <p><strong>Name:</strong> {st.name}</p>
              <p><strong>Age:</strong> {st.age}</p>
              <p><strong>Grade:</strong> {st.grade}</p>
            </div>
          ))
        ) : (
          <p>No student found</p>
        )}
      </div>
    </div>
  );
};

export default A9;
