import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    subject: "",
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
      phone: "",
      city: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <Navbar />

      <section className="contact-section">
        <div className="container">
          <div className="contact-header text-center">
            <p className="contact-top-text">LUXURY CAR SHOWROOM</p>
            <h1 className="contact-title">Contact Our Showroom</h1>
            <p className="contact-subtitle">
              We are here to help you find your dream car. Contact our team for
              car details, premium services, and showroom support.
            </p>
          </div>

          <div className="row g-4 align-items-stretch">
            <div className="col-lg-4">
              <div className="contact-info-box h-100">
                <h3 className="contact-box-title">Showroom Details</h3>

                <div className="contact-info-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <h5>Address</h5>
                    <p>Anna Nagar, Chennai, Tamil Nadu</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <h5>Phone</h5>
                    <p>+91 9876543210</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <h5>Email</h5>
                    <p>luxurycars@email.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <span className="contact-icon">⏰</span>
                  <div>
                    <h5>Working Hours</h5>
                    <p>Mon - Sat : 9.00 AM - 8.00 PM</p>
                  </div>
                </div>

                <div className="contact-mini-card">
                  <h4>Need Premium Assistance?</h4>
                  <p>
                    Our showroom team is ready to guide you with luxury cars,
                    test drive bookings, and premium support.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="contact-form-box h-100">
                <h3 className="contact-box-title">Send Us a Message</h3>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="contact-label">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        className="form-control contact-input"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
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

                    <div className="col-md-6 mb-3">
                      <label className="contact-label">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="Enter your phone number"
                        className="form-control contact-input"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="contact-label">City</label>
                      <input
                        type="text"
                        name="city"
                        placeholder="Enter your city"
                        className="form-control contact-input"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12 mb-3">
                      <label className="contact-label">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Enter subject"
                        className="form-control contact-input"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12 mb-4">
                      <label className="contact-label">Message</label>
                      <textarea
                        name="message"
                        placeholder="Write your message here..."
                        className="form-control contact-textarea"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="contact-btn">
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