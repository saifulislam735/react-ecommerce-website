import { useContext } from "react";
import { AuthContex } from "../Component/Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContex)
    const location = useLocation()

    //when loading is true this if will execute
    if (loading) {
        return <div>Loading...........</div>
    }

    //when loading is false this if will execute
    if (user) {
        return children
    }

    return <Navigate to='/react-ecommerce-website/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;