import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";

import Tornearia from "../../../assets/Tornearia.png";
import Soldagem from "../../../assets/Soldagem.png";
import Fresagem from "../../../assets/Fresagem.png";
export function Service() {
    return (
        <>
            <Navbar page="Service"/>
            <main className="p-8 flex flex-col items-center bg-gray-100 font-jost">
                <h1 className="text-xlarge font-bold text-center">Serviços</h1>
                <p className="w-1/2 max-md:w-full text-small text-center mt-4 mb-12">Conheça os serviços especializados em equipamentos de construção e demolição que a HFX oferece:</p>

                <section className="w-full gap-32 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
                    <div className={`flex justify-center hover:duration-200 hover:scale-105`}>
                        <div className="w-full text-center max-md:w-1/2 max-sm:w-full">
                            <div className="bg-white rounded-xl shadow-2xl mb-4">
                                <div className="p-4 border-b-2">
                                    <img className="w-full h-64 object-cover" src={Tornearia} alt="Imagem de Tornearia" />
                                </div>
                                <h2 className="p-2 text-large text-center">Tornearia</h2>
                            </div>
                            <p>Nossos serviços de tornearia são realizados por profissionais qualificados e equipamentos de última geração.</p>
                        </div>
                    </div>

                    <div className="flex justify-center duration-200 hover:scale-105">
                        <div className="w-full text-center max-md:w-1/2 max-sm:w-full">
                            <div className="bg-white rounded-xl shadow-2xl mb-4">
                                <div className="p-4 border-b-2">
                                    <img className="w-full h-64 object-cover" src={Soldagem} alt="Imagem de Soldagem" />
                                </div>
                                <h2 className="p-2 text-large text-center">Soldagem</h2>
                            </div>
                            <p>Os serviços de soldagem da HFX são executados com excelência e precisão, garantindo durabilidade e resistência.</p>
                        </div>
                    </div>

                    <div className="flex justify-center duration-200 hover:scale-105">
                        <div className="w-full text-center max-md:w-1/2 max-sm:w-full">
                            <div className="bg-white rounded-xl shadow-2xl mb-4">
                                <div className="p-4 border-b-2">
                                    <img className="w-full h-64 object-cover" src={Fresagem} alt="Imagem de Fresagem" />
                                </div>
                                <h2 className="p-2 text-large text-center">Fresagem</h2>
                            </div>
                            <p>Nossos serviços de fresagem utilizam tecnologia avançada para proporcionar resultados de alta qualidade e precisão.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}