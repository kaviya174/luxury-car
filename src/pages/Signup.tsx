import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    localStorage.setItem("signupName", formData.name);
    localStorage.setItem("signupEmail", formData.email);
    localStorage.setItem("signupPassword", formData.password);

    alert("Signup successful! Please login.");
    navigate("/login");
  };

 return (
  <>
    <Navbar />

    <section className="contact-section">
      <div className="container">

        <div className="contact-header text-center">
          <p className="contact-top-text">LUXURY CAR SHOWROOM</p>
          <h1 className="contact-title">Create Your Account</h1>
          <p className="contact-subtitle">
            Sign up to explore luxury cars, book test drives, and get premium showroom support.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-6">

            <div className="contact-form-box">

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label className="contact-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="form-control contact-input"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

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

                <div className="mb-3">
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

                <div className="mb-4">
                  <label className="contact-label">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className="form-control contact-input"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="contact-btn">
                  Sign Up
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

export default Signup;