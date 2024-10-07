// components/Auth/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoute = ({ component: Component }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Component /> : <Navigate to="/login" />; // Agar foydalanuvchi autentifikatsiyalangan bo'lsa, sahifaga o'tkazadi
};

export default PrivateRoute;
