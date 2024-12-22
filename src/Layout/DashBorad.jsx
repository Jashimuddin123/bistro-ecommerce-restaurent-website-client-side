import { Link, Outlet } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { FaAd, FaAddressCard, FaAlignJustify, FaHome, FaShoppingBag } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import UseCart from "../Hooks/UseCart";

const DashBorad = () => {
    const [cart] = UseCart()
  return (
    <div className="flex mt-10">
      {/* Dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          {/* <li>
            <NavLink to="/dashboard" className="flex items-center">
              <span>Dashboard Home</span>
            </NavLink>
          </li> */}
             <li>
            <Link to="/dashboard/cart" className="flex items-center">
            <FaHome className="text-2xl"></FaHome>
              {/* <CiShoppingCart className="text-2xl text-white" /> */}
              <span className="ml-2">User Home</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/cart" className="flex items-center">
              <CiShoppingCart className="text-3xl " />
              <span className="ml-2">My Cart({cart.length})</span>
            </Link>
          </li>
       
          <li>
            <Link to="/dashboard/reservation" className="flex items-center">
            {/* <FaTowerObservation></FaTowerObservation> */}
              {/* <CiShoppingCart className="text-2xl text-white" /> */}
              <FaAddressCard className="text-2xl" />

              <span className="ml-2">Reservation</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/review" className="flex items-center">
            <FaAd className="text-2xl" />

              <span className="ml-2">Add a Review</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/bookings" className="flex items-center">
            {/* <FaBooking></FaBooking> */}
              {/* <CiShoppingCart className="text-2xl text-white" /> */}
              <FaAlignJustify className="text-2xl" />

              <span className="ml-2">My Bookings</span>
            </Link>
          </li>
        </ul>
        <div className="divider  divider-start"></div>

        <ul className="menu">
        <li>
            <Link to="/" className="flex items-center">
            <FaHome className="text-2xl"></FaHome>
              {/* <CiShoppingCart className="text-2xl text-white" /> */}
              <span className="ml-2">Home</span>
            </Link>
          </li>
        <li>
            <Link to="/" className="flex items-center">
            <FaAlignJustify className="text-2xl" />
            {/* <CiShoppingCart className="text-2xl text-white" /> */}
              <span className="ml-2">Menu</span>
            </Link>
          </li>
        <li>
            <Link to="/" className="flex items-center">
            <FaShoppingBag className="text-2xl" />
            {/* <CiShoppingCart className="text-2xl text-white" /> */}
              <span className="ml-2">Shop</span>
            </Link>
          </li>
        <li>
            <Link to="/" className="flex items-center">
            <MdContactMail className="text-2xl" />
            {/* <CiShoppingCart className="text-2xl text-white" /> */}
              <span className="ml-2">Contack</span>
            </Link>
          </li>
        </ul>

      </div>

      {/* Dashboard content */}
      <div className="flex-1 p-4">
        <Outlet /> {/* Renders child routes here */}
      </div>
    </div>
  );
};

export default DashBorad;
