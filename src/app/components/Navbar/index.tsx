import { Link } from "react-router-dom";
import logo from "../../assets/logoLogin.png"

import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export function Navbar({ page }: { page: string }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    const toggleSubmenu = () => {
        setSubmenuOpen(!submenuOpen);
    };

    const toggleMenum = () => {
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
        <nav className={`${page != "Home" ? "" : "fixed"} top-0 z-10 bg-white ${scrollPosition < 10 ? 'bg-transparent' : ''} py-4 px-4  w-full flex justify-between items-center rounded-lg rounded-t-none hover:bg-white duration-500`}>
            <Link to={'/'}>
                <button className="ml-3" >
                    <img src={logo} className="h-10 w-full max-sm:h-7" alt="Logo Azul" />
                </button>
            </Link>

            <div className="flex ">
                <div className="hidden sm:flex gap-8  mt-2 font-main justify-center">
                    <div className="self-center">
                        <Link to={'/'} className={`font-bold ${page == "Home" ? "text-primary underline decoration-primary" : "text-black"} duration-500 text-medium hover:text-primary hover:underline hover:decoration-primary`}>HOME</Link>
                    </div>
                    <div className="self-center">
                        <Link to={'/hfx'} className={`font-bold ${page == "HXF" ? "text-primary underline decoration-primary" : "text-black"} duration-500  text-medium hover:text-primary hover:underline hover:decoration-primary`}>HXF</Link>
                    </div>
                    <div className="self-center">
                        <div>
                            <div className="hidden sm:flex gap-8 font-main">
                                <div className="relative">
                                    <Link
                                        to={'/product'}
                                        // onMouseEnter={toggleSubmenu}
                                        // onMouseLeave={toggleSubmenu}
                                        className={`flex font-bold ${page === "Product" ? "text-primary underline decoration-primary" : "text-black"} duration-500 text-medium hover:text-primary hover:underline hover:decoration-primary`}
                                    >
                                        PRODUTOS
                                        {submenuOpen ? <FaAngleUp onClick={toggleSubmenu} className="self-center  ml-1" /> : <FaAngleDown onClick={toggleSubmenu} className=" self-center ml-1" />}
                                    </Link>
                                    {submenuOpen && (
                                        <div onMouseEnter={()=>setSubmenuOpen(true)} onMouseLeave={()=>setSubmenuOpen(false)} className={`${submenuOpen ? "absolute" : "hidden"} top-full left-0 bg-white w-48 mt-1 py-2 px-4 border border-gray-200 rounded shadow-lg`}>
                                            <Link to="/product/1" className="block text-black hover:text-primary duration-200 py-2">Engate Rápido</Link>
                                            <div className=" md:hidden lg:hidden  max-sm:border-b border-gray-300 w-50 "></div>
                                            <Link to="/product/2" className="block text-black hover:text-primary duration-200 py-2">Tesoura Hidraulica</Link>
                                            <Link to="/product/3" className="block text-black hover:text-primary duration-200 py-2">Compactadores</Link>
                                            <Link to="/product/3" className="block text-black hover:text-primary duration-200 py-2">Rompedores</Link>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="self-center">
                        <Link to={'/service'} className={`font-bold ${page == "Service" ? "text-primary underline decoration-primary" : "text-black"} duration-500 text-medium hover:text-primary hover:underline hover:decoration-primary`}>SERVIÇOS</Link>
                    </div>
                    {/* <div className="self-center">
                        <Link to={'/videos'} className={`font-bold ${page == "Videos" ? "text-primary underline decoration-primary " : "text-black"} duration-500 text-medium hover:text-primary hover:underline hover:decoration-primary`}>VIDEOS</Link>
                    </div> */}

                    <button className="hidden sm:flex bg-primary w-40 h-12 justify-center items-center text-center  hover:bg-blue-900 font-bold font-main duration-500 ml-10 rounded-xl">
                        <Link to={'/contact'} className="text-white ">CONTATO</Link>
                    </button>
                </div>
                <div className="sm:hidden mr-5">
                    <button onClick={toggleMenum} className="text-secondary hover:text-primary focus:outline-none">
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
                    <div className="sm:hidden absolute top-16 right-0 bg-white w-full py-2 px-1 z-50">
                        <div className="flex flex-col items-center py-4 gap-4">
                            <button className=" hover:text-white w-full text-center">
                                <Link to={'/'} className={`font-bold ${page == "Home" ? "text-primary underline decoration-primary" : "text-black"} duration-200 text-medium hover:text-primary hover:underline hover:decoration-primary`}>Home</Link>
                            </button>

                            <button className="w-full h-full text-center">
                                <Link to={'/hfx'} className={`font-bold ${page == "HFX" ? "text-primary underline decoration-primary" : "text-black"} duration-200 text-medium hover:text-primary hover:underline hover:decoration-primary`}>Sobre à HFX</Link>
                            </button>

                            <button className="w-full h-full text-center">
                                <Link to={'/product'} className={`font-bold ${page == "Product" ? "text-primary underline decoration-primary" : "text-black"} duration-200 text-medium hover:text-primary hover:underline hover:decoration-primary`}>Produtos</Link>
                            </button>

                            <button className="w-full text-center">
                                <Link to={'/service'} className={`font-bold ${page == "Service" ? "text-primary underline decoration-primary" : "text-black"} duration-200 text-medium hover:text-primary hover:underline hover:decoration-primary`}>Serviços</Link>
                            </button>
                            
                            <button className="w-full text-center">
                                <Link to={'/contact'} className={`font-bold ${page == "Contact" ? "text-primary underline decoration-primary" : "text-black"} duration-200 text-medium hover:text-primary hover:underline hover:decoration-primary`}>Contato</Link>
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>


    );
}


