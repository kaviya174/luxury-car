import React from "react";
import { useNavigate } from "react-router-dom";

type BrandType = {
  id: string;
  name: string;
  logo: string;
  description: string;
};

type Props = {
  brand: BrandType;
};

const BrandCard: React.FC<Props> = ({ brand }) => {
  const navigate = useNavigate();

  return (
    <div className="col-md-4 col-lg-4 mb-4">
      <div className="explore-card text-center">
        <img
          src={brand.logo}
          alt={brand.name}
          className="explore-brand-img"
        />
        <h3 className="mt-3">{brand.name}</h3>
        <p>{brand.description}</p>
        <button
          className="btn btn-dark px-4"
          onClick={() => navigate(`/brand/${brand.id}`)}
        >
          View More →
        </button>
      </div>
    </div>
  );
};

export default BrandCard;