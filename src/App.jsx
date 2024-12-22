import { Route, Routes } from "react-router-dom";
import PublicLayout from "./Layout/PublicLayout";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Shared/Menu";
import Orderd from "./Pages/Oderd/Orderd";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import Secret from "./Components/Secret";
import DashBorad from "./Layout/DashBorad";
import Cart from "./Pages/Dashboard/Cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="orderd/:category" element={<Orderd />} />
        <Route path="orderd" element={<Orderd />} />
        <Route path="menu" element={<Menu />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route
          path="secret"
          element={
            <PrivateRoute>
              <Secret />
            </PrivateRoute>
          }
        />
      </Route>

      {/* Dashboard routes */}
      <Route path="dashboard" element={<DashBorad />}>
        <Route index element={<h2>Welcome to the Dashboard</h2>} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
