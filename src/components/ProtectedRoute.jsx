import { Navigate, Outlet } from "react-router-dom";
import useStore from "../store/cartStore";

export default function ProtectedRoute() {
  const { isLoggedIn } = useStore();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}