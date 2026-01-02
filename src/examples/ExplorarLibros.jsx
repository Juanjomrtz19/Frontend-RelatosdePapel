import { useNavigate } from "react-router";
import LibroCard from "./LibroCard";

const ExplorarLibros = ({ libros }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/libro/${id}`);
  };

  return (
    <article className="p-4 flex flex-col gap-4">
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {libros.map((libro) => (
          <div key={libro.id} onClick={() => handleClick(libro.id)}>
            <LibroCard libro={libro} />
          </div>
        ))}
      </section>
    </article>
  );
};

export default ExplorarLibros;
