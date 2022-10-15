import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingScreen from "../components/LoadingScreen";

function AuthRequire({ children }) {
  const { success, sessionId } = useAuth();
  console.log(useAuth());
  const location = useLocation();
  if (!success) {
    return <LoadingScreen />;
  }

  if (!sessionId) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default AuthRequire;
