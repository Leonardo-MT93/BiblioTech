import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import useFetch from "../hooks/useFetch";


const CreateBookPage = () => {
  const {createBook} = useFetch()
  const [formEnviado, setFormEnviado] = useState(false);
  const [formError, setFormError] = useState(null);
  return (
    <Formik
      initialValues={{
        title: "",
        author: "",
        genre: "",
        year: "",
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
          const {title, author, genre, year } = valores;
          const result = await createBook({
            title,
            author,
            year,
            genre
          });
          console.log("Result", result);
          resetForm();
          setFormError(null);
          setFormEnviado(true);
          setTimeout(() => {
            setFormEnviado(false);
          }, 2000);
        } catch (error) {
          setFormError(error.message);
        }
      }}
    >
      {({ values, handleBlur }) => (
        <Form className="flex w-full flex-col items-center px-6 md:px-2 lg:px-10  ">
          <div className="flex flex-col w-[95%] sm:flex-row justify-between ">
            <div className="flex flex-col w-full sm:w-[45%]">
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
                placeholder="Ingrese el título del libro"
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
            <div className="flex flex-col w-full sm:w-[45%]">
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
                placeholder="Ingrese el título del libro"
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
            <div className="flex flex-col w-full sm:w-[45%]">
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
                placeholder="Ingrese el título del libro"
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
            <div className="flex flex-col w-full sm:w-[45%]">
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
                placeholder="Ingrese el título del libro"
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
              className="mt-1 sm:mt-4 mb-0 sm:mb-2 py-4 bg-avocadoGreen w-96 rounded-full text-white font-semibold text-base leading-6 "
            >
              Registrarse
            </button>
          </div>
        <div className="w-full h-5 mt-1 sm:mt-0 sm:h-10 flex items-center justify-center ">
        {formEnviado && (
            <p className="flex justify-start text-green-500 text-sm ">
              Registrado exitosamente! Email de confirmacion enviado!
            </p>
          )}
          {formError && (
            <p className="flex justify-start text-red-600 text-sm">
              {formError}
            </p>
          )}
        </div>
          
        </Form>
      )}
    </Formik>
  );
}

export default CreateBookPage