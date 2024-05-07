import { Link } from "react-router-dom";
import logo from "../images/logo.png"

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-950">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={logo}
              className="h-20"
              alt="JobSearch"
            />
           
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <Link
              to="/companylogin"
              className="text-sm  text-gray-500 dark:text-white hover:underline"
            >
              Acesso Empresarial
            </Link>
            <Link
              to="/userlogin"
              className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"
            >
              Acesso Pessoal
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              <li>
                <a
                  href="/"
                  className="text-gray-900 dark:text-white hover:underline"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/todasasvagas"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  Vagas disponíveis
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
