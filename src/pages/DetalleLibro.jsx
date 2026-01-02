import { useParams, useNavigate } from "react-router";
import { libros } from "./Explorar";
import Button from "../components/Button";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import useCarrito from "../hooks/useCarrito";

const DetalleLibro = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCarrito();

  const libro = libros.find((libro) => libro.id === parseInt(id));

  if (!libro) {
    return (
      <div className="flex items-center justify-center h-full pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-secondary-800 mb-4">
            Libro no encontrado
          </h2>
          <Button
            onClick={() => navigate("/explorar")}
            label="Volver a explorar"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-surface-50">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 bg-white rounded-xl shadow-xl border border-surface-200 p-4 md:p-8">
          <div className="md:col-span-4">
            <div className="aspect-[1/1.5] max-w-xs mx-auto md:max-w-none rounded-lg overflow-hidden shadow-2xl ring-1 ring-surface-200">
              <img
                src={libro.imagen}
                alt={libro.titulo}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col">
            <div className="flex-1">
              <span className="inline-block bg-primary-50 text-primary-700 border border-primary-200 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                {libro.genero}
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-secondary-900 mb-3">
                {libro.titulo}
              </h1>
              <p className="text-lg md:text-xl text-secondary-600 mb-6">
                por {libro.autor}
              </p>
              <div className="mb-6">
                <span className="text-sm text-secondary-500">
                  ISBN: {libro.isbn}
                </span>
              </div>
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-secondary-800 mb-3">
                  Sinopsis
                </h2>
                <p className="text-secondary-700 leading-relaxed text-justify">
                  {libro.descripcion}
                </p>
              </div>
              {/* Stock */}
              <div className="mb-6">
                <span
                  className={`inline-flex items-center gap-2 text-sm font-medium ${
                    libro.stock > 10
                      ? "text-accent-600"
                      : libro.stock > 0
                      ? "text-primary-600"
                      : "text-red-600"
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-current"></span>
                  {libro.stock > 0 ? `${libro.stock} disponibles` : "Agotado"}
                </span>
              </div>
            </div>

            {/* Precio y botón de compra */}
            <div className="border-t border-surface-200 pt-6 mt-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-secondary-500 uppercase tracking-wide font-medium mb-1">
                    Precio
                  </p>
                  <p className="text-3xl md:text-4xl font-bold text-primary-700">
                    {libro.precio.toFixed(2)} €
                  </p>
                </div>
                <Button
                  disabled={libro.stock === 0}
                  onClick={() => agregarAlCarrito(libro)}
                  label={
                    libro.stock > 0 ? "Añadir al carrito" : "No disponible"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleLibro;
