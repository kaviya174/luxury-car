import React from "react";
import Navbar from "../components/Navbar";

type CarItem = {
  id: number;
  name: string;
  image: string;
};

const imageModules = import.meta.glob("../assets/ourcars/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const customNames: Record<string, string> = {
  "audi-a6": "Audi A6",
  "audi-q7": "Audi Q7",
  "benz-cclass": "Benz C-Class",
  "benz-cclass1": "Benz C-Class 1",
  "benz-gle": "Benz GLE",
  "benz-mercedes": "Benz Mercedes",
  "benz-mercedes1": "Benz Mercedes 1",
  "benz-mercedes2": "Benz Mercedes 2",
  "benz-mercedes3": "Benz Mercedes 3",
  "benz-sport": "Benz Sport",
  "bmw-i7": "BMW i7",
  "bmw-m4": "BMW M4",
  "bmw-x5": "BMW X5",
  "bmw-x7": "BMW X7",
  "honda-car": "Honda Car",
  "honda-car1": "Honda Car 1",
  "honda-car3": "Honda Car 3",
  "honda-car4": "Honda Car 4",
  "honda-car5": "Honda Car 5",
  "tata-altroz": "Tata Altroz",
  "tata-altroz1": "Tata Altroz 1",
  "tata-harrier": "Tata Harrier",
  "tata-harrier1": "Tata Harrier 1",
};

const formatName = (fileName: string) => {
  const withoutExtension = fileName.replace(/\.(png|jpg|jpeg)$/i, "");
  if (customNames[withoutExtension]) {
    return customNames[withoutExtension];
  }

  return withoutExtension
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const cars: CarItem[] = Object.entries(imageModules)
  .map(([path, image], index) => {
    const fileName = path.split("/").pop() || "";
    return {
      id: index + 1,
      name: formatName(fileName),
      image,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const OurCars: React.FC = () => {
  return (
    <>
      <Navbar />

      <section className="our-cars-section py-5">
        <div className="container">
          <h2 className="text-center our-cars-title mb-5">Our Cars collection</h2>

          <div className="row">
            {cars.map((car) => (
              <div className="col-md-4 col-lg-3 mb-4" key={car.id}>
                <div className="our-car-card text-center">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="our-car-image"
                  />
                  <h5 className="mt-3">{car.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCars;