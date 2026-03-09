import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">

          <div className="col-lg-4 col-md-6 mb-4">
            <h3 className="footer-title">DreamDrive Showroom</h3>
            <p className="footer-text">
              Experience premium luxury cars with world-class service and
              performance. Your dream car journey begins here.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <h3 className="footer-title">Quick Links</h3>

            <ul className="footer-links">

              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/ourcars" className="footer-link">
                  Our Cars
                </Link>
              </li>

              <li>
                <Link to="/#brands-section" className="footer-link">
                  Brands
                </Link>
              </li>

              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          <div className="col-lg-4 col-md-12 mb-4">
            <h3 className="footer-title">Contact Us</h3>
            <p className="footer-contact">📍 Chennai, Tamil Nadu</p>
            <p className="footer-contact">📞 +91 98765 43210</p>
            <p className="footer-contact">✉️ info@dreamdrive.com</p>
          </div>

        </div>

        <hr className="footer-line" />

        <div className="text-center footer-bottom">
          © 2026 DreamDrive Showroom | Designed with 🚗 passion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;