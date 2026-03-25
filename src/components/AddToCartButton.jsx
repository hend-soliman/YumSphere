import { useNavigate } from "react-router-dom";
import useCartStore from "../store/cartStore";

export default function AddToCartButton({ item, isLoggedIn }) {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleClick = () => {
    if (!isLoggedIn) {
      navigate("/login", {
        state: { from: "/menu", item },
      });
      return;
    }

    addToCart(item);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-[#ffc554] text-white py-2 rounded-lg hover:bg-orange-500 transition">
      Add to Cart
    </button>
  );
}