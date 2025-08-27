import React from "react";

const ProductInfor = () => {
  const product = {
    name: "Laptop",
    Price: "59999",
    availability: "In stock",
  };
  return (
    <div>
      <h1>Product Info.</h1>
      <h3>Name: {product.name}</h3>
      <h3>Name: ${product.Price}</h3>
      <h3>Name: {product.availability}</h3>
    </div>
  );
};

export default ProductInfor;
