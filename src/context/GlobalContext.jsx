import React, { createContext, useState } from "react";
import { libros } from "../pages/Explorar";
import { useEffect } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [genders, setGenders] = useState([]);
  const [price, setPrice] = useState("");
  const [filteredLibros, setFilteredLibros] = useState(libros);
  const [carrito, setCarrito] = useState(() => {
    const carritoGuardado = localStorage.getItem("carrito");
    return carritoGuardado ? JSON.parse(carritoGuardado) : [];
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let updatedLibros = libros;

    if (name.trim() !== "") {
      updatedLibros = updatedLibros.filter((libro) =>
        libro.titulo.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (genders.length > 0) {
      updatedLibros = updatedLibros.filter((libro) =>
        genders.includes(libro.genero)
      );
    }

    if (price !== "" && price > 0) {
      updatedLibros = updatedLibros.filter((libro) => libro.precio <= price);
    }

    setFilteredLibros(updatedLibros);
  }, [name, genders, price]);

  const handleName = (event) => {
    try {
      setName(event.target.value);
    } catch (error) {
      console.error("Error al filtrar por nombre:", error);
    }
  };

  const handleGenders = (event) => {
    try {
      if (event.target.checked) {
        const newGenders = [...genders, event.target.value];
        setGenders(newGenders);
      } else {
        const newGenders = genders.filter((g) => g !== event.target.value);
        setGenders(newGenders);
      }
    } catch (error) {
      console.error("Error al seleccionar el género:", error);
    }
  };

  const handlePrice = (event) => {
    try {
      const value = event.target.value;
      const formattedValue = value < 0 ? 0 : value;
      setPrice(formattedValue);
    } catch (error) {
      console.error("Error al formatear el precio:", error);
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        name,
        handleName,
        genders,
        handleGenders,
        price,
        handlePrice,
        filteredLibros,
        carrito,
        setCarrito,
        open,
        setOpen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
