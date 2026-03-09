import React from "react";

import bmw from "../assets/images/bmw.png";
import audi from "../assets/images/audi.png";
import benz from "../assets/images/benz.png";
import tata from "../assets/images/tata.png";
import honda from "../assets/images/honda.png";
import hyundai from "../assets/images/hyundai.png";
import toyota from "../assets/images/toyota.png";
import suzuki from "../assets/images/suzuki.png";

const brands = [
  { id: 1, name: "BMW", image: bmw },
  { id: 2, name: "Audi", image: audi },
  { id: 3, name: "Benz", image: benz },
  { id: 4, name: "Tata", image: tata },
  { id: 5, name: "Honda", image: honda },
  { id: 6, name: "Hyundai", image: hyundai },
  { id: 7, name: "Toyota", image: toyota },
  { id: 8, name: "Suzuki", image: suzuki },
];

const BrandLogoSection: React.FC = () => {
  return (
    <section className="brand-logo-section">
      <div className="container-fluid">
        <h2 className="brand-logo-title text-center">The Luxury Cars</h2>

        <div className="brand-logo-row">
          {brands.map((brand) => (
            <div className="brand-logo-card" key={brand.id}>
              <img
                src={brand.image}
                alt={brand.name}
                className="brand-logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogoSection;