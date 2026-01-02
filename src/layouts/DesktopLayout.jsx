import DesktopNavBar from "../examples/DesktopNavBar";
import Carrito from "../examples/Carrito";
import { Outlet } from "react-router";

const DesktopLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-papel">
      <DesktopNavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Carrito />
    </div>
  );
};

export default DesktopLayout;
