import BookCard from "../components/BookCard";
import { books } from "../constants/books";

const BooksListPage = () => {


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => (
        <BookCard key={book.id} genre={book.genre} title={book.title} id={book.id} bookUserId={book.bookUserId}/>
      ))}
    </div>
  );
};

export default BooksListPage;
