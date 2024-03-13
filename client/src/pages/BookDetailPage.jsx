import { useParams } from "react-router-dom";
// import { books } from "../constants/books";
import { useEffect, useState } from "react";

const BookDetailPage = () => {
  const { id } = useParams();
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/book/${id}`);
        if (!response.ok) {
          throw new Error("Error al obtener los libros");
        }
        const { searchedBook } = await response.json();
        setSelectedBook(searchedBook);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="w-full h-[60vh] flex flex-col items-center justify-around ">
      <h1 className="text-3xl font-bold  border-b-black">Detalles</h1>
      <div className="max-w-4xl h-[40vh] flex flex-col justify-around p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {selectedBook && (
          <>
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              {`Título: ${selectedBook.title}`}
            </h2>
            <h3 className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
              {`Autor: ${selectedBook.author}`}
            </h3>
            <h3 className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
              {`Género: ${selectedBook.genre}`}
            </h3>
            <h3 className="mb-3 text-lg font-normal text-gray-700 dark:text-gray-400">
              {`Año: ${selectedBook.year}`}
            </h3>
          </>
        )}
      </div>
    </div>
  );
};

export default BookDetailPage;
