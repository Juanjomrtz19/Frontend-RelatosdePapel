const LibroCard = ({ libro }) => {
  return (
    <article className="h-full bg-amber-100 p-2 rounded-lg flex flex-col cursor-pointer hover:scale-105 hover:shadow-lg transition-all duration-200">
      <div className="aspect-[2/3] w-full rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={libro.imagen}
          alt={libro.titulo}
          className="h-full w-full object-top object-cover"
        />
      </div>
      <div className="flex flex-col flex-1 mt-2">
        <h3 className="font-semibold text-lg line-clamp-2">{libro.titulo}</h3>
        <p className="text-sm text-gray-700 line-clamp-1">{libro.autor}</p>
        <p className="mt-auto font-bold text-md">{libro.precio} €</p>
      </div>
    </article>
  );
};

export default LibroCard;
