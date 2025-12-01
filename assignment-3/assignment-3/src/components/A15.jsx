import { useState } from "react";

const Profile = () => {

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [temp, setTemp] = useState({ ...profile }); // temporary values while typing

  const handleSave = () => {
    setProfile({ ...temp });   // update actual profile only when Save is clicked
    alert("Profile Updated!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Update Profile</h2>

      <div>
        <label>Name:</label><br />
        <input
          type="text"
          value={temp.name}
          onChange={(e) => setTemp({ ...temp, name: e.target.value })}
        />
      </div>

      <div>
        <label>Email:</label><br />
        <input
          type="email"
          value={temp.email}
          onChange={(e) => setTemp({ ...temp, email: e.target.value })}
        />
      </div>

      <div>
        <label>Phone:</label><br />
        <input
          type="number"
          value={temp.phone}
          onChange={(e) => setTemp({ ...temp, phone: e.target.value })}
        />
      </div>

      <button onClick={handleSave} style={{ marginTop: "10px" }}>
        Save
      </button>

      <hr />

      <h3>Your Saved Profile:</h3>
      <p><b>Name:</b> {profile.name}</p>
      <p><b>Email:</b> {profile.email}</p>
      <p><b>Phone:</b> {profile.phone}</p>
    </div>
  );
};

export default Profile;
