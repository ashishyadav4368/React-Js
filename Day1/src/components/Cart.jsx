import React from "react";

const Cart = () => {
  const items = ["Pen", "Pencil", "Shirt", "Hoodie", "Laptop"];
  return (
    <div>
      <h1>Cart 🛒</h1>
      {items.length > 0 && <h3>You have {items.length} items in the cart</h3>}

      <ul>
        <h4>Products</h4>
        {items.map((item) => (
          <li key={Math.random()}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
