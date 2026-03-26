import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const isLogin = useSelector((state) => state.auth.isLogin);

  if (!isLogin) {
    toast.error("Please login first 🔐");
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
