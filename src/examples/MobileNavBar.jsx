import { Link } from "react-router";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

const MobileNavBar = () => {
  const { setOpen, carrito } = useContext(GlobalContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      name: "Explorar",
      to: "/explorar",
    },
  ];

  return (
    <header className="bg-primary-800 text-papel sticky top-0 z-30">
      <div className="flex justify-between items-center p-4">
        <Link to="/">
          <h1 className="font-bold text-lg text-papel">Relatos de papel</h1>
        </Link>
        <div className="flex items-center gap-3">
          {/* Botón carrito */}
          <button
            onClick={() => setOpen(true)}
            className="p-2 hover:bg-primary-700 rounded-lg transition-colors relative"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {carrito.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {carrito.length}
              </span>
            )}
          </button>
          {/* Botón menú hamburguesa */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 hover:bg-primary-700 rounded-lg transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable */}
      <nav
        className={`overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <ul className="px-4 pb-4">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 hover:bg-primary-700 rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MobileNavBar;
