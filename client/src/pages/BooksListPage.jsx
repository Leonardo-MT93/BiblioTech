import { useContext, useEffect, useState } from "react";
import BookCard from "../components/BookCard";
import { AuthContext } from "../auth/context/AuthContext";
import useFetch from "../hooks/useFetch";

const BooksListPage = () => {
  const {user} = useContext(AuthContext);
  const {id} = user || {id: null};
  const [books, setBooks] = useState([]);
  const {getBooks} = useFetch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const booksFromDB = await getBooks();
        setBooks(booksFromDB);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => (
        <BookCard key={book._id} genre={book.genre} title={book.title} id={book._id} bookUserId={book.created_by} 
        userId={id}
        />
      ))}
    </div>
  );
};

export default BooksListPage;
