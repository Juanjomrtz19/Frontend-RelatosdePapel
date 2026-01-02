import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const useCarrito = () => {
  const { carrito, setCarrito } = useContext(GlobalContext);

  const agregarAlCarrito = (libro) => {
    if (!carrito.find((item) => item.isbn === libro.isbn)) {
      localStorage.setItem(
        "carrito",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("carrito") || "[]"),
          libro,
        ])
      );
      setCarrito([...carrito, libro]);
    }
  };

  const obtenerCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito") || "[]");
  };

  const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
  };

  const eliminarDelCarrito = (isbn) => {
    const carritoActual = JSON.parse(localStorage.getItem("carrito") || "[]");
    const nuevoCarrito = carritoActual.filter((libro) => libro.isbn !== isbn);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    setCarrito(nuevoCarrito);
  };

  return {
    agregarAlCarrito,
    obtenerCarrito,
    vaciarCarrito,
    eliminarDelCarrito,
  };
};

export default useCarrito;
