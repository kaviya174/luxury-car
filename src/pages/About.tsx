import React from "react";
import Navbar from "../components/Navbar";
import showroom from "../assets/images/showroom.png";
import showrron1 from "../assets/images/showrron1.png";
import customer from "../assets/images/customer.png";

const About: React.FC = () => {
  return (
    <>
      <Navbar />

      <section className="about-section py-5">
        <div className="container">
          <h2 className="text-center about-title mb-5">About Us</h2>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src={showroom} alt="Showroom" className="img-fluid about-img" />
            </div>
            <div className="col-lg-6">
              <div className="about-text-box">
                <h3>Welcome to Luxury Cars</h3>
                <p>
                  Luxury Cars is a premium car showroom that offers a wide range
                  of modern and luxury vehicles.
                </p>
                <p>
                  Our showroom is designed to give customers a stylish and
                  comfortable experience.
                </p>
                <p>
                  We proudly display top-quality cars from trusted and popular
                  brands.
                </p>
                <p>
                  Every vehicle in our showroom is selected for performance,
                  comfort, and elegance.
                </p>
                <p>
                  We believe that buying a car should be a happy and memorable
                  journey.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center flex-lg-row-reverse mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src={showrron1} alt="Luxury Cars" className="img-fluid about-img" />
            </div>
            <div className="col-lg-6">
              <div className="about-text-box">
                <h3>Our Luxury Experience</h3>
                <p>
                  Our spacious showroom allows customers to explore different car
                  models with ease.
                </p>
                <p>
                  We focus on bringing the latest designs and advanced technology
                  to our customers.
                </p>
                <p>
                  Each car reflects quality, innovation, and premium driving
                  experience.
                </p>
                <p>
                  Our team is always ready to guide customers in choosing the
                  perfect car.
                </p>
                <p>
                  At Luxury Cars, we make sure every visit feels special and
                  professional.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img src={customer} alt="Customer" className="img-fluid about-img" />
            </div>
            <div className="col-lg-6">
              <div className="about-text-box">
                <h3>Customer Satisfaction</h3>
                <p>
                  Customer satisfaction is the heart of our showroom and service.
                </p>
                <p>
                  We listen carefully to customer needs and help them find their
                  dream car.
                </p>
                <p>
                  Many happy customers trust us for quality vehicles and friendly
                  support.
                </p>
                <p>
                  We are committed to honesty, service, and long-term customer
                  relationships.
                </p>
                <p>
                  Luxury Cars is here to make your dream of owning a premium car
                  come true.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;