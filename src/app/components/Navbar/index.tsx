import { Link } from "react-router-dom";
import logo from "../../assets/logoPreta.svg"

import { useEffect, useState } from "react";

export function Navbar({page} : {page: string}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
          const position = window.pageYOffset;
          setScrollPosition(position);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <nav className={`${page != "Home" ? "" : "fixed"} top-0 z-10 bg-white ${scrollPosition < 10 ? 'bg-opacity-40' : ''} py-4 w-full flex justify-between items-center rounded-lg rounded-t-none hover:bg-white duration-500`}>
            <div className="ml-3">
                <img src={logo} className="w-50 h-20" alt="Logo Azul" />
            </div>

            <div className="hidden sm:flex justify-center gap-8  ">
                <div>
                    <Link to={'/'} className={`font-bold ${page == "Home" ? "text-primary underline decoration-primary" : "text-black"} duration-200 text-medium hover:text-primary hover:underline hover:decoration-primary`}>Home</Link>
                </div>
                <div>
                    <Link to={'/product'} className={`font-bold ${page == "Product" ? "text-primary underline decoration-primary" : "text-black"} duration-200  text-medium hover:text-primary hover:underline hover:decoration-primary`}>Produtos</Link>
                </div>
                <div>
                    <Link to={'/service'} className={`font-bold ${page == "Service" ? "text-primary underline decoration-primary" : "text-black"} duration-200 text-medium hover:text-primary hover:underline hover:decoration-primary`}>Serviços</Link>
                </div>
                <div>
                    <Link to={'/admin/login'} className={`font-bold ${page == "SignIn" ? "text-primary underline decoration-primary" : "text-secondary"} duration-200 text-medium hover:text-primary hover:underline hover:decoration-primary`}>SignIn</Link>
                </div>
            </div>

            <button className="hidden sm:inline-flex bg-primary w-32 h-12 justify-center items-center text-center rounded-md  hover:bg-blue-300 duration-500 mr-5 ">
                <Link to={'/contato'} className="text-white ">Contato</Link>
            </button>

            <div className="sm:hidden mr-5">
                <button onClick={toggleMenu} className="text-black hover:text-primary focus:outline-none">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {menuOpen && (
                <div className="sm:hidden absolute top-16 right-0 bg-white w-full mt-10 py-2 px-1">
                    <div className="flex flex-col items-center py-4 gap-4">
                        <button className=" hover:text-white w-full text-center">
                            <Link to={'/'} className={`font-bold ${page == "Home" ? "text-primary underline decoration-primary" : "text-black"} duration-200 text-medium hover:text-primary hover:underline hover:decoration-primary`}>Home</Link>
                        </button>
                        
                        <button className="w-full h-full text-center">
                            <Link to={'/product'} className={`font-bold ${page == "Product" ? "text-primary underline decoration-primary" : "text-black"} duration-200 text-medium hover:text-primary hover:underline hover:decoration-primary`}>Produtos</Link>
                        </button>
                        
                        <button className="w-full text-center">
                            <Link to={'/service'} className={`font-bold ${page == "Service" ? "text-primary underline decoration-primary" : "text-black"} duration-200 text-medium hover:text-primary hover:underline hover:decoration-primary`}>Serviços</Link>
                        </button>
                    </div>
                </div>
            )}
        </nav>


    );
}
// className="text-white hover:text-gray-200 transition duration-300 hover:bg-primary"

