import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import showroom from "../assets/images/showroom.png";
import showrron1 from "../assets/images/showrron1.png";
import customer from "../assets/images/customer.png";

const About: React.FC = () => {
  const [carsSold, setCarsSold] = useState(0);
  const [happyCustomers, setHappyCustomers] = useState(0);
  const [luxuryModels, setLuxuryModels] = useState(0);
  const [yearsExperience, setYearsExperience] = useState(0);

  useEffect(() => {
    let cars = 0;
    let customers = 0;
    let models = 0;
    let years = 0;

    const interval = setInterval(() => {
      if (cars < 500) cars += 10;
      if (customers < 300) customers += 6;
      if (models < 50) models += 1;
      if (years < 10) years += 1;

      setCarsSold(cars > 500 ? 500 : cars);
      setHappyCustomers(customers > 300 ? 300 : customers);
      setLuxuryModels(models > 50 ? 50 : models);
      setYearsExperience(years > 10 ? 10 : years);

      if (cars >= 500 && customers >= 300 && models >= 50 && years >= 10) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <section className="about-section">
        <div className="container">
          <h1 className="about-title">Luxury Cars Showroom</h1>

          <div className="row align-items-center about-row">
            <div className="col-lg-6 mb-4">
              <img src={showroom} alt="Showroom" className="about-img" />
            </div>

            <div className="col-lg-6">
              <div className="about-text-box">
                <h2>Welcome to Luxury Cars</h2>
                <p>
                  Luxury Cars is a premium car showroom that offers a wide range
                  of modern and luxury vehicles from the world’s top brands.
                </p>
                <p>
                  Our showroom is designed to provide customers with a stylish
                  and comfortable environment to explore their dream cars.
                </p>
                <p>
                  Every vehicle in our collection is selected for performance,
                  innovation, comfort, and elegant design.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center about-row flex-lg-row-reverse">
            <div className="col-lg-6 mb-4">
              <img src={showrron1} alt="Luxury Cars" className="about-img" />
            </div>

            <div className="col-lg-6">
              <div className="about-text-box">
                <h2>Premium Showroom Experience</h2>
                <p>
                  Our spacious showroom allows customers to explore different
                  luxury cars with ease and comfort.
                </p>
                <p>
                  We focus on bringing the latest automotive designs and
                  advanced technology to our customers.
                </p>
                <p>
                  Every visit to Luxury Cars is designed to give you a premium
                  showroom experience.
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center about-row">
            <div className="col-lg-6 mb-4">
              <img src={customer} alt="Customer" className="about-img" />
            </div>

            <div className="col-lg-6">
              <div className="about-text-box">
                <h2>Customer Satisfaction</h2>
                <p>
                  Customer satisfaction is the heart of our showroom and
                  service experience.
                </p>
                <p>
                  Our friendly team helps customers choose the perfect car
                  based on their lifestyle and preferences.
                </p>
                <p>
                  We believe that buying a car should be an exciting and
                  memorable journey for every customer.
                </p>
              </div>
            </div>
          </div>

          <div className="about-features">
            <div className="feature-card">
              🚗
              <h3>Top Luxury Brands</h3>
              <p>BMW, Audi, Mercedes, Toyota and many more premium cars.</p>
            </div>

            <div className="feature-card">
              ⭐
              <h3>Premium Quality</h3>
              <p>Every vehicle is selected for performance, safety and comfort.</p>
            </div>

            <div className="feature-card">
              🤝
              <h3>Trusted Service</h3>
              <p>We provide professional support and guidance for customers.</p>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h2>{carsSold}+</h2>
              <p>Cars Sold</p>
            </div>

            <div className="stat-card">
              <h2>{happyCustomers}+</h2>
              <p>Happy Customers</p>
            </div>

            <div className="stat-card">
              <h2>{luxuryModels}+</h2>
              <p>Luxury Models</p>
            </div>

            <div className="stat-card">
              <h2>{yearsExperience}+</h2>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;