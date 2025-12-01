import { useEffect, useState } from "react";
import axios from "axios";

const A17 = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const [loading, setLoading] = useState(true);   
  const [saving, setSaving] = useState(false);   
  const [message, setMessage] = useState("");     
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        setMessage("");
        const res = await axios.get("https://dummyjson.com/users/1");
        const data = res.data || {};


        setUser({
          firstName: data.firstName || "",
          lastName: data.lastName || "",
          email: data.email || "",
          phone: data.phone || ""
        });
      } catch (err) {
        console.error("Fetch error:", err);
        setMessage("Error fetching user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setSaving(true);

    try {
      const res = await axios.put("https://dummyjson.com/users/1", user);
      console.log("PUT response:", res.data);
      setMessage("User updated successfully!");
    } catch (err) {
      console.error("Update error:", err);
      setMessage("Error updating user");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <p style={{ padding: 16 }}>Loading user...</p>;
  }

  return (
    <div style={{ padding: 16, maxWidth: 480 }}>
      <h2>Edit User (id: 1)</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 8 }}>
          <label style={{ display: "block", marginBottom: 4 }}>First name</label>
          <input
          className="border"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            type="text"
            style={{ width: "100%", padding: 8 }}
            required
          />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label style={{ display: "block", marginBottom: 4 }}>Last name</label>
          <input
           className="border"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            type="text"
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div style={{ marginBottom: 8 }}>
          <label style={{ display: "block", marginBottom: 4 }}>Email</label>
          <input
           className="border"
            name="email"
            value={user.email}
            onChange={handleChange}
            type="email"
            style={{ width: "100%", padding: 8 }}
            required
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label style={{ display: "block", marginBottom: 4 }}>Phone</label>
          <input
           className="border"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            type="text"
            style={{ width: "100%", padding: 8 }}
          />
        </div>

        <div>
          <button
            type="submit"
            disabled={saving}
            style={{
              padding: "8px 14px",
              cursor: saving ? "not-allowed" : "pointer"
            }}
          >
            {saving ? "Saving..." : "Update User"}
          </button>
        </div>
      </form>

      {message && (
        <p style={{ marginTop: 12, color: message.startsWith("Error") ? "crimson" : "green" }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default A17;
