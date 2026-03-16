import axios from "axios";
import { useState } from "react";

export default function Login() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://nivesh-stock-trading-platform-fsx2.onrender.com/login",
        form
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("username", res.data.name);

      window.location.href =
        "https://nivesh-trading-dashboard-o5cr-vanshika27-ks-projects.vercel.app?token=" +
        res.data.token;

    } catch (err) {
      alert(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="light-bg">
      <div className="glass-card">
        <h2>Login to Nivesh</h2>

        <form onSubmit={handleSubmit}>
          <div className="floating-group">
            <input
              type="email"
              name="email"
              value={form.email}
              required
              onChange={handleChange}
              placeholder=" "
            />
            <label>Email</label>
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

          <button type="submit" className="glass-btn">
            Login
          </button>

          <p style={{ textAlign: "center", marginTop: "15px", color: "white" }}>
            Don't have an account?{" "}
            <a
              href="/signup"
              style={{
                color: "#ffffff",
                fontWeight: "600",
                textDecoration: "underline"
              }}
            >
              Signup
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}