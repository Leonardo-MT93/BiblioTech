import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useLogin from "../hooks/useLogin";

const LoginPage = () => {

  const [formEnviado, setFormEnviado] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const { handleLogin } = useLogin();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validate={(valores) => {
        let errores = {};
        if (!valores.email) {
          errores.email = "Ingrese un email válido";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(valores.email)
        ) {
          errores.email = "Email inválido";
        }
        if (!valores.password) {
          errores.password = "Ingrese una contraseña válida.";
        } else if (valores.password.length < 6) {
          errores.password = "Contraseña corta. Caracteres mínimos: 6";
        }

        return errores;
      }}
      onSubmit={async (valores, { resetForm }) => {
        try {
          const result = await handleLogin(valores);
          console.log(result);
          resetForm();
          setLoginError(null);
          setFormEnviado(true);
          setTimeout(() => {
            setFormEnviado(false);
            navigate("/");
          }, 1000);
        } catch (error) {
          console.log("Error al iniciar sesion", error.message);
          setLoginError(error.message);
        }
      }}
    >
      {({ values, handleBlur }) => (
        <Form className="flex  w-full flex-col items-center  sm:w-[50%] sm:pt-3 px-10 border border-red-600">
          <div className="flex w-full flex-col lg:w-[80%]   ">
            <label
              className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm "
              htmlFor="email"
            >
              Email:
            </label>
            <Field
              type="email"
              className="w-full   py-1 px-4 border border-gray rounded-lg"
              id="email"
              name="email"
              placeholder="name@gmail.com"
              value={values.email}
              onBlur={handleBlur}
            />
            <div className="w-full h-5">
              <ErrorMessage
                className="flex justify-start text-red-600 text-sm"
                name="email"
                component="div"
              ></ErrorMessage>
            </div>
          </div>
          <div className="flex w-full flex-col  lg:w-[80%]  ">
            <label
              className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm  "
              htmlFor="password"
            >
              Contraseña
            </label>
            <Field
              type="password"
              className="w-full   py-1 px-4 border border-gray rounded-lg "
              id="password"
              name="password"
              placeholder="Ingrese su contraseña"
              value={values.password}
              onBlur={handleBlur}
            />
            <div className="w-full h-5">
              <ErrorMessage
                className="flex justify-start text-red-600 text-sm"
                name="password"
                component="div"
              ></ErrorMessage>
            </div>
          </div>

          <div className="w-[70%] lg:w-[55%] flex items-center justify-center  ">
            <button
              type="submit"
              className="mt-4 mb-3 py-4 bg-avocadoGreen w-96 rounded-full text-white font-semibold text-base leading-6"
            >
              Iniciar Sesión
            </button>
          </div>
          <div className="w-full h-10 flex items-center justify-center ">
            {formEnviado && (
              <p className="flex justify-start text-green-500 text-sm">
                Sesión iniciada exitosamente!
              </p>
            )}
            {loginError && (
              <p className="flex justify-start text-red-600 text-sm">
                {loginError}
              </p>
            )}
          </div>
        </Form>
      )}
    </Formik>)


  // const handleLogin = (e) => {
  //   e.preventDefault()
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   console.log(email, password);
  // }
    

  // return (
  //   <div className="shadow dark:bg-gray-800 dark:border-gray-700 rounded-md  h-[40vh] flex flex-col items-center justify-around">
  //     <h2 className="text-3xl text-white">Inicio de Sesión</h2>
  //     <form className="max-w-md mx-auto" onSubmit={handleLogin}>
  //       <div className="relative z-0 w-full mb-5 ">
  //         <input
  //           type="email"
  //           name="email"
  //           id="email"
  //           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  //           placeholder=" "
  //           required
  //         />
  //         <label
  //           htmlFor="email"
  //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  //         >
  //           Email address
  //         </label>
  //       </div>
  //       <div className="relative z-0 w-full mb-5 ">
  //         <input
  //           type="password"
  //           name="password"
  //           id="password"
  //           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  //           placeholder=" "
  //           required
  //         />
  //         <label
  //           htmlFor="password"
  //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  //         >
  //           Password
  //         </label>
  //       </div>
  //       <button
  //         type="submit"
  //         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  //       >
  //         Iniciar Sesión
  //       </button>
  //     </form>
  //   </div>
  // );
};


export default LoginPage;
