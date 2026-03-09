import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

// BMW
import x5Front from "../assets/cars/bmw/x5/front.jpg";
import x5Back from "../assets/cars/bmw/x5/back.jpg";
import x5Left from "../assets/cars/bmw/x5/left.jpg";
import x5Right from "../assets/cars/bmw/x5/right.jpg";
import x5Top from "../assets/cars/bmw/x5/top.jpg";

import x3Front from "../assets/cars/bmw/x3/front.jpg";
import x3Back from "../assets/cars/bmw/x3/back.jpg";
import x3Left from "../assets/cars/bmw/x3/left.jpg";
import x3Right from "../assets/cars/bmw/x3/right.jpg";
import x3Top from "../assets/cars/bmw/x3/top.jpg";

import m4Front from "../assets/cars/bmw/m4/front.jpg";
import m4Back from "../assets/cars/bmw/m4/back.jpg";
import m4Left from "../assets/cars/bmw/m4/left.jpg";
import m4Right from "../assets/cars/bmw/m4/right.jpg";
import m4Top from "../assets/cars/bmw/m4/top.jpg";

import i7Front from "../assets/cars/bmw/i7/front.jpg";
import i7Back from "../assets/cars/bmw/i7/back.jpg";
import i7Left from "../assets/cars/bmw/i7/left.jpg";
import i7Right from "../assets/cars/bmw/i7/right.jpg";
import i7Top from "../assets/cars/bmw/i7/top.jpg";

import z4Front from "../assets/cars/bmw/z4/front.jpg";
import z4Back from "../assets/cars/bmw/z4/back.jpg";
import z4Left from "../assets/cars/bmw/z4/left.jpg";
import z4Right from "../assets/cars/bmw/z4/right.jpg";
import z4Top from "../assets/cars/bmw/z4/top.jpg";

// AUDI
import a4Front from "../assets/cars/audi/a4/front.jpg";
import a4Back from "../assets/cars/audi/a4/back.jpg";
import a4Left from "../assets/cars/audi/a4/left.jpg";
import a4Right from "../assets/cars/audi/a4/right.jpg";
import a4Top from "../assets/cars/audi/a4/top.jpg";

import a6Front from "../assets/cars/audi/a6/front.jpg";
import a6Back from "../assets/cars/audi/a6/back.jpg";
import a6Left from "../assets/cars/audi/a6/left.jpg";
import a6Right from "../assets/cars/audi/a6/right.jpg";
import a6Top from "../assets/cars/audi/a6/top.jpg";

import q7Front from "../assets/cars/audi/q7/front.jpg";
import q7Back from "../assets/cars/audi/q7/back.jpg";
import q7Left from "../assets/cars/audi/q7/left.jpg";
import q7Right from "../assets/cars/audi/q7/right.jpg";
import q7Top from "../assets/cars/audi/q7/top.jpg";

import q8Front from "../assets/cars/audi/q8/front.jpg";
import q8Back from "../assets/cars/audi/q8/back.jpg";
import q8Left from "../assets/cars/audi/q8/left.jpg";
import q8Right from "../assets/cars/audi/q8/right.jpg";
import q8Top from "../assets/cars/audi/q8/top.jpg";

import etronFront from "../assets/cars/audi/e-tron/front.jpg";
import etronBack from "../assets/cars/audi/e-tron/back.jpg";
import etronLeft from "../assets/cars/audi/e-tron/left.jpg";
import etronRight from "../assets/cars/audi/e-tron/right.jpg";
import etronTop from "../assets/cars/audi/e-tron/top.jpg";

// BENZ
import cClassFront from "../assets/cars/benz/c-class/front.jpg";
import cClassBack from "../assets/cars/benz/c-class/back.jpg";
import cClassLeft from "../assets/cars/benz/c-class/left.jpg";
import cClassRight from "../assets/cars/benz/c-class/right.jpg";
import cClassTop from "../assets/cars/benz/c-class/top.jpg";

import eClassFront from "../assets/cars/benz/e-class/front.jpg";
import eClassBack from "../assets/cars/benz/e-class/back.jpg";
import eClassLeft from "../assets/cars/benz/e-class/left.jpg";
import eClassRight from "../assets/cars/benz/e-class/right.jpg";
import eClassTop from "../assets/cars/benz/e-class/top.jpg";

import glaFront from "../assets/cars/benz/gla/front.jpg";
import glaBack from "../assets/cars/benz/gla/back.jpg";
import glaLeft from "../assets/cars/benz/gla/left.jpg";
import glaRight from "../assets/cars/benz/gla/right.jpg";
import glaTop from "../assets/cars/benz/gla/top.jpg";

import glcFront from "../assets/cars/benz/glc/front.jpg";
import glcBack from "../assets/cars/benz/glc/back.jpg";
import glcLeft from "../assets/cars/benz/glc/left.jpg";
import glcRight from "../assets/cars/benz/glc/right.jpg";
import glcTop from "../assets/cars/benz/glc/top.jpg";

import sClassFront from "../assets/cars/benz/s-class/front.jpg";
import sClassBack from "../assets/cars/benz/s-class/back.jpg";
import sClassLeft from "../assets/cars/benz/s-class/left.jpg";
import sClassRight from "../assets/cars/benz/s-class/right.jpg";
import sClassTop from "../assets/cars/benz/s-class/top.jpg";

// HYUNDAI
import cretaFront from "../assets/cars/hyundai/creta/front.jpg";
import cretaBack from "../assets/cars/hyundai/creta/back.jpg";
import cretaLeft from "../assets/cars/hyundai/creta/left.jpg";
import cretaRight from "../assets/cars/hyundai/creta/right.jpg";
import cretaTop from "../assets/cars/hyundai/creta/top.jpg";

import vernaFront from "../assets/cars/hyundai/verna/front.jpg";
import vernaBack from "../assets/cars/hyundai/verna/back.jpg";
import vernaLeft from "../assets/cars/hyundai/verna/left.jpg";
import vernaRight from "../assets/cars/hyundai/verna/right.jpg";
import vernaTop from "../assets/cars/hyundai/verna/top.jpg";

import i20Front from "../assets/cars/hyundai/i20/front.jpg";
import i20Back from "../assets/cars/hyundai/i20/back.jpg";
import i20Left from "../assets/cars/hyundai/i20/left.jpg";
import i20Right from "../assets/cars/hyundai/i20/right.jpg";
import i20Top from "../assets/cars/hyundai/i20/top.jpg";

import venueFront from "../assets/cars/hyundai/venue/front.jpg";
import venueBack from "../assets/cars/hyundai/venue/back.jpg";
import venueLeft from "../assets/cars/hyundai/venue/left.jpg";
import venueRight from "../assets/cars/hyundai/venue/right.jpg";
import venueTop from "../assets/cars/hyundai/venue/top.jpg";

import tucsonFront from "../assets/cars/hyundai/tucson/front.jpg";
import tucsonBack from "../assets/cars/hyundai/tucson/back.jpg";
import tucsonLeft from "../assets/cars/hyundai/tucson/left.jpg";
import tucsonRight from "../assets/cars/hyundai/tucson/right.jpg";
import tucsonTop from "../assets/cars/hyundai/tucson/top.jpg";

// TOYOTA
import fortunerFront from "../assets/cars/toyota/fortuner/front.jpg";
import fortunerBack from "../assets/cars/toyota/fortuner/back.jpg";
import fortunerLeft from "../assets/cars/toyota/fortuner/left.jpg";
import fortunerRight from "../assets/cars/toyota/fortuner/right.jpg";
import fortunerTop from "../assets/cars/toyota/fortuner/top.jpg";

import innovaFront from "../assets/cars/toyota/innova/front.jpg";
import innovaBack from "../assets/cars/toyota/innova/back.jpg";
import innovaLeft from "../assets/cars/toyota/innova/left.jpg";
import innovaRight from "../assets/cars/toyota/innova/right.jpg";
import innovaTop from "../assets/cars/toyota/innova/top.jpg";

import camryFront from "../assets/cars/toyota/camry/front.jpg";
import camryBack from "../assets/cars/toyota/camry/back.jpg";
import camryLeft from "../assets/cars/toyota/camry/left.jpg";
import camryRight from "../assets/cars/toyota/camry/right.jpg";
import camryTop from "../assets/cars/toyota/camry/top.jpg";

import glanzaFront from "../assets/cars/toyota/glanza/front.jpg";
import glanzaBack from "../assets/cars/toyota/glanza/back.jpg";
import glanzaLeft from "../assets/cars/toyota/glanza/left.jpg";
import glanzaRight from "../assets/cars/toyota/glanza/right.jpg";
import glanzaTop from "../assets/cars/toyota/glanza/top.jpg";

import hiluxFront from "../assets/cars/toyota/hilux/front.jpg";
import hiluxBack from "../assets/cars/toyota/hilux/back.jpg";
import hiluxLeft from "../assets/cars/toyota/hilux/left.jpg";
import hiluxRight from "../assets/cars/toyota/hilux/right.jpg";
import hiluxTop from "../assets/cars/toyota/hilux/top.jpg";

const carDetailsData = {
  "bmw-x5": {
    name: "BMW X5",
    price: "₹95 Lakhs",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "12 kmpl",
    description: "BMW X5 offers premium luxury, advanced technology, and powerful road performance.",
    images: [x5Front, x5Back, x5Left, x5Right, x5Top],
  },
  "bmw-x3": {
    name: "BMW X3",
    price: "₹75 Lakhs",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "14 kmpl",
    description: "BMW X3 is a stylish SUV with comfort, performance, and smart features.",
    images: [x3Front, x3Back, x3Left, x3Right, x3Top],
  },
  "bmw-m4": {
    name: "BMW M4",
    price: "₹1.2 Crore",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "10 kmpl",
    description: "BMW M4 is a sporty performance coupe with aggressive design and thrilling speed.",
    images: [m4Front, m4Back, m4Left, m4Right, m4Top],
  },
  "bmw-i7": {
    name: "BMW i7",
    price: "₹2 Crore",
    fuel: "Electric",
    transmission: "Automatic",
    mileage: "625 km range",
    description: "BMW i7 is a premium electric sedan with modern luxury and futuristic technology.",
    images: [i7Front, i7Back, i7Left, i7Right, i7Top],
  },
  "bmw-z4": {
    name: "BMW Z4",
    price: "₹90 Lakhs",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "11 kmpl",
    description: "BMW Z4 is a premium sports roadster with bold style and open-top driving experience.",
    images: [z4Front, z4Back, z4Left, z4Right, z4Top],
  },

  "audi-a4": {
    name: "Audi A4",
    price: "₹50 Lakhs",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "15 kmpl",
    description: "Audi A4 combines executive style, comfort, and premium quality.",
    images: [a4Front, a4Back, a4Left, a4Right, a4Top],
  },
  "audi-a6": {
    name: "Audi A6",
    price: "₹70 Lakhs",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "14 kmpl",
    description: "Audi A6 is a refined luxury sedan with elegant design and smooth performance.",
    images: [a6Front, a6Back, a6Left, a6Right, a6Top],
  },
  "audi-q7": {
    name: "Audi Q7",
    price: "₹95 Lakhs",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "11 kmpl",
    description: "Audi Q7 is a spacious luxury SUV with premium comfort and bold road presence.",
    images: [q7Front, q7Back, q7Left, q7Right, q7Top],
  },
  "audi-q8": {
    name: "Audi Q8",
    price: "₹1.1 Crore",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "10 kmpl",
    description: "Audi Q8 is a sporty luxury SUV with modern styling and advanced features.",
    images: [q8Front, q8Back, q8Left, q8Right, q8Top],
  },
  "audi-e-tron": {
    name: "Audi E-Tron",
    price: "₹1.3 Crore",
    fuel: "Electric",
    transmission: "Automatic",
    mileage: "484 km range",
    description: "Audi E-Tron is a premium electric SUV with futuristic design and smooth performance.",
    images: [etronFront, etronBack, etronLeft, etronRight, etronTop],
  },

  "benz-c-class": {
    name: "Benz C-Class",
    price: "₹60 Lakhs",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "14 kmpl",
    description: "Benz C-Class offers refined luxury and comfortable everyday driving.",
    images: [cClassFront, cClassBack, cClassLeft, cClassRight, cClassTop],
  },
  "benz-e-class": {
    name: "Benz E-Class",
    price: "₹80 Lakhs",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "15 kmpl",
    description: "Benz E-Class is a timeless luxury sedan with elegant comfort.",
    images: [eClassFront, eClassBack, eClassLeft, eClassRight, eClassTop],
  },
  "benz-gla": {
    name: "Benz GLA",
    price: "₹55 Lakhs",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "13 kmpl",
    description: "Benz GLA is a compact luxury SUV with stylish looks and smart features.",
    images: [glaFront, glaBack, glaLeft, glaRight, glaTop],
  },
  "benz-glc": {
    name: "Benz GLC",
    price: "₹75 Lakhs",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "12 kmpl",
    description: "Benz GLC combines SUV practicality with premium luxury comfort.",
    images: [glcFront, glcBack, glcLeft, glcRight, glcTop],
  },
  "benz-s-class": {
    name: "Benz S-Class",
    price: "₹1.8 Crore",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "10 kmpl",
    description: "Benz S-Class is the ultimate luxury sedan with world-class features.",
    images: [sClassFront, sClassBack, sClassLeft, sClassRight, sClassTop],
  },

  "hyundai-creta": {
    name: "Hyundai Creta",
    price: "₹18 Lakhs",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "17 kmpl",
    description: "Hyundai Creta is a popular SUV with modern styling and practical features.",
    images: [cretaFront, cretaBack, cretaLeft, cretaRight, cretaTop],
  },
  "hyundai-verna": {
    name: "Hyundai Verna",
    price: "₹16 Lakhs",
    fuel: "Petrol",
    transmission: "Manual",
    mileage: "18 kmpl",
    description: "Hyundai Verna is a sleek sedan with premium comfort and design.",
    images: [vernaFront, vernaBack, vernaLeft, vernaRight, vernaTop],
  },
  "hyundai-i20": {
    name: "Hyundai i20",
    price: "₹10 Lakhs",
    fuel: "Petrol",
    transmission: "Manual",
    mileage: "20 kmpl",
    description: "Hyundai i20 is a sporty hatchback with smart features and style.",
    images: [i20Front, i20Back, i20Left, i20Right, i20Top],
  },
  "hyundai-venue": {
    name: "Hyundai Venue",
    price: "₹12 Lakhs",
    fuel: "Petrol",
    transmission: "Automatic",
    mileage: "18 kmpl",
    description: "Hyundai Venue is a compact SUV ideal for city driving and comfort.",
    images: [venueFront, venueBack, venueLeft, venueRight, venueTop],
  },
  "hyundai-tucson": {
    name: "Hyundai Tucson",
    price: "₹32 Lakhs",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "16 kmpl",
    description: "Hyundai Tucson is a premium SUV with bold styling and advanced features.",
    images: [tucsonFront, tucsonBack, tucsonLeft, tucsonRight, tucsonTop],
  },

  "toyota-fortuner": {
    name: "Toyota Fortuner",
    price: "₹45 Lakhs",
    fuel: "Diesel",
    transmission: "Automatic",
    mileage: "14 kmpl",
    description: "Toyota Fortuner is a powerful SUV with strong road presence and reliability.",
    images: [fortunerFront, fortunerBack, fortunerLeft, fortunerRight, fortunerTop],
  },
  "toyota-innova": {
    name: "Toyota Innova Crysta",
    price: "₹28 Lakhs",
    fuel: "Diesel",
    transmission: "Manual",
    mileage: "15 kmpl",
    description: "Toyota Innova Crysta offers spacious comfort and dependable performance.",
    images: [innovaFront, innovaBack, innovaLeft, innovaRight, innovaTop],
  },
  "toyota-camry": {
    name: "Toyota Camry",
    price: "₹48 Lakhs",
    fuel: "Hybrid",
    transmission: "Automatic",
    mileage: "19 kmpl",
    description: "Toyota Camry is a premium hybrid sedan with comfort and efficiency.",
    images: [camryFront, camryBack, camryLeft, camryRight, camryTop],
  },
  "toyota-glanza": {
    name: "Toyota Glanza",
    price: "₹9 Lakhs",
    fuel: "Petrol",
    transmission: "Manual",
    mileage: "22 kmpl",
    description: "Toyota Glanza is a practical hatchback with smart looks and mileage.",
    images: [glanzaFront, glanzaBack, glanzaLeft, glanzaRight, glanzaTop],
  },
  "toyota-hilux": {
    name: "Toyota Hilux",
    price: "₹38 Lakhs",
    fuel: "Diesel",
    transmission: "Manual",
    mileage: "12 kmpl",
    description: "Toyota Hilux is a rugged pickup with durability and premium design.",
    images: [hiluxFront, hiluxBack, hiluxLeft, hiluxRight, hiluxTop],
  },
};

const CarDetails: React.FC = () => {
  const { carId } = useParams();
  const selectedCar = carDetailsData[carId as keyof typeof carDetailsData];
  const [activeImage, setActiveImage] = useState<number>(0);

  if (!selectedCar) {
    return <h2 className="text-center mt-5">Car not found</h2>;
  }

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % selectedCar.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) =>
      prev === 0 ? selectedCar.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <Navbar />

      <section className="car-details-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4">
              <div className="details-carousel">
                <img
                  src={selectedCar.images[activeImage]}
                  alt={selectedCar.name}
                  className="details-main-image"
                />

                <button className="details-arrow left-arrow" onClick={prevImage}>
                  ❮
                </button>

                <button className="details-arrow right-arrow" onClick={nextImage}>
                  ❯
                </button>
              </div>

              <div className="thumbnail-row mt-3">
                {selectedCar.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`thumb-${index}`}
                    className={`thumb-image ${activeImage === index ? "active-thumb" : ""}`}
                    onClick={() => setActiveImage(index)}
                  />
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <h2>{selectedCar.name}</h2>
              <p><strong>Price:</strong> {selectedCar.price}</p>
              <p><strong>Fuel Type:</strong> {selectedCar.fuel}</p>
              <p><strong>Transmission:</strong> {selectedCar.transmission}</p>
              <p><strong>Mileage:</strong> {selectedCar.mileage}</p>
              <p><strong>Description:</strong> {selectedCar.description}</p>

              <div className="booking-form-box mt-4">
               
                <div className="mt-4">
  <h3>Book Test Drive</h3>

  <form>
    <input
      type="text"
      placeholder="Enter Name"
      className="form-control mb-3"
    />

    <input
      type="email"
      placeholder="Enter Email"
      className="form-control mb-3"
    />

    <input
      type="text"
      placeholder="Enter Phone Number"
      className="form-control mb-3"
    />

    <label>Select Date</label>
    <input
      type="date"
      className="form-control mb-3"
    />

    <label>Select Time</label>
    <input
      type="time"
      className="form-control mb-3"
    />

    <button className="btn btn-warning">
      Submit
    </button>
  </form>

</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CarDetails;