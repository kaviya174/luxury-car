import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

import x5Front from "../assets/cars/bmw/x5/front.jpg";
import x3Front from "../assets/cars/bmw/x3/front.jpg";
import m4Front from "../assets/cars/bmw/m4/front.jpg";
import i7Front from "../assets/cars/bmw/i7/front.jpg";
import z4Front from "../assets/cars/bmw/z4/front.jpg";

import a4Front from "../assets/cars/audi/a4/front.jpg";
import a6Front from "../assets/cars/audi/a6/front.jpg";
import q7Front from "../assets/cars/audi/q7/front.jpg";
import q8Front from "../assets/cars/audi/q8/front.jpg";
import etronFront from "../assets/cars/audi/e-tron/front.jpg";

import cClassFront from "../assets/cars/benz/c-class/front.jpg";
import eClassFront from "../assets/cars/benz/e-class/front.jpg";
import glaFront from "../assets/cars/benz/gla/front.jpg";
import glcFront from "../assets/cars/benz/glc/front.jpg";
import sClassFront from "../assets/cars/benz/s-class/front.jpg";

import cretaFront from "../assets/cars/hyundai/creta/front.jpg";
import vernaFront from "../assets/cars/hyundai/verna/front.jpg";
import i20Front from "../assets/cars/hyundai/i20/front.jpg";
import venueFront from "../assets/cars/hyundai/venue/front.jpg";
import tucsonFront from "../assets/cars/hyundai/tucson/front.jpg";

import fortunerFront from "../assets/cars/toyota/fortuner/front.jpg";
import innovaFront from "../assets/cars/toyota/innova/front.jpg";
import camryFront from "../assets/cars/toyota/camry/front.jpg";
import glanzaFront from "../assets/cars/toyota/glanza/front.jpg";
import hiluxFront from "../assets/cars/toyota/hilux/front.jpg";

const BrandCars: React.FC = () => {
  const { brandId } = useParams();
  const navigate = useNavigate();

  const carsByBrand: Record<string, { id: string; name: string; price: string; image: string }[]> = {
    bmw: [
      { id: "bmw-x5", name: "BMW X5", price: "₹95 Lakhs", image: x5Front },
      { id: "bmw-x3", name: "BMW X3", price: "₹75 Lakhs", image: x3Front },
      { id: "bmw-m4", name: "BMW M4", price: "₹1.2 Crore", image: m4Front },
      { id: "bmw-i7", name: "BMW i7", price: "₹2 Crore", image: i7Front },
      { id: "bmw-z4", name: "BMW Z4", price: "₹90 Lakhs", image: z4Front },
    ],
    audi: [
      { id: "audi-a4", name: "Audi A4", price: "₹50 Lakhs", image: a4Front },
      { id: "audi-a6", name: "Audi A6", price: "₹70 Lakhs", image: a6Front },
      { id: "audi-q7", name: "Audi Q7", price: "₹95 Lakhs", image: q7Front },
      { id: "audi-q8", name: "Audi Q8", price: "₹1.1 Crore", image: q8Front },
      { id: "audi-e-tron", name: "Audi E-Tron", price: "₹1.3 Crore", image: etronFront },
    ],
    benz: [
      { id: "benz-c-class", name: "Benz C-Class", price: "₹60 Lakhs", image: cClassFront },
      { id: "benz-e-class", name: "Benz E-Class", price: "₹80 Lakhs", image: eClassFront },
      { id: "benz-gla", name: "Benz GLA", price: "₹55 Lakhs", image: glaFront },
      { id: "benz-glc", name: "Benz GLC", price: "₹75 Lakhs", image: glcFront },
      { id: "benz-s-class", name: "Benz S-Class", price: "₹1.8 Crore", image: sClassFront },
    ],
    hyundai: [
      { id: "hyundai-creta", name: "Hyundai Creta", price: "₹18 Lakhs", image: cretaFront },
      { id: "hyundai-verna", name: "Hyundai Verna", price: "₹16 Lakhs", image: vernaFront },
      { id: "hyundai-i20", name: "Hyundai i20", price: "₹10 Lakhs", image: i20Front },
      { id: "hyundai-venue", name: "Hyundai Venue", price: "₹12 Lakhs", image: venueFront },
      { id: "hyundai-tucson", name: "Hyundai Tucson", price: "₹32 Lakhs", image: tucsonFront },
    ],
    toyota: [
      { id: "toyota-fortuner", name: "Toyota Fortuner", price: "₹45 Lakhs", image: fortunerFront },
      { id: "toyota-innova", name: "Toyota Innova Crysta", price: "₹28 Lakhs", image: innovaFront },
      { id: "toyota-camry", name: "Toyota Camry", price: "₹48 Lakhs", image: camryFront },
      { id: "toyota-glanza", name: "Toyota Glanza", price: "₹9 Lakhs", image: glanzaFront },
      { id: "toyota-hilux", name: "Toyota Hilux", price: "₹38 Lakhs", image: hiluxFront },
    ],
  };

  const selectedCars = brandId ? carsByBrand[brandId] || [] : [];

  return (
    <>
      <Navbar />

      <section className="brand-cars-section py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            {brandId ? `${brandId.toUpperCase()} Cars` : "Cars"}
          </h2>

          <div className="row">
            {selectedCars.map((car) => (
              <div className="col-md-4 mb-4" key={car.id}>
                <div className="car-list-card text-center">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="brand-car-image"
                  />
                  <h4 className="mt-3">{car.name}</h4>
                  <p>{car.price}</p>
                  <button
                    className="btn btn-dark"
                    onClick={() => navigate(`/car/${car.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandCars;