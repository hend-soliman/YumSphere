// import { useNavigate } from "react-router-dom";
// import useCartStore from "../store/CartStore";

// export default function AddToCartButton({ item, isLoggedIn }) {
//   const navigate = useNavigate();
//   const addToCart = useCartStore((state) => state.addToCart);

//   const handleClick = () => {
//     if (!isLoggedIn) {
//       navigate("/login", {
//         state: { from: "/menu", item },
//       });
//       return;
//     }

//     addToCart(item);
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className="bg-[#ffc554] text-white py-2 rounded-lg hover:bg-orange-500 transition">
//       Add to Cart
//     </button>
//   );
// }



import { useNavigate } from "react-router-dom";
import useStore from "../store/CartStore"; // تم تصحيح الاسم ليطابق default export

export default function AddToCartButton({ item, isLoggedIn }) {
  const navigate = useNavigate();
  const addToCart = useStore((state) => state.addToCart); // استخدام useStore الصحيح

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