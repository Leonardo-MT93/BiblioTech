import { useParams } from "react-router-dom";
import { books } from "../constants/books";

const BookDetailPage = () => {
  const { id } = useParams();

  const book = books.find((book) => book.id === parseInt(id));
  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-around ">
      <h1 className="text-3xl font-bold  border-b-black">Detalles</h1>
      <div className="max-w-4xl h-[40vh] flex flex-col justify-around p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {`Título: ${book.title}`}
        </h2>
        <h3 className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
          {`Autor: ${book.author}`}
        </h3>
        <h3 className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
          {`Género: ${book.genre}`}
        </h3>
        <h3 className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
          {`Año: ${book.year}`}
        </h3>
      </div>
    </div>
  );
};

export default BookDetailPage;
