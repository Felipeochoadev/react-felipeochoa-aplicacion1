import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = true; // Simulación por ahora
    return isAuthenticated ? children : <Navigate to="/auth" />;
};

export default PrivateRoute;
