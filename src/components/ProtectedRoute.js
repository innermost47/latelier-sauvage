import Auth from "../js/Auth";

const ProtectedRoute = ({ children }) => {
  const auth = Auth.isAuthenticated();
  return auth ? children : null;
};

export default ProtectedRoute;
