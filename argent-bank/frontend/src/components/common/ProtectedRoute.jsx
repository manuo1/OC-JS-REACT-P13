import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProtectedRoute() {
  const token = useSelector((state) => state.user.token);

  if (!token) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
}
