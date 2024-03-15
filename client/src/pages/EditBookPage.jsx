import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate, useParams } from "react-router-dom";

const EditBookPage = () => {
  const {id} = useParams();
  const {getBookForId, updateBook} = useFetch();
  const [book, setBook] = useState({});
  const [formEnviado, setFormEnviado] = useState(false);
  const [formError, setFormError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      const fetchedBook = await getBookForId(id);
      setBook(fetchedBook);
    };
    fetchBook();
  }, [id]);


  return (
    <Formik
      initialValues={{
        title: '',
        author: '',
        genre: '',
        year: '',
      }}
      validate={(valores) => {
        let errores = {};
        if (!valores.title) {
          errores.title = "Título inválido. Mín 3 caract.";
        } else if (!/[a-zA-Z][a-zA-Z ]/.test(valores.title)) {
          errores.title = "Sólo inserte letras y espacios";
        }
        if (!valores.author) {
          errores.author = "Autor inválido. Mín 3 caract.";
        } else if (!/[a-zA-Z][a-zA-Z ]/.test(valores.author)) {
          errores.author = "Sólo inserte letras y espacios";
        }
        if (!valores.genre) {
          errores.genre = "Género inválido. Mín 3 caract.";
        } else if (!/[a-zA-Z][a-zA-Z ]/.test(valores.genre)) {
          errores.genre = "Sólo inserte letras y espacios";
        }
        if (!valores.year) {
          errores.year = "Mín 3 caract.";
        } else if (!/[0-9]/.test(valores.year)) {
          errores.year = "Sólo inserte números sin espacios";
        }

        return errores;
      }}
      onSubmit={async (valores, { resetForm }) => {
        try {
          const result = await updateBook(id, valores);
          console.log("Result", result);
          resetForm();
          setFormError(null);
          setFormEnviado(true);
          setTimeout(() => {
            setFormEnviado(false);
            navigate("/")
          }, 1000);
        } catch (error) {
          setFormError(error.message);
        }
      }}
    >
      {({ values, handleBlur }) => (
        <Form className="flex w-full flex-col items-center px-6 md:px-2 lg:px-10  ">
          <div className="flex flex-col items-center justify-center w-[40%] ">
            <h1 className="text-3xl font-bold text-center">Editar Libro</h1>
            <div className="flex flex-col w-[95%] sm:flex-row justify-between ">
            <div className="flex flex-col w-full ">
              <label
                className="w-full flex justify-start text-lg lg:text-base md:text-sm  font-bold leading-6"
                htmlFor="title"
              >
                Título:
              </label>
              <Field
                type="text"
                className="w-full py-1 px-4 border border-gray rounded-lg "
                id="title"
                name="title"
                placeholder={book.title}
                value={values.title}
                onBlur={handleBlur}
                
              />
              <div className="w-full h-5">
                <ErrorMessage
                  className="flex justify-start text-red-600 text-sm"
                  name="title"
                  component="div"
                ></ErrorMessage>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[95%] sm:flex-row justify-between ">
            <div className="flex flex-col w-full ">
              <label
                className="w-full flex justify-start text-lg lg:text-base md:text-sm  font-bold leading-6"
                htmlFor="author"
              >
                Autor:
              </label>
              <Field
                type="text"
                className="w-full py-1 px-4 border border-gray rounded-lg "
                id="author"
                name="author"
                placeholder={book.author}
                value={values.author}
                onBlur={handleBlur}
                
              />
              <div className="w-full h-5">
                <ErrorMessage
                  className="flex justify-start text-red-600 text-sm"
                  name="author"
                  component="div"
                ></ErrorMessage>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[95%] sm:flex-row justify-between ">
            <div className="flex flex-col w-full ">
              <label
                className="w-full flex justify-start text-lg lg:text-base md:text-sm  font-bold leading-6"
                htmlFor="genre"
              >
                Género:
              </label>
              <Field
                type="text"
                className="w-full py-1 px-4 border border-gray rounded-lg "
                id="genre"
                name="genre"
                placeholder={book.genre}
                value={values.genre}
                onBlur={handleBlur}
                
              />
              <div className="w-full h-5">
                <ErrorMessage
                  className="flex justify-start text-red-600 text-sm"
                  name="genre"
                  component="div"
                ></ErrorMessage>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[95%] sm:flex-row justify-between ">
            <div className="flex flex-col w-full ">
              <label
                className="w-full flex justify-start text-lg lg:text-base md:text-sm  font-bold leading-6"
                htmlFor="genre"
              >
                Año de publicación:
              </label>
              <Field
                type="number"
                className="w-full py-1 px-4 border border-gray rounded-lg "
                id="year"
                name="year"
                placeholder={book.year}
                value={values.year}
                onBlur={handleBlur}
                
              />
              <div className="w-full h-5">
                <ErrorMessage
                  className="flex justify-start text-red-600 text-sm"
                  name="year"
                  component="div"
                ></ErrorMessage>
              </div>
            </div>
          </div>

          <div className="w-[70%] lg:w-[55%] flex items-center justify-center ">
            <button
              type="submit"
              className="mt-1 sm:mt-4 mb-0 sm:mb-2 py-4 bg-blue-600 w-96 rounded-full text-white font-semibold text-base leading-6 "
            >
              Editar
            </button>
          </div>
        <div className="w-full h-5 mt-1 sm:mt-0 sm:h-10 flex items-center justify-center ">
        {formEnviado && (
            <p className="flex justify-start text-green-500 text-sm ">
              Libro editado exitosamente!
            </p>
          )}
          {formError && (
            <p className="flex justify-start text-red-600 text-sm">
              {formError}
            </p>
          )}
        </div>
          </div>

          
        </Form>
      )}
    </Formik>
  );
}

export default EditBookPage