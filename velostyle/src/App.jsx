import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";


function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const products = [
    { id: 1, name: "Zara T-Shirt", price: 1299, image: "https://via.placeholder.com/300x300.png?text=Zara+Tee" },
    { id: 2, name: "H&M Summer Dress", price: 1799, image: "https://via.placeholder.com/300x300.png?text=H%26M+Dress" },
    { id: 3, name: "Levi's Jeans", price: 2999, image: "https://via.placeholder.com/300x300.png?text=Levi's+Jeans" },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-800 via-fuchsia-600 to-blue-500 text-white p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">VELO<span className="text-pink-300">STYLE</span></h1>
        <div className="relative cursor-pointer" onClick={toggleCart}>
          🛒
          <span className="absolute -top-2 -right-2 bg-pink-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        </div>
      </header>

      {/* Product Grid */}
      <h2 className="text-3xl font-bold mt-8 mb-6">🔥 Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl">
        {products.map((product) => (
          <div key={product.id} className="bg-white/10 p-4 rounded-xl shadow hover:scale-105 transition">
            <img src={product.image} alt={product.name} className="rounded-lg mb-3" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-200">₹{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-3 px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded text-white w-full"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 w-80 h-full bg-white text-black shadow-2xl p-6 transition-transform duration-300 z-50 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <h2 className="text-xl font-bold mb-4">🛍️ Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Cart is empty</p>
        ) : (
          <>
            <ul className="space-y-2 mb-4">
              {cart.map((item, index) => (
                <li key={index} className="border-b pb-2">
                  {item.name} – ₹{item.price}
                </li>
              ))}
            </ul>
            <p className="font-bold text-lg">Total: ₹{total}</p>
            <button
  className="mt-4 px-4 py-2 bg-black text-white rounded w-full hover:bg-gray-800"
  onClick={() => navigate("/checkout", { state: { cart } })}
>
  Proceed to Checkout
</button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

