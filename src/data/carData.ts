import bmwLogo from "../assets/brands/bmw.png";
import audiLogo from "../assets/brands/audi.png";
import benzLogo from "../assets/brands/benz.png";
import hyundaiLogo from "../assets/brands/hyundai.png";
import toyotaLogo from "../assets/brands/toyota.png";

export type BrandType = {
  id: string;
  name: string;
  logo: string;
  description: string;
};

export const brands: BrandType[] = [
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