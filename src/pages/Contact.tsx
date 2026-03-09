import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isLoggedIn) {
      alert("Please login first to submit your contact form.");
      return;
    }

    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <section className="contact-section py-5">
        <div className="container">
          <h2 className="text-center contact-title mb-5">
            Contact Our Showroom
          </h2>

          <div className="row">
            <div className="col-lg-4 mb-4">
              <div className="contact-info-box">
                <h3>Showroom Details</h3>
                <p>📍 Anna Nagar, Chennai</p>
                <p>📞 +91 9876543210</p>
                <p>📧 luxurycars@email.com</p>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="contact-form-box">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control mb-3"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-control mb-3"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="form-control mb-3"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>

                  <button type="submit" className="btn btn-dark px-4">
                    Send Message
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

export default Contact;