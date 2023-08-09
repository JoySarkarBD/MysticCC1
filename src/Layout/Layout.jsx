import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";

const Layout = () => {
  const location = useLocation();

  const noHeader =
    location.pathname.includes("/signup") ||
    location.pathname.includes("/login");
  return (
    <div className='container'>
      {noHeader || <Navbar />}
      <Outlet />
    </div>
  );
};

export default Layout;
