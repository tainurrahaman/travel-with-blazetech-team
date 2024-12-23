import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import Loadingpage from "../pages/Loadingpage";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loadingpage></Loadingpage>;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
