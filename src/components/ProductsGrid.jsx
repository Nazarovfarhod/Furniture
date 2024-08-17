import React from "react";
import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";
function ProductsGrid() {
  const { products } = useLoaderData();

  return (
    <div className="pt-12 mb-32 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, image, price } = product.attributes;
        const dollorAmoun = formatPrice(price);
        return (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="card w-full shadow-2xl hover:shadow-xl transition duration-300"
          >
            <figur>
              <img
                src={image}
                alt=""
                className="rounded-xl h-64 w-full object-cover hover:scale-95 transition duration-300 md:h-48"
              />
            </figur>
            <div className="card-body items-center text-center">
              <h2 className="card-title    capitalize tracking-wider">
                {title}
              </h2>
              <span className="text-secondary font-medium">{dollorAmoun}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductsGrid;
