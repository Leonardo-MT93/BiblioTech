import { useNavigate } from "react-router-dom";
import BookCard from "../components/BookCard";
import { mybooks } from "../constants/mybooks.js";

//BUSCAR LIBROS POR EL ID DEL USUARIO QUE LOS GENERO Y QUE PUEDA ELIMINARLOS

const MyBooksPage = () => {
  const userId = 1;
  const navigate = useNavigate();
  const handleDelete = (id) => {
    console.log("Deleting book with id", id);
  };

  const handleEdit = (id) => {
    console.log("Editing book with id", id);
    navigate(`/edit/${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <h2 className="">Mis libros</h2>
      {mybooks.map((book) => (
        <BookCard
          key={book.id}
          genre={book.genre}
          title={book.title}
          id={book.id}
          bookUserId={book.bookUserId}
          onDelete={handleDelete}
          onEdit={handleEdit}
          userId={userId}
        />
      ))}
    </div>
  );
};

export default MyBooksPage;
