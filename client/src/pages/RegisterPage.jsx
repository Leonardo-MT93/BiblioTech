import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import useRegister from "../hooks/useRegister";
import { useNavigate } from "react-router-dom";


const RegisterPage = () => {

  const [formEnviado, setFormEnviado] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const { handleRegister } = useRegister();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validate={(valores) => {
        let errores = {};
        if (!valores.name) {
          errores.name = "Nombre inválido. Mín 3 caract.";
        } else if (!/[a-zA-Z][a-zA-Z ]/.test(valores.name)) {
          errores.name = "Sólo inserte letras y espacios";
        }
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
        console.log(valores)
        try {
          const {name, email, password } = valores;
          const result = await handleRegister({
            name,
            email,
            password,
          });
          console.log("Result", result);
          resetForm();
          setLoginError(null);
          setFormEnviado(true);
          setTimeout(() => {
            setFormEnviado(false);
            navigate('/');
          }, 2000);
        } catch (error) {
          setLoginError(error.message);
        }
      }}
    >
      {({ values, handleBlur }) => (
        <Form className="flex w-[50%] flex-col items-center px-6 md:px-2 lg:px-10   border border-red-500">
          <div className="flex flex-col w-[95%] sm:flex-row justify-between ">
            <div className="flex flex-col w-full sm:w-[45%]">
              <label
                className="w-full flex justify-start text-lg lg:text-base md:text-sm  font-bold leading-6"
                htmlFor="name"
              >
                Nombre:
              </label>
              <Field
                type="text"
                className="w-full py-1 px-4 border border-gray rounded-lg "
                id="name"
                name="name"
                placeholder="Ingrese su nombre"
                value={values.name}
                onBlur={handleBlur}
              />
              <div className="w-full h-5">
                <ErrorMessage
                  className="flex justify-start text-red-600 text-sm"
                  name="name"
                  component="div"
                ></ErrorMessage>
              </div>
            </div>
          </div>
          <div className="flex w-[95%] flex-col">
            <label
              className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm "
              htmlFor="email"
            >
              Email:
            </label>
            <Field
              type="email"
              className="w-full    py-1 px-4 border border-gray rounded-lg"
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
          <div className="flex w-[95%] flex-col ">
            <label
              className="w-full flex justify-start font-bold leading-6 text-lg lg:text-base md:text-sm  "
              htmlFor="password"
            >
              Contraseña:
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
          {loginError && (
            <p className="flex justify-start text-red-600 text-sm">
              {loginError}
            </p>
          )}
        </div>
          
        </Form>
      )}
    </Formik>
  );

  // const handleRegister = (e) => {
  //   e.preventDefault()
  //   const email = e.target.email.value;
  //   const password = e.target.password.value;
  //   const repeat_password = e.target.repeat_password.value;
  //   const first_name = e.target.first_name.value;
  //   const last_name = e.target.last_name.value;
  //   console.log(email, password, repeat_password, first_name, last_name)
  // }


  // return (
  //   <div className="shadow dark:bg-gray-800 dark:border-gray-700 rounded-md h-[50vh] flex flex-col items-center justify-around">
  //     <h2 className="text-3xl text-white">Registro de usuario</h2>
  //     <form className="max-w-md mx-auto " onSubmit={handleRegister}>
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
  //       <div className="relative z-0 w-full mb-5 ">
  //         <input
  //           type="password"
  //           name="repeat_password"
  //           id="repeat_password"
  //           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  //           placeholder=" "
  //           required
  //         />
  //         <label
  //           htmlFor="repeat_password"
  //           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  //         >
  //           Confirm password
  //         </label>
  //       </div>
  //       <div className="grid md:grid-cols-2 md:gap-6">
  //         <div className="relative z-0 w-full mb-5 ">
  //           <input
  //             type="text"
  //             name="first_name"
  //             id="first_name"
  //             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  //             placeholder=" "
  //             required
  //           />
  //           <label
  //             htmlFor="first_name"
  //             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  //           >
  //             First name
  //           </label>
  //         </div>
  //         <div className="relative z-0 w-full mb-5 ">
  //           <input
  //             type="text"
  //             name="last_name"
  //             id="last_name"
  //             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
  //             placeholder=" "
  //             required
  //           />
  //           <label
  //             htmlFor="last_name"
  //             className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
  //           >
  //             Last name
  //           </label>
  //         </div>
  //       </div>

  //       <button
  //         type="submit"
  //         className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  //       >
  //         Registrarse
  //       </button>
  //     </form>
  //   </div>
  // );
};

export default RegisterPage;
