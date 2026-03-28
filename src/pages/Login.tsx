import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please fill all fields.");
      return;
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", formData.email);
    localStorage.setItem("isLoggedIn", "true");
    alert("Login successful!");
    navigate("/");
  };

 return (
  <>
    <Navbar />

    <section className="contact-section">
      <div className="container">

        <div className="contact-header text-center">
          <p className="contact-top-text">LUXURY CAR SHOWROOM</p>
          <h1 className="contact-title">Login</h1>
          <p className="contact-subtitle">
            Login to explore premium cars, book test drives, and contact our showroom team.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6">

            <div className="contact-form-box">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="contact-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="form-control contact-input"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="contact-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    className="form-control contact-input"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="contact-btn">
                  Login
                </button>

              </form>

            </div>

          </div>
        </div>

      </div>
    </section>
  </>
);
};

export default Login;