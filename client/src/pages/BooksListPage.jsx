import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
// import { books } from "../constants/books";

const BooksListPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/book');
        if (!response.ok) {
          throw new Error("Error al obtener los libros");
        }
        const {books} = await response.json();
        setBooks(books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => (
        <BookCard key={book._id} genre={book.genre} title={book.title} id={book._id} bookUserId={book.created_by}/>
      ))}
    </div>
  );
};

export default BooksListPage;
