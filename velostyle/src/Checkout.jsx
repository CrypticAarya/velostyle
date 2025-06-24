import { useLocation } from "react-router-dom";

function Checkout() {
  const location = useLocation();
  const cart = location.state?.cart || [];

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const deliveryCharge = 60;
  const grandTotal = total + deliveryCharge;

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-bold mb-6">🧾 Checkout</h1>
      
      {cart.length === 0 ? (
        <p>Your cart is empty. Go back and add some items.</p>
      ) : (
        <div>
          <ul className="mb-4 space-y-2">
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} – ₹{item.price}
              </li>
            ))}
          </ul>
          <p className="text-lg">Subtotal: ₹{total}</p>
          <p className="text-lg">Delivery: ₹{deliveryCharge}</p>
          <p className="text-xl font-bold mt-4">Total: ₹{grandTotal}</p>
          
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
}

export default Checkout;
