import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BooksListPage from "../pages/BooksListPage";
import FavoritesPage from "../pages/FavoritesPage";
import BookDetailPage from "../pages/BookDetailPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CreateBookPage from "../pages/CreateBookPage";
import EditBookPage from "../pages/EditBookPage";
import MyBooksPage from "../pages/MyBooksPage";

const AppRouter = () => {
  return (
    <Routes>
      <>
        {/* RUTAS PUBLICAS */}
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksListPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        {/* RUTAS PRIVADAS */}
        <Route path="/create" element={<CreateBookPage />} />
        <Route path="/edit/:id" element={<EditBookPage />} />
        <Route path="/:id/mybooks" element={<MyBooksPage />} />
      </>
    </Routes>
  );
};

export default AppRouter;
