import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "../services/authService";

const ProtectedRoute = () => {
  const token = getToken();
  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
