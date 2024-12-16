import { Route, Routes } from "react-router";
import PublicLayout from "./Layout/PublicLayout";
// import Home from "./Pages/Home"

import Home from "./Pages/Home/Home";
import Menu from "./Pages/Shared/Menu";
import Orderd from "./Pages/Oderd/Orderd";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
// import UserLayout from "./Layout/UserLayout"
// import Profile from "./Pages/Profile"
// import Settings from "./Pages/sETTINGS.JSX"

function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<Home />} />
        <Route path="orderd/:category" element={<Orderd/>} />
        <Route path="orderd" element={<Orderd/>} />
        <Route path="menu" element={<Menu />} />
        <Route path="login" element= {<Login />} />
        <Route path="signup" element= {<SignUp />} />
      </Route>
      {/* <Route path="dashboard" element={<UserLayout />}>
        <Route index element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route> */}
    </Routes>
  );
}

export default App;
