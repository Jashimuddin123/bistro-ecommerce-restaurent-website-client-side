import { Outlet, useLocation } from "react-router";
import Navbar from "../Pages/Shared/Navbar";
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'


const PublicLayout = () => {
    const location = useLocation()
    const noHeaderFooter= location.pathname.includes('login') ||
     location.pathname.includes('signup')
    
    return (
        <div>
          
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet/>
            {/* <TanStackRouterDevtools /> */}
         
        </div>
    );
};

export default PublicLayout;