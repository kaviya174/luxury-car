

import bmw from "../assets/brands/bmw.png";
import audi from "../assets/brands/audi.png";
import benz from "../assets/brands/benz.png";
import hyundai from "../assets/brands/hyundai.png";
import toyota from "../assets/brands/toyota.png";

import tata from "../assets/images/tata.png";
import honda from "../assets/images/honda.png";
import suzuki from "../assets/images/suzuki.png";

function Hero() {
  return (
    <section className="hero-video-section">
      <video autoPlay loop muted playsInline className="video-bg">
       <source src="/car-driving.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1 className="hero-main-title">The Luxury Cars</h1>
        <p className="hero-sub-text">
          Experience premium cars with stylish design and world-class performance.
        </p>

     <div className="brand-logos-row">
  <div className="brand-logo-box">
    <img src={bmw} alt="BMW" />
  </div>

  <div className="brand-logo-box">
    <img src={audi} alt="Audi" />
  </div>

  <div className="brand-logo-box">
    <img src={benz} alt="Benz" />
  </div>

  <div className="brand-logo-box">
    <img src={tata} alt="Tata" />
  </div>

  <div className="brand-logo-box">
    <img src={honda} alt="Honda" />
  </div>

  <div className="brand-logo-box">
    <img src={hyundai} alt="Hyundai" />
  </div>

  <div className="brand-logo-box">
    <img src={toyota} alt="Toyota" />
  </div>

  <div className="brand-logo-box">
    <img src={suzuki} alt="Suzuki" />
  </div>
</div>
      </div>
    </section>
  );
}

export default Hero;