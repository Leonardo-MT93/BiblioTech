import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../auth/context/AuthContext";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log('Navbar', user)
  const {id} = user;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex  flex-wrap place-items-center h-24">
      <section className="flex relative mx-auto w-full h-24 ">
        <nav className="flex justify-between border border-b-blue-400   text-black w-full ">
          <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
            <NavLink className=" h-24 flex items-center justify-center " to="/">
              <img className="h-20 flex items-center" src="" alt="BIBLIOTECH" />
            </NavLink>
            <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-6 lg:space-x-12">
              <li>
                <NavLink
                  className="hover:border-b-2 hover:border-black md:text-sm lg:text-lg"
                  to={`${id}/mybooks`}
                >
                  Mis Libros
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="hover:border-b-2 hover:border-black md:text-sm lg:text-lg"
                  to="/books"
                >
                  Listado de libros
                </NavLink>
              </li>
              {/* SI INICIA SESION  */}
              {user && (
                <li>
                  <NavLink
                    className="hover:border-b-2 hover:border-black md:text-sm lg:text-lg"
                    to="/create"
                  >
                    Crear libro
                  </NavLink>
                </li>
              )}
              <li>
                <NavLink
                  className="hover:border-b-2 hover:border-black md:text-sm lg:text-lg"
                  to="/favorites"
                >
                  Favoritos
                </NavLink>
              </li>
            </ul>
            {!user && (
              <>
                <NavLink
                  className="hidden md:flex items-center space-x-5 px-4"
                  to="/login"
                >
                  <button>Iniciar Sesión</button>
                </NavLink>
                <NavLink
                  className="hidden md:flex items-center space-x-5 px-4"
                  to="/register"
                >
                  <button>Registrarse</button>
                </NavLink>
              </>
            )}
            <button
              className=" flex-col justify-center items-center md:hidden pr-4"
              onClick={handleClick}
            >
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
                  isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                }`}
              ></span>
            </button>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
