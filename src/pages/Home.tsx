import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import showroom from "../assets/images/showroom.png";
import showrron1 from "../assets/images/showrron1.png";
import customer from "../assets/images/customer.png";
import BrandCard from "../components/BrandCard";
// import BrandLogoSection from "../components/BrandLogoSection";
import bmwLogo from "../assets/brands/bmw.png";
import audiLogo from "../assets/brands/audi.png";
import benzLogo from "../assets/brands/benz.png";
import hyundaiLogo from "../assets/brands/hyundai.png";
import toyotaLogo from "../assets/brands/toyota.png";
import Hero from "../components/Hero";

type SlideType = {
  id: number;
  image: string;
  topTitle: string;
  title: string;
  description: string;
  buttonText: string;
};

type BrandType = {
  id: string;
  name: string;
  logo: string;
  description: string;
};

const slides: SlideType[] = [
  {
    id: 1,
    image: showroom,
    topTitle: "Premium Car Collection",
    title: "Welcome to Luxury Cars",
    description:
      "Explore premium cars from top brands and enjoy a stylish showroom experience with the best collections and latest models.",
    buttonText: "View More",
  },
  {
    id: 2,
    image: showrron1,
    topTitle: "Luxury Showroom Experience",
    title: "Find Your Dream Car Today",
    description:
      "Browse elegant car models, compare brands, and discover the perfect vehicle that matches your comfort, style, and performance needs.",
    buttonText: "Explore Cars",
  },
  {
    id: 3,
    image: customer,
    topTitle: "Trusted By Customers",
    title: "Drive Home With Confidence",
    description:
      "Our customers enjoy a smooth car buying journey with quality service, trusted brands, and a premium showroom atmosphere.",
    buttonText: "Our Services",
  },
];

const brands: BrandType[] = [
  {
    id: "bmw",
    name: "BMW",
    logo: bmwLogo,
    description: "Ultimate driving machine with luxury performance.",
  },
  {
    id: "audi",
    name: "Audi",
    logo: audiLogo,
    description: "Progressive design with powerful engineering.",
  },
  {
    id: "benz",
    name: "Benz",
    logo: benzLogo,
    description: "Luxury redefined with timeless elegance.",
  },
  {
    id: "hyundai",
    name: "Hyundai",
    logo: hyundaiLogo,
    description: "Modern cars with smart features.",
  },
  {
    id: "toyota",
    name: "Toyota",
    logo: toyotaLogo,
    description: "Reliable vehicles with premium comfort.",
  },
];

const Home: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      <Navbar />
      <Hero/>
      {/* <BrandLogoSection /> */}
      <section className="hero-section">
        <div className="container">
         <div className="row align-items-center py-4">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <p className="hero-top-title">{slides[activeIndex].topTitle}</p>
              <h1 className="hero-title">{slides[activeIndex].title}</h1>
              <p className="hero-description">{slides[activeIndex].description}</p>

            
            </div>

            <div className="col-lg-6">
              <div className="custom-carousel-wrapper">
                <img
                  src={slides[activeIndex].image}
                  alt={slides[activeIndex].title}
                  className="img-fluid hero-image"
                />

                <button className="carousel-btn prev-btn" onClick={handlePrev}>
                  ❮
                </button>

                <button className="carousel-btn next-btn" onClick={handleNext}>
                  ❯
                </button>

                <div className="carousel-dots">
                  {slides.map((_, index) => (
                    <span
                      key={index}
                      className={`dot ${activeIndex === index ? "active-dot" : ""}`}
                      onClick={() => setActiveIndex(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>

     <section id="brands-section" className="explore-section py-5">
  <div className="container">
    <h2 className="text-center explore-title mb-5">Explore Our Brands</h2>
    <div className="row">
      {brands.map((brand) => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </div>
  </div>
  <Footer />
</section>
    </>
  );
};

export default Home;