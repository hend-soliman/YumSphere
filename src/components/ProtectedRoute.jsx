import { Navigate, Outlet } from "react-router-dom";
import useStore from "../store/CartStore";

export default function ProtectedRoute() {
  const { isLoggedIn } = useStore();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}