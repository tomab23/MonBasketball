import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const LayoutWithNavbar = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutWithNavbar;