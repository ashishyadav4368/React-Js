import React from "react";

const ProductList = () => {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: "5000",
    },
    {
      id: 2,
      name: "keyboard",
      price: "5000",
    },
    {
      id: 3,
      name: "Mouse",
      price: "5000",
    },
  ];
  return (
    <div>
      <h1>Rendering list of products </h1>
      <div key={products.id}>
        {products.map((product) => (
          <ul>
            <li>
              {product.name}: {product.price}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
