const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="bg-white/10 p-4 rounded-xl shadow hover:scale-105 transition">
        <img src={product.image} alt={product.name} className="rounded-lg mb-3" />
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-200">₹{product.price}</p>
        <button
          className="mt-3 px-4 py-2 bg-pink-500 hover:bg-pink-600 rounded text-white w-full"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  