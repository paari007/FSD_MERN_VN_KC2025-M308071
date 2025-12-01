import { useState } from "react";
import axios from "axios";

const A16 = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    try {
      const newPost = {
        title: title,
        body: body,
        userId: 1
      };

      const response = await axios.post(
        "https://dummyjson.com/posts/add",
        newPost
      );

      console.log(response.data);

      setMessage("Post Added!");   
      setTitle("");                  
      setBody("");
    } catch (error) {
      console.error(error);
      setMessage("Error adding post");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add New Post</h2>

      <input
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "250px" }}
      />

      <textarea
        placeholder="Enter body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        style={{ display: "block", marginBottom: "10px", width: "250px", height: "80px" }}
      />

      <button onClick={handleSubmit}>Submit</button>

      {message && <p style={{ marginTop: "15px" }}>{message}</p>}
    </div>
  );
};

export default A16;
