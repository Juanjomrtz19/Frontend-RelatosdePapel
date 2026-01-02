import { useContext } from "react";
import { useNavigate } from "react-router";
import { GlobalContext } from "../context/GlobalContext";
import useCarrito from "../hooks/useCarrito";
import Button from "../components/Button";

const Checkout = () => {
  const { carrito, setCarrito } = useContext(GlobalContext);
  const { vaciarCarrito } = useCarrito();
  const navigate = useNavigate();

  const calcularTotal = () => {
    return carrito.reduce((total, libro) => total + libro.precio, 0);
  };

  const handlePago = () => {
    alert("¡Pedido realizado con éxito! Gracias por tu compra.");
    vaciarCarrito();
    setCarrito([]);
    navigate("/explorar");
  };

  if (carrito.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8">
        <svg
          className="w-32 h-32 text-secondary-300 mb-6"
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
        <h2 className="text-2xl font-bold text-secondary-800 mb-4">
          Tu carrito está vacío
        </h2>
        <p className="text-secondary-600 mb-6">
          Añade algunos libros antes de proceder al checkout
        </p>
        <Button label="Explorar libros" onClick={() => navigate("/explorar")} />
      </div>
    );
  }

  return (
    <div className="min-h-full bg-surface-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-6">
          Finalizar compra
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Resumen de productos */}
          <div className="flex-1 bg-white rounded-xl shadow-lg border border-surface-200 p-4 md:p-6">
            <h2 className="text-xl font-semibold text-secondary-800 mb-4">
              Resumen del pedido ({carrito.length}{" "}
              {carrito.length === 1 ? "libro" : "libros"})
            </h2>

            <div className="space-y-4 max-h-96 overflow-y-auto">
              {carrito.map((libro) => (
                <article
                  key={libro.isbn}
                  className="flex gap-4 p-3 bg-surface-50 rounded-lg border border-surface-200"
                >
                  <div className="w-16 h-24 md:w-20 md:h-28 flex-shrink-0 rounded overflow-hidden shadow">
                    <img
                      src={libro.imagen}
                      alt={libro.titulo}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="font-semibold text-secondary-900 line-clamp-2">
                      {libro.titulo}
                    </h3>
                    <p className="text-sm text-secondary-600 mt-1">
                      {libro.autor}
                    </p>
                    <p className="text-lg font-bold text-primary-700 mt-2">
                      {libro.precio.toFixed(2)} €
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Panel de pago */}
          <div className="lg:w-80 bg-white rounded-xl shadow-lg border border-surface-200 p-4 md:p-6 h-fit">
            <h2 className="text-xl font-semibold text-secondary-800 mb-4">
              Total a pagar
            </h2>

            <div className="space-y-3 border-b border-surface-200 pb-4 mb-4">
              <div className="flex justify-between text-secondary-600">
                <span>Subtotal</span>
                <span>{calcularTotal().toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-secondary-600">
                <span>Envío</span>
                <span className="text-accent-600 font-medium">Gratis</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold text-secondary-800">
                Total
              </span>
              <span className="text-2xl font-bold text-primary-700">
                {calcularTotal().toFixed(2)} €
              </span>
            </div>

            <button
              onClick={handlePago}
              className="w-full bg-accent-600 hover:bg-accent-700 text-white py-4 rounded-lg font-semibold transition-all shadow-md hover:shadow-lg hover:scale-105"
            >
              Confirmar y pagar
            </button>

            <button
              onClick={() => navigate("/explorar")}
              className="w-full mt-3 text-secondary-600 hover:text-secondary-800 py-2 font-medium transition-colors"
            >
              ← Seguir comprando
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
