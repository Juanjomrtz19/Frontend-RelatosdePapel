import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import CheckInput from "../components/CheckInput";
import TextField from "../components/TextField";

const BookFilters = () => {
  const { name, handleName, genders, handleGenders, price, handlePrice } =
    useContext(GlobalContext);

  const genderOptions = [
    "Ficción",
    "Romance",
    "Ciencia",
    "Historia",
    "Fantasía",
    "Misterio",
  ];

  return (
    <div className="flex flex-row lg:flex-col gap-4 p-4 overflow-x-auto lg:overflow-x-visible">
      {/* Buscador - visible en móvil y desktop */}
      <div className="flex-shrink-0 w-full lg:w-auto">
        <input
          type="text"
          value={name}
          onChange={handleName}
          placeholder="Buscar libros..."
          className="w-full px-4 py-2 border border-surface-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Filtros de género - solo visible en desktop */}
      <div className="hidden lg:block">
        <h3 className="font-semibold text-secondary-800 mb-3">Géneros</h3>
        <CheckInput
          options={genderOptions}
          values={genders}
          onChange={handleGenders}
        />
      </div>
    </div>
  );
};

export default BookFilters;
