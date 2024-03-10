import { useEffect, useState } from "react";
import { mybooks } from "../constants/mybooks";
import { useParams } from "react-router-dom";

const EditBookPage = () => {

  const { id } = useParams();

  // Buscar el libro en la lista de libros
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
  });

  useEffect(() => {
    // Buscar el libro en la lista de libros por id y establecer los datos en el estado formData
    const bookData = mybooks.find((book) => book.id === Number(id));
    if (bookData) {
      setFormData({
        title: bookData.title,
        author: bookData.author,
        genre: bookData.genre,
        year: bookData.year.toString(),
      });
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const { title, author, genre, year } = formData;
    console.log(title, author, genre, year);
    //Conecto con la base de datos y envio los datos del libro que edite
  };

  if (!formData.title) {
    return <div>Libro no encontrado</div>;
  }

  return (
    <div className="bg-blue-900 rounded-md h-[50vh] flex flex-col items-center justify-around">
    <h2 className="text-3xl text-white">Edición de un libro</h2>
    <form className="w-[30vw] mx-auto " onSubmit={handleEditSubmit}>
      <div className="relative z-0 w-full mb-5 ">
        <input
          type="text"
          name="floating_title"
          id="floating_title"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={formData.title}
            onChange={handleInputChange}
        />
        <label
          htmlFor="floating_title"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Titulo
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 ">
        <input
          type="text"
          name="author"
          id="author"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={formData.author}
            onChange={handleInputChange}
        />
        <label
          htmlFor="author"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Autor
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 ">
        <input
          type="text"
          name="genre"
          id="floating_genre"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={formData.genre}
            onChange={handleInputChange}        />
        <label
          htmlFor="floating_genre"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
         Género
        </label>
      </div>
      <div className="relative z-0 w-full mb-5 ">
        <input
          type="text"
          name="year"
          id="floating_year"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={formData.year}
            onChange={handleInputChange}
        />
        <label
          htmlFor="floating_year"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
         Año
        </label>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Editar
      </button>
    </form>
  </div>
  )
}

export default EditBookPage