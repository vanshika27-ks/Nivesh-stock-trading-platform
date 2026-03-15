import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const [dark, setDark] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const getStrength = () => {
    const p = form.password;
    if (p.length < 6) return "Weak";
    if (/[A-Z]/.test(p) && /\d/.test(p) && p.length >= 8) return "Strong";
    return "Medium";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://nivesh-stock-trading-platform-fsx2.onrender.com/signup", form);

      const res = await axios.post("https://nivesh-stock-trading-platform-fsx2.onrender.com/login", {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.name);

      window.location.href = "https://nivesh-trading-dashboard-o5cr.vercel.app"; // dashboard
    } catch (err) {
      alert(err.response?.data?.msg || "Signup/Login failed");
    }
  };

  return (
    <div className={dark ? "dark-bg" : "light-bg"}>
      <div className="center-wrapper">
        <div className="glass-card">
          
          <button
            className="dark-toggle"
            onClick={() => setDark(!dark)}
            type="button"
          >
            {dark ? "🌙 Dark" : "☀️ Light"}
          </button>

          <h2>Create your Nivesh account</h2>

          <form onSubmit={handleSubmit}>

            <div className="floating-group">
              <input
                type="text"
                name="name"
                value={form.name}
                required
                onChange={handleChange}
                placeholder=" "
              />
              <label>Full Name</label>
            </div>

            <div className="floating-group">
              <input
                type="email"
                name="email"
                value={form.email}
                required
                onChange={handleChange}
                placeholder=" "
              />
              <label>Email Address</label>
            </div>

            <div className="floating-group">
              <input
                type="password"
                name="password"
                value={form.password}
                required
                onChange={handleChange}
                placeholder=" "
              />
              <label>Password</label>
            </div>

            <p className={`strength ${getStrength().toLowerCase()}`}>
              Password strength: {getStrength()}
            </p>

            <div className="floating-group">
              <input
                type="number"
                name="age"
                value={form.age}
                required
                onChange={handleChange}
                placeholder=" "
              />
              <label>Age</label>
            </div>

            <button type="submit" className="glass-btn">
              Sign Up
            </button>
            <p style={{ textAlign: "center", marginTop: "15px", color: "white" }}>
  Already have an account?{" "}
  <a
    href="/login"
    style={{ color: "#ffffff", fontWeight: "600", textDecoration: "underline" }}
  >
    Login
  </a>
</p>

          </form>
        </div>
      </div>
    </div>
  );
}