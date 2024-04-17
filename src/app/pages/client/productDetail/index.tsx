import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { Bulldozer, HardHat, Pipe } from "@phosphor-icons/react";

import Tool from "../../../assets/Rompedor.png";

export function ProductDetail() {
    return (
        <>
        <Navbar page="ProductDetail"/>
        <main className="p-8 flex flex-col items-center bg-gray-100 font-jost">
            <h1 className="text-xlarge font-bold text-center">Rompedores</h1>
            <p className="w-1/2 max-md:w-full text-small text-center mt-4 mb-12">Os rompedores da HXF são fabricados com alta tecnologia e rigoroso controle de qualidade. Podem ser aplicados em:</p>
            
            <section className="flex items-start justify-evenly w-full gap-8 max-md:flex-col">
                <div className="w-1/5 max-md:w-full flex flex-col items-center">
                    <Bulldozer color="#0063AE" size={32}/>
                    <div className="w-[80%] h-[1px] bg-primary"/>
                    <div className="text-center mt-2">
                        <p>Abertura de valas.</p>
                        <p>Demolição em geral.</p>
                    </div>
                </div>
                <div className="w-1/5 max-md:w-full flex flex-col items-center">
                    <HardHat color="#0063AE" size={32}/>
                    <div className="w-[80%] h-[1px] bg-primary"/>
                    <div className="text-center mt-2">
                        <p>Quebra de matacos em pedreiras</p>
                        <p>Desmonte de rocha</p>
                    </div>
                </div>
                <div className="w-1/5 max-md:w-full flex flex-col items-center">
                    <Pipe color="#0063AE" size={32}/>
                    <div className="w-[80%] h-[1px] bg-primary"/>
                    <div className="text-center mt-2">
                        <p>Obras de saneamento básico</p>
                    </div>
                </div>
            </section>

            <section className="w-full mt-16">
                <div className="bg-white flex shadow-2xl max-md:flex-col">
                    <img className="h-64 object-contain" src={Tool} alt="Imagem do Rompedor" />
                    <div className="w-1/3 flex flex-col justify-between mr-4 my-4 max-md:w-full max-md:gap-4">
                        <select className="w-full p-2 rounded-lg shadow-xl border-2">
                            <option selected value="">Selecione o modelo</option>
                            <option value="">HR150</option>
                            <option value="">HR300</option>
                            <option value="">HR450</option>
                        </select>
                        <button className="bg-primary p-3 text-white font-bold rounded-xl text-small duration-150 hover:bg-blue-500">
                            Faça orçamento
                        </button>
                    </div>
                    <div className="w-full p-4">
                        <h3 className="font-bold text-medium text-center">Especificações</h3>
                        <div className="gap-4 mt-2 grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1">
                            <div className="flex gap-8 justify-center">
                                <label className="font-bold">Modelo</label>
                                <label>HR150</label>
                            </div>
                            <div className="flex gap-8 justify-center">
                                <label className="font-bold">Modelo</label>
                                <label>HR150</label>
                            </div>
                            <div className="flex gap-8 justify-center">
                                <label className="font-bold">Modelo</label>
                                <label>HR150</label>
                            </div>
                            <div className="flex gap-8 justify-center">
                                <label className="font-bold">Modelo</label>
                                <label>HR150</label>
                            </div>
                            <div className="flex gap-8 justify-center">
                                <label className="font-bold">Modelo</label>
                                <label>HR150</label>
                            </div>
                            <div className="flex gap-8 justify-center">
                                <label className="font-bold">Modelo</label>
                                <label>HR150</label>
                            </div>
                            <div className="flex gap-8 justify-center">
                                <label className="font-bold">Modelo</label>
                                <label>HR150</label>
                            </div>
                            <div className="flex gap-8 justify-center">
                                <label className="font-bold">Modelo</label>
                                <label>HR150</label>
                            </div>
                            <div className="flex gap-8 justify-center">
                                <label className="font-bold">Modelo</label>
                                <label>HR150</label>
                            </div>
                            <div className="flex gap-8 justify-center">
                                <label className="font-bold">Modelo</label>
                                <label>HR150</label>
                            </div>
                            <div className="flex gap-8 justify-center">
                                <label className="font-bold">Modelo</label>
                                <label>HR150</label>
                            </div>
                            <div className="flex gap-8 justify-center">
                                <label className="font-bold">Modelo</label>
                                <label>HR150</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}