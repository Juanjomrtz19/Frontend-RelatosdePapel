import BookFilters from "../examples/BookFilters";
import ExplorarLibros from "../examples/ExplorarLibros";
import { GlobalContext } from "../context/GlobalContext";
import { useContext } from "react";

export const libros = [
  {
    id: 1,
    titulo: "El asesinato de Rubén de Oria",
    autor: "Carmen Álvarez",
    isbn: "978-84-666-7234-1",
    precio: 16.99,
    genero: "Misterio",
    descripcion:
      "Un crimen sacude la tranquila localidad de Oria. El detective Martínez debe desentrañar una red de secretos familiares y venganzas del pasado para descubrir quién asesinó a Rubén de Oria.",
    imagen: "/portadasLibro/ElAsesinatoDeRubenDeOria.png",
    stock: 22,
  },
  {
    id: 2,
    titulo: "El viaje hacia las tinieblas",
    autor: "Marcos Hernández",
    isbn: "978-84-339-8456-3",
    precio: 18.5,
    genero: "Terror",
    descripcion:
      "Una expedición perdida en las profundidades de una cueva ancestral descubre que las leyendas sobre criaturas oscuras son reales. Un viaje sin retorno hacia los horrores que acechan en la oscuridad.",
    imagen: "/portadasLibro/elViajeHaciaLasTinieblas.png",
    stock: 18,
  },
  {
    id: 3,
    titulo: "La caída del Imperio Romano",
    autor: "Eduardo Sánchez Montenegro",
    isbn: "978-84-206-5789-2",
    precio: 24.99,
    genero: "Historia",
    descripcion:
      "Un exhaustivo análisis de los factores políticos, económicos y militares que llevaron al colapso de Roma. Desde las invasiones bárbaras hasta la corrupción interna que destruyó el mayor imperio.",
    imagen: "/portadasLibro/laCaidaDelImperioRomano.png",
    stock: 15,
  },
  {
    id: 4,
    titulo: "Los magos de Macael",
    autor: "Laura Fernández",
    isbn: "978-84-450-1234-7",
    precio: 17.99,
    genero: "Fantasía",
    descripcion:
      "En el pueblo almeriense de Macael, una antigua orden de magos protege un secreto milenario. Cuando el equilibrio mágico se rompe, tres jóvenes deben dominar sus poderes para salvar ambos mundos.",
    imagen: "/portadasLibro/losMagosDeMacael.png",
    stock: 28,
  },
  {
    id: 5,
    titulo: "Una manzana cayendo cambió la física",
    autor: "Dr. Alberto Ruiz",
    isbn: "978-84-234-5678-9",
    precio: 19.99,
    genero: "Divulgación científica",
    descripcion:
      "La fascinante historia de cómo Newton revolucionó nuestra comprensión del universo. Desde la leyenda de la manzana hasta las leyes de la gravitación que transformaron la ciencia para siempre.",
    imagen: "/portadasLibro/unaManzanaCayendoCambioLaFisica.png",
    stock: 30,
  },
  {
    id: 6,
    titulo: "Your Name",
    autor: "Makoto Shinkai",
    isbn: "978-0-316-55851-4",
    precio: 15.99,
    genero: "Romance fantástico",
    descripcion:
      "Mitsuha y Taki intercambian cuerpos misteriosamente a través del tiempo y el espacio. Una conmovedora historia sobre el destino, el amor y la búsqueda de alguien que nunca has conocido pero siempre has conocido.",
    imagen: "/portadasLibro/yourName.png",
    stock: 35,
  },
];

const Explorar = () => {
  const { filteredLibros: libros } = useContext(GlobalContext);

  return (
    <section className="flex flex-col lg:grid lg:grid-cols-12 h-full">
      {/* Filtros - en móvil horizontal, en desktop sidebar */}
      <aside className="lg:col-span-2 lg:h-full border-b lg:border-b-0 lg:border-r border-surface-200">
        <BookFilters />
      </aside>
      <article className="flex-1 lg:col-span-10">
        <ExplorarLibros libros={libros} />
      </article>
    </section>
  );
};

export default Explorar;
