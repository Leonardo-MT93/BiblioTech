import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../auth/context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const { id } = user ? user : "";
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout(false);
    navigate("/");
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
                  to="/books"
                >
                  Listado de libros
                </NavLink>
              </li>

              {user && (
                <>
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
                      to="/create"
                    >
                      Crear libro
                    </NavLink>
                  </li>
                </>
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
            {user && (
              <>
                <div className="flex items-center">
                  <div className="relative">
                    <button
                      type="button"
                      className="w-56 inline-flex justify-center  rounded-md bg-blue-900 px-3 py-2 text-sm font-semibold text-white  hover:text-gray-300"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      {user.email}
                      <svg
                        className="-mr-1 h-5 w-5 text-gray-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <div
                        className="w-full absolute right-0 z-10 origin-top-right rounded-md bg-blue-800 text-white focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                      >
                        <div className="py-1" role="none">
                          <button
                            type="submit"
                            className=" block w-full px-4 py-2 text-center text-sm"
                            role="menuitem"
                            tabIndex="-1"
                            id="menu-item-3"
                            onClick={handleLogout}
                          >
                            Sign out
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </nav>
      </section>
    </div>
  );
};

export default Navbar;
