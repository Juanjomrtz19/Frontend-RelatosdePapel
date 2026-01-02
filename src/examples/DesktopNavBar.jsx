import { Link } from "react-router";
import Button from "../components/Button";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const DesktopNavBar = () => {
  const { setOpen, carrito } = useContext(GlobalContext);

  const links = [
    {
      name: "Explorar",
      to: "/explorar",
    },
  ];

  return (
    <header className="flex justify-between items-center p-4 bg-primary-800 text-papel">
      <Link to="/">
        <h1 className="font-bold text-xl text-papel">Relatos de papel</h1>
      </Link>
      <div className="flex gap-6 items-center">
        <nav>
          <ul>
            {links.map((link) => (
              <li key={link.name} className="inline-block mx-2">
                <Link to={link.to}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={() => setOpen(true)}
          className="bg-accent-600 hover:bg-accent-700 text-white px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2"
        >
          Ver carrito
          {carrito.length > 0 && (
            <span className="bg-white text-accent-700 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {carrito.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default DesktopNavBar;
