import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="w-full border-t border-opacity-20 border-black
    font-medium lg:text-lg sm:text-base "
    >
      <div className="w-full flex flex-col items-center justify-center py-10 md:flex-row md:justify-evenly ">
        <span>
          {new Date().getFullYear()} - Prueba Técnica - Fullstack Developer
        </span>
        <div className="flex items-center">
          Desarrollado con <span className="text-2xl px-1">&#9825;</span>
          por&nbsp;
          <Link to="/" className="underline  underline-offset-2">
            LeoTolaba
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;