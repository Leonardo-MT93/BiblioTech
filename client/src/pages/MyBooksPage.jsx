import BookCard from "../components/BookCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/context/AuthContext.jsx";
import useFetch from "../hooks/useFetch.js";


const MyBooksPage = () => {
  const {user} = useContext(AuthContext)
  const [books, setBooks] = useState([]);
  const {id} = user;
  const {getBooks} = useFetch();



  useEffect(() => {
    const allBooks = getBooks();
    allBooks.then((data) => {
      setBooks(data);
    });
  }, []);

  const myBooks = books.filter((book) => book.created_by === id);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {myBooks.map((book) => ( 
        <BookCard
          key={book._id}
          genre={book.genre} 
          title={book.title}
          id={book._id}
          bookUserId={book.created_by}
          userId={id}
        />
      ))}
    </div>
  );
};

export default MyBooksPage;
