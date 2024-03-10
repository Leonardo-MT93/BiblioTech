import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import BooksListPage from "../pages/BooksListPage"
import FavoritesPage from "../pages/FavoritesPage"

const AppRouter = () => {
  return (
    <Routes>
        <>
            {/* RUTAS PUBLICAS */}
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<BooksListPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="*" element={<Navigate to="/"/>} />
        </>
    </Routes>
  )
}

export default AppRouter