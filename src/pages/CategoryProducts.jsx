
import Product from "../components/Product";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const { categoryType } = useParams();
  const fetchProduct = useCallback(async () => {
    const response = await fetch(
      `https://dummyjson.com/products/category/${categoryType}`
    );
    const jsonResponse = await response.json();

    setProducts(jsonResponse.products);

  }, [])
  useEffect(() => {
    fetchProduct()
  }, [fetchProduct]);

  return (
    <div>


      <div className="container mx-auto min-h-[83vh] p-4 font-karla">
        <div className="flex items-center space-x-2 text-lg dark:text-white">
          <span>Categories</span>
          <span> {">"} </span>
          <span className="font-bold">Beauty</span>
        </div>
        <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-2">
          {/* Single Product */}
          {products.map((p) => (
            <Product key={p.id} productInfo={p} />


          ))}
        </div>
      </div>

    </div>
  );
};

export default CategoryProducts;
