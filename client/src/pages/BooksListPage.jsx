import BookCard from "../components/BookCard";
import { books } from "../constants/books";


const BooksListPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} genre={book.genre} title={book.title}/>
        // <div key={book.id}>
        //   <h2>{book.title}</h2>
        //   <p>Author: {book.author}</p>
        //   <p>Year: {book.year}</p>
        //   <p>Genre: {book.genre}</p>
        // </div>
      ))}

      
    </div>
  );
};

export default BooksListPage;
