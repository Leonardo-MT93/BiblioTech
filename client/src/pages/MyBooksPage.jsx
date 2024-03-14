import { useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/context/AuthContext.jsx";

//BUSCAR LIBROS POR EL ID DEL USUARIO QUE LOS GENERO Y QUE PUEDA ELIMINARLOS

const MyBooksPage = () => {
  const {user} = useContext(AuthContext)
  const [books, setBooks] = useState([]);
  const {id} = user;
  const navigate = useNavigate();
  const handleDelete = (id) => {
    console.log("Deleting book with id", id);
  };

  const handleEdit = (id) => {
    console.log("Editing book with id", id);
    navigate(`/edit/${id}`);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:9000/api/book');
        if (!response.ok) {
          throw new Error("Error al obtener los libros");
        }
        const {books} = await response.json();
        console.log(books)
        setBooks(books);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
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
          onDelete={handleDelete}
          onEdit={handleEdit}
          userId={id}
        />
      ))}
    </div>
  );
};

export default MyBooksPage;
