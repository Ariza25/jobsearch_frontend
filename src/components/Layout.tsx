import { useLocation } from "react-router-dom";
import { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  
  const hideNavbarOnRoutes = [
    "/companylogin",
    "/companyregister",
    "/userlogin",
    "/userregister",
  ];

  const hideFooterOnRoutes = [
    "/companylogin",
    "/companyregister",
    "/userlogin",
    "/userregister",
  ];

  const showNavbar = !hideNavbarOnRoutes.includes(location.pathname);
  const showFooter = !hideFooterOnRoutes.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
      {showFooter && <Footer />}
    </>
  );
};

export default Layout;
