import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const ProtectedRoutes = () => {
    const { products, loading } = useContext(UserContext);
    const location = useLocation();

    if(loading) {
        return null;
    }

    return products ? <Outlet /> : <Navigate to='/' state={{ from: location }} />  
}