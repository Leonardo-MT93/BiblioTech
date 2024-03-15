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
        <Form className="flex  w-full flex-col items-center justify-center sm:pt-3 px-10">
          <div className="flex flex-col items-center justify-center w-[40%] ">
            <h1 className="text-3xl font-bold text-center">Iniciar Sesión</h1>
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
                className="mt-4 mb-3 py-4 bg-blue-600 w-96 rounded-full text-white font-semibold text-base leading-6"
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
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
