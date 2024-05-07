import { useLocation } from "react-router-dom";
import logo from "../images/logo.png"

const Footer = () => {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/register") {
    return null;
  }

  return (
    <>
      <footer className=" bg-white shadow dark:bg-gray-950">
        <div className="p-4 ">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a
              href="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
            <img
                src={logo}
                className="h-24"
                alt="JobSearch"
              />
             
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a href="/" className="hover:underline me-4 md:me-6">
                  Home
                </a>
              </li>
              <li>
                <a href="/allvacancies" className="hover:underline me-4 md:me-6">
                  Vagas Disponíveis
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024
            <a href="https://matheusariza25.com/" className="ms-1 hover:underline" target="_blank">
              Desenvolvido por Matheus Ariza
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
