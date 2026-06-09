import ProductGrid from "../components/ProductGrid";
import { useEffect } from "react";

export default function Products() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      <ProductGrid />
    </div>
  );
}