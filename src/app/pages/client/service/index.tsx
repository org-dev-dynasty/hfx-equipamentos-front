import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";

import Tornearia from "../../../assets/Tornearia.png";
import Soldagem from "../../../assets/Soldagem.png";
import Fresagem from "../../../assets/Fresagem.png";
import Kit from "../../../assets/instalakit.png";
import Manutenção from "../../../assets/manutenção.png";
export function Service() {
    return (
        <>
            <Navbar page="Service"/>
            <main className="p-8 flex flex-col items-center bg-gray-100 font-main">
                <h1 className="text-xlarge font-bold text-center">Serviços</h1>
                <p className="w-1/2 max-md:w-full text-small text-center mt-4 mb-12">Conheça os serviços especializados em equipamentos de construção e demolição que a HFX oferece:</p>

                <section className="w-full gap-32 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
                    <div className={`flex justify-center hover:duration-200 hover:scale-105`}>
                        <div className="w-full text-center max-md:w-1/2 max-sm:w-full">
                            <div className="bg-white rounded-xl shadow-2xl mb-4">
                                <div className="p-4 border-b-2">
                                    <img className="w-full h-64 object-cover duration-200 hover:brightness-50" src={Tornearia} alt="Imagem de Tornearia" />
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
                                    <img className="w-full h-64 object-cover duration-200 hover:brightness-50" src={Soldagem} alt="Imagem de Soldagem" />
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
                                    <img className="w-full h-64 object-cover duration-200 hover:brightness-50" src={Fresagem} alt="Imagem de Fresagem" />
                                </div>
                                <h2 className="p-2 text-large text-center">Fresagem</h2>
                            </div>
                            <p>Nossos serviços de fresagem utilizam tecnologia avançada para proporcionar resultados de alta qualidade e precisão.</p>
                        </div>
                    </div>

                    <div className="flex justify-center duration-200 hover:scale-105">
                        <div className="w-full text-center max-md:w-1/2 max-sm:w-full">
                            <div className="bg-white rounded-xl shadow-2xl mb-4">
                                <div className="p-4 border-b-2">
                                    <img className="w-full h-64 object-cover duration-200 hover:brightness-50" src={Manutenção} alt="Imagem de Fresagem" />
                                </div>
                                <h2 className="p-2 text-large text-center">Manutenção</h2>
                            </div>
                            <p>Nós da HXF Equipamentos estamos prontos para prestar uma manutenção eficaz para te ajudar a solucionar qualquer desafio que você tiver</p>
                        </div>
                    </div>

                    <div className="flex justify-center duration-200 hover:scale-105">
                        <div className="w-full text-center max-md:w-1/2 max-sm:w-full">
                            <div className="bg-white rounded-xl shadow-2xl mb-4">
                                <div className="p-4 border-b-2">
                                    <img className="w-full h-64 object-cover duration-200 hover:brightness-50" src={Kit} alt="Imagem de Fresagem" />
                                </div>
                                <h2 className="p-2 text-large text-center">Montagem de kits</h2>
                            </div>
                            <p>A equipe especializada da HXF se prontifica a instalar o kit hidráulico de cada um dos produtos vendidos, garantindo a melhor experiência possível</p>
                        </div>
                    </div>
                </section>

                <section className="w-full mt-8">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.418004768813!2d-46.60970718789276!3d-23.6967623786182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce446410aff7f9%3A0x3b653ae235cc43c5!2sR.%20Marte%2C%2081%20-%20Serraria%2C%20Diadema%20-%20SP%2C%2009981-540!5e0!3m2!1spt-BR!2sbr!4v1713319162086!5m2!1spt-BR!2sbr" 
                        height="400"
                        loading="lazy"
                        className='p-4 w-full'
                    ></iframe>
                </section>
            </main>
            <Footer />
        </>
    )
}