import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router";


const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <progress className="progress progress-secondary w-56" value="40" max="100"></progress>

    }
 if(user){
    return children
 }
 return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default PrivateRoute;