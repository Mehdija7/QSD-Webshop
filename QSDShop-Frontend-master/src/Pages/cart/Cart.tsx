import React, { useState } from "react";

const ShoppingCart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Item[]>([]);

  // Define Item type as needed
  interface Item {
    id: number;
    name: string;
    price: number;
    // other properties
  }

  // Add item to the cart
  const addToCart = (item: Item) => {
    setCartItems([...cartItems, item]);
  };

  // Remove item from the cart
  const removeFromCart = (itemId: number) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <div>
      {/* Render your shopping cart items */}
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>

      {/* Add buttons for additional actions */}
      <button onClick={clearCart}>Clear Cart</button>
      {/* Add more buttons or links for other actions like "Continue Shopping" and "Proceed to Payment" */}
    </div>
  );
};

export default ShoppingCart;
