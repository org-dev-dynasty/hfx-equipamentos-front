import { Link } from "react-router-dom";
import logo from "../../assets/logoPreta.svg"
import { useState } from "react";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <div className="bg-blue-100 py-4 w-full flex justify-between items-center rounded-lg rounded-t-none hover:bg-white duration-500">
            <div className="ml-3">
                <img src={logo} className="w-50 h-20" alt="Logo Azul" />
            </div>

            <div className="hidden sm:flex justify-center space-x-12  ">
                <div>
                    <Link to={'/'} className="text-black duration-500 hover:text-primary text-medium">Home</Link>
                </div>
                <div>
                    <Link to={'/product'} className="text-black duration-500 hover:text-primary text-medium">Produtos</Link>
                </div>
                <div>
                    <Link to={'/service'} className="text-black duration-500 hover:text-primary text-medium">Serviços</Link>
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
                <div className="sm:hidden absolute top-16 right-0 bg-white w-full mt-10 py-2 px-1 ">
                    <div className="flex flex-col items-center py-4 space-y-2 border-x-2 border-t-1 border-y-2">
                        <button className="hover:bg-primary  hover:text-white w-full  text-center">
                            <Link to={'/'} className="text-black duration-500 hover:text-white text-medium">Home</Link>
                            <hr className=" w-full "/>
                        </button>
                        
                        <button className="hover:bg-primary w-full h-full text-center">
                            <Link to={'/product'} className="text-black duration-500 hover:text-white text-medium">Produtos</Link>
                            <hr className=" w-full "/>
                        </button>
                        
                        <button className="hover:bg-primary w-full text-center">
                            <Link to={'/service'} className="text-black duration-500 hover:text-white text-medium">Serviços</Link>
                        </button>
                    </div>
                </div>
            )}
        </div>


    );
}
// className="text-white hover:text-gray-200 transition duration-300 hover:bg-primary"

