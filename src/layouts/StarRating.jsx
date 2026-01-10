
import { FaStar } from "react-icons/fa";

export default function StarRating({ rating}) {
  return (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, index) => (
        <FaStar
          key={index}
          className={`w-5 h-5 ${
            index < rating ? "text-orange-500" : `${null}`
          }`}
        />
      ))}
    </div>
  )
}
