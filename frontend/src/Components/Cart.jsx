import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import './css/cart.css'; // Import your CSS file for styling

const CartPage = () => {
//   const [backendData,setbackendData]=useState([{}])
//   useEffect(()=>{
//     fetch("/api").then(
//        response =>  response.json()
//     ).then(
//       data => {
//         setbackendData(data)
//       }
//     )
//   }, [])
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 15 },
    { id: 3, name: 'Product 3', price: 20 }
  ]);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // Implement your checkout logic here
    alert('Redirecting to checkout...');
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
              </div>
              <button className="remove-button" onClick={() => removeItem(item.id)}>
                <FaTrash />
              </button>
            </div>
          ))}
          <p className="total-price">Total Price: ${getTotalPrice()}</p>
          <div className="checkout-button-container"> {/* New container for checkout button */}
            <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
  
};

export default CartPage;
