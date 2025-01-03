import { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { CiShoppingCart } from "react-icons/ci";
import UseCart from "../../Hooks/UseCart";


const Navbar = () => {
  const {user, logOut}=useContext(AuthContext)
  const [cart]=UseCart()
  const handleLogout = () => {
    logOut()
  }
  const navlinks = (
    <ul className="flex space-x-4">
      <li>
        <Link to="/" className="px-4 py-1 rounded text-white">
          Home
        </Link>
      </li>
      <li>
        <NavLink to="/orderd/salad" className="px-4 py-1 rounded text-white">
         My Order
        </NavLink>
      </li>
      <li>
        <NavLink to="/menu" className="px-4 py-1 rounded text-white">
          Menu
        </NavLink>
      </li>
      <li>
      <button className="btn btn-sm">
    <NavLink to="dashboard/cart">
    <CiShoppingCart  className="text-2xl"/>
     <div className="badge badge-secondary">{cart.length}</div>
   
    </NavLink>
    

      </button>
      </li>
    {
      user ? <>
          <li>
          <button onClick={handleLogout} className="btn btn-active btn-neutral">Logout</button>

          </li>
      </> :
      <>
        <li>
        <NavLink to="/login" className="px-4 py-1 rounded text-white">
          Login
        </NavLink>
      </li>
      </>
    }
      <li>  <NavLink to="/secret" className="px-4 py-1 rounded text-white">
         Secret
        </NavLink></li>
    </ul>
  );
  
    return (
        <div className="navbar bg-blue-600 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navlinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">Food Restourent</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navlinks}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-secondary">Get Start</a>
        </div>
      </div>
    );
};

export default Navbar;