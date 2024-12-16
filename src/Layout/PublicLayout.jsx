import { Outlet, useLocation } from "react-router";
import Navbar from "../Pages/Shared/Navbar";



const PublicLayout = () => {
    const location = useLocation()
    const noHeaderFooter= location.pathname.includes('login') ||
     location.pathname.includes('signup')
    
    return (
        <div>
          
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet/>
         
        </div>
    );
};

export default PublicLayout;