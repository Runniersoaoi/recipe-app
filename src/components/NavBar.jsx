import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import NavInput from "./NavInput";
import ThemeButton from "./ThemeButton";
import logoReceapeAplicationSinBg from "../assets/logoReceapeAplicationSinBg.png";
import { ThemeContext } from "../context/ThemeContext";
import { MenuIcon } from "./Icons";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 1000; // Adjust this value according to your tablet/mobile breakpoint

  return (
    <header
      className={`w-full flex justify-center h-[60px] mb-5 ${
        theme ? "bg-lime-600" : "bg-black"
      }`}
    >
      <Container>
        <div className="flex items-center text-gray-50 gap-5 h-full justify-between font-normal">
          <div>
            <Link to={"/"}>
              <div className="w-2/4 min-w-36">
                <img src={logoReceapeAplicationSinBg} alt="" />
              </div>
            </Link>
          </div>
          <div className="flex gap-5 w-1/3 justify-end items-center">
            {isMobile ? (
              <>
                <div className="flex gap-5">
                  <div onClick={handleMobileMenuToggle}>
                    <MenuIcon />
                  </div>
                  <ThemeButton />
                </div>
                {isMobileMenuOpen && (
                  <div
                    className={`absolute w-10/12 mt-[132px]  py-4 z-10 flex justify-center ${
                      theme ? "bg-gray-200" : "bg-zinc-900"
                    }`}
                  >
                    <NavInput />
                  </div>
                )}
              </>
            ) : (
              // Renderizar el input de navegación y el botón de tema si no es móvil
              <>
                <NavInput />
                <ThemeButton />
              </>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default NavBar;
