import { useContext } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../context/GlobalContext";
import useCarrito from "../hooks/useCarrito";

const Carrito = () => {
  const { open, setOpen, carrito, setCarrito } = useContext(GlobalContext);
  const { eliminarDelCarrito } = useCarrito();
  const navigate = useNavigate();

  const handleEliminar = (isbn) => {
    eliminarDelCarrito(isbn);
    const nuevoCarrito = carrito.filter((libro) => libro.isbn !== isbn);
    setCarrito(nuevoCarrito);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, libro) => total + libro.precio, 0);
  };

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          open ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-primary-700 text-white p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold">Carrito</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-white hover:text-primary-100 text-3xl font-light transition-colors"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {carrito.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg
                className="w-24 h-24 text-secondary-300 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-secondary-500 text-lg">
                Tu carrito está vacío
              </p>
              <p className="text-secondary-400 text-sm mt-2">
                Agrega algunos libros para comenzar
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {carrito.map((libro) => (
                <article
                  key={libro.isbn}
                  className="flex gap-3 bg-surface-50 rounded-lg p-3 border border-surface-200"
                >
                  <div className="w-16 h-24 flex-shrink-0 rounded overflow-hidden">
                    <img
                      src={libro.imagen}
                      alt={libro.titulo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col">
                    <h3 className="font-semibold text-secondary-900 text-sm line-clamp-2">
                      {libro.titulo}
                    </h3>
                    <p className="text-xs text-secondary-600 mt-1">
                      {libro.autor}
                    </p>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="font-bold text-primary-700">
                        {libro.precio.toFixed(2)} €
                      </span>
                      <button
                        onClick={() => handleEliminar(libro.isbn)}
                        className="text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        {carrito.length > 0 && (
          <div className="border-t border-surface-200 p-4 bg-surface-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-secondary-700 font-medium">Total:</span>
              <span className="text-2xl font-bold text-primary-700">
                {calcularTotal().toFixed(2)} €
              </span>
            </div>
            <button
              onClick={() => {
                setOpen(false);
                navigate("/checkout");
              }}
              className="w-full bg-accent-600 hover:bg-accent-700 text-white py-3 rounded-lg font-semibold transition-colors shadow-md hover:shadow-lg"
            >
              Finalizar compra
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default Carrito;
