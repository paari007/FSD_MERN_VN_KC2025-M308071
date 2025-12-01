import axios from "axios";
import { useEffect, useState } from "react";

const A18 = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0); 

  const USERS_PER_PAGE = 5;

 
  useEffect(() => {
    axios.get("https://dummyjson.com/users?limit=20")
      .then(res => {
        setUsers(res.data.users);
      })
      .catch(err => console.log(err));
  }, []);

  
  const startIndex = page * USERS_PER_PAGE;
  const endIndex = startIndex + USERS_PER_PAGE;
  const currentUsers = users.slice(startIndex, endIndex);

  const nextPage = () => {
    if (endIndex < users.length) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-3">Users List (Pagination)</h2>

      {currentUsers.map(user => (
        <div key={user.id} className="border p-2 m-2 rounded">
          <p><strong>{user.firstName} {user.lastName}</strong></p>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
        </div>
      ))}

      <div className="mt-4 flex gap-4">
        <button
          onClick={prevPage}
          disabled={page === 0}
          className="border p-2 disabled:opacity-50"
        >
          Prev
        </button>

        <button
          onClick={nextPage}
          disabled={endIndex >= users.length}
          className="border p-2 disabled:opacity-50"
        >
          Next
        </button>
      </div>

      <p className="mt-2 text-sm">Page: {page + 1}</p>
    </div>
  );
};

export default A18;
