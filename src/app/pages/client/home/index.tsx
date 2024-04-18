import { ImageSlider } from "../../../components/ImageSlider";
import { Navbar } from "../../../components/Navbar";
import PhotoMaquina from "../../../assets/maquina1.png"
import Medal from "../../../assets/medalha.png";
import { CardProduct } from "../../../components/CardProduct";
import { Eye, TreasureChest, Gear, Headset, Lightbulb, Check } from "@phosphor-icons/react";

import Tools from "../../../assets/Rompedor.png";
import Tools2 from "../../../assets/Tesoura.png";
import Tools3 from "../../../assets/Engate.png";
import Tools4 from "../../../assets/Compactador.png";
import { Footer } from "../../../components/Footer";

export function Home() {
    return (
        <>
            <Navbar page="Home" />
            <main className="bg-gray-100">
                <ImageSlider />
                <section className="mt-10">
                    <div className="text-center">
                        <h1 className="text-xlarge font-jost font-bold max-md:text-large max-sm:text-medium ">Produtos do mês</h1>
                        <p className="text-large font-jost max-md:text-medium max-sm:text-small ">Abaixo encontram-se os produtos em destaque da HXF.</p>
                    </div>
                    <hr className="mt-3 mx-2 " />

                    <div className="flex justify-center">
                        <div className="gap-12 my-8 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                            <CardProduct image={Tools} name="Rompedores Hidráulicos" />
                            <CardProduct image={Tools2} name="Tesoura Hidráulica" />
                            <CardProduct image={Tools3} name="Engate Rápido" />
                            <CardProduct image={Tools4} name="Compactadores" />
                        </div>
                    </div>
                </section>

                <section className="flex mt-5">
                    <div className="bg-primary w-3/5 h-86 p-3">
                        <h1 className="text-large font-jost font-bold text-white lg:text-xlarge">Sobre a HFX</h1>
                        <p className="text-large text-white text-jost mt-3 max-md:text-medium max-sm:text-small">
                            A HXF tem como diferencial a qualidade inquestionável dos produtos e serviços ofertados.
                        </p>
                        <p className="text-large text-white text-jost mt-3 max-md:text-medium max-sm:text-small">
                            Além de agilidade na entrega e garantia. Tudo isso com um preço competitivo, para melhor atendermos nossos clientes e parceiros.
                        </p>
                        <p className="text-large text-white text-jost mt-3 max-md:text-medium max-sm:text-small">
                            Nossa missão é oferecer ao mercado soluções em diversas áreas industriais, fabricação, manutenção e montagem de equipamentos industriais, soluções e implementos para escavadeiras e afins, serviços de caldeiraria e usinagem.
                        </p>
                    </div>
                    <img
                        src={PhotoMaquina}
                        alt="Foto da maquina"
                        className="w-2/5 h-86"
                    />
                </section>

                <section className="mt-10">
                    <div className="text-center">
                        <h1 className="text-xlarge font-jost font-bold max-md:text-large max-sm:text-medium ">Certificações</h1>
                        <p className="text-large font-jost max-md:text-medium max-sm:text-small">Abaixo encontram-se as certificações HXF.</p>
                    </div>
                    <hr className="mt-3 mx-2 " />
                    <div className="flex justify-center mt-3">
                        <img src={Medal} alt="Medalha" className="w-32 h-32 " />
                    </div>

                </section>
                <hr className="mt-3 mx-2" />

                <section className="flex p-3 mx-20 max-sm:grid grid-cols-1 gap-10 mt-5">
                    <div className="flex flex-col justify-center items-center  max-md:border-b-0 w-1/2 max-sm:mx-auto mt-5">
                        <Eye color="#0063AE" size={32} />
                        <p className="text-xlarge text-black text-jost font-bold max-md:text-large max-sm:text-medium">
                            Visão
                        </p>
                        <p className="text-large text-black text-jost mt-5 text-center max-md:text-medium  max-sm:text-small mb-10 w-full ">
                            Ser referência no mercado como empresa fabricante de produtos e serviços para o segmento industrial metalmecânica e de equipamentos/produtos destinados à construção civil, mineração e afins.
                        </p>
                    </div>

                    <div className="border-r border-gray-300 h-50 max-sm:border-b "></div>

                    <div className="flex flex-col h-full justify-center items-center max-md:border-b-0 w-1/2  max-sm:mx-auto">
                        <TreasureChest color="#0063AE" size={32} />
                        <p className="text-xlarge text-black text-jost font-bold max-md:text-large max-sm:text-medium">
                            Valores
                        </p>
                        <div className="flex text-large text-black text-jost mt-10 text-center gap-20 items-center max-md:text-medium max-sm:text-small mb-10 ">
                            <ul className="flex flex-col list-disc max-sm:mb-10">
                                <li>Honestidade</li>
                                <li>Integridade</li>
                                <li>Respeito</li>
                            </ul>
                            <ul className="flex flex-col list-disc max-sm:mb-10">
                                <li>Segurança</li>
                                <li>Inovação</li>
                                <li>Qualidade</li>
                            </ul>
                        </div>


                    </div>
                </section>

                <div className=" md:hidden lg:hidden  max-sm:border-b border-gray-300 w-50 "></div>

                <section className="max-sm:grid grid-cols-1">
                    <div className="flex flex-col justify-center text-center mt-5">
                        <p className="text-xlarge text-black text-jost font-bold max-md:text-large max-sm:text-medium">Política de Qualidade</p>
                        <p className=" text-black text-jost mt-3 text-large max-md:text-medium max-sm:text-small ">A HXF compromete-se a fornecer soluções e serviços com alta qualidade sempre buscando a satisfação do cliente através de:</p>

                    </div>
                    <div className="flex justify-center my-5 ">
                        <ul className="flex-col grid gap-7  max-md:grid grid-cols-2 px-3 mb-5  max-sm:grid-cols-1 mx-auto mt-5">
                            <li className="flex items-center text-medium  text-black text-jost w-full mb-10 max-sm:text-small">
                                <Headset color="#0063AE" size={24} className="mr-3" />
                                Atender aos requisitos dos clientes
                            </li>
                            <li className="flex items-center text-medium text-black text-jost w-full mb-10 max-sm:text-small">
                                <Gear color="#0063AE" size={24} className="mr-3" />
                                Seguir normas técnicas de mecânica e normas aplicáveis
                            </li>
                            <li className="flex items-center text-medium text-black text-jost w-full max-sm:text-small mb-10">
                                <Lightbulb color="#0063AE" size={24} className="mr-3" />
                                Fornecer soluções aos nossos clientes
                            </li>
                            <li className="flex items-center text-medium text-black text-jost w-full max-sm:text-small ">
                                <Check color="#0063AE" size={24} className="mr-3" />
                                Tudo isso aliado a melhoria continua de nossos processos e serviços.
                            </li>
                        </ul>
                    </div>

                    <p className="text-center my-5 lg:text-medium max-sm:text-small"></p>

                </section>
            </main>
            <Footer />
        </>
    )
}