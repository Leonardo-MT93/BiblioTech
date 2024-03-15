import BookCard from "../components/BookCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/context/AuthContext.jsx";
import useFetch from "../hooks/useFetch.js";


const FavoritesPage = () => {
  const {user} = useContext(AuthContext);
  const {id} = user;
  const [books, setBooks] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const {getFavorites} = useFetch();



  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favorites = await getFavorites(id);
        setBooks(favorites);
        setIsFavorite(favorites.includes(id));
      } catch (error) {
        console.error('Error al obtener favoritos:', error.message);
      }
    };
  
    fetchFavorites();
  }, []); 
  console.log(books)


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((book) => ( 
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

export default FavoritesPage;
