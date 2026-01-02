import MobileNavBar from "../examples/MobileNavBar";
import Carrito from "../examples/Carrito";
import { Outlet } from "react-router";

const MobileLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-papel">
      <MobileNavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Carrito />
    </div>
  );
};

export default MobileLayout;
