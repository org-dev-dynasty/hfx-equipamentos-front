import { ImageSlider } from "../../../components/ImageSlider";
import { Navbar } from "../../../components/Navbar";
import { IoEyeOutline } from "react-icons/io5";
import PhotoMaquina from "../../../assets/maquina1.png"
import Medal from "../../../assets/medalha.png"
import { GiChest } from "react-icons/gi";
import { CardProduct } from "../../../components/CardProduct";

import Tools from "../../../assets/Rompedor.png";
import Tools2 from "../../../assets/Tesoura.png";
import Tools3 from "../../../assets/Engate.png";
import Tools4 from "../../../assets/Compactador.png";
import { Footer } from "../../../components/Footer";

import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { PiLightbulbThin } from "react-icons/pi";

export function Home() {
    return (
        <>
            <Navbar page="Home" />
            <main className="bg-gray-100">
                <ImageSlider />
                <section className="mt-10">
                    <div className="text-center">
                        <h1 className="text-large font-jost font-bold lg:text-xlarge">Detalhes</h1>
                        <p className="text-small font-jost lg:text-large">Abaixo encontram-se os produtos em destaque da HXF.</p>
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
                        <p className="text-small text-white text-jost mt-3 lg:text-large">
                            A HXF tem como diferencial a qualidade inquestionável dos produtos e serviços ofertados.
                        </p>
                        <p className="text-small text-white text-jost mt-3 lg:text-large">
                            Além de agilidade na entrega e garantia. Tudo isso com um preço competitivo, para melhor atendermos nossos clientes e parceiros.
                        </p>
                        <p className="text-small text-white text-jost mt-3 lg:text-large">
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
                        <h1 className="text-large font-jost font-bold lg:text-xlarge">Certificações</h1>
                        <p className="text-small font-jost lg:text-large">Abaixo encontram-se as certificações HXF.</p>
                    </div>
                    <hr className="mt-3 mx-2 " />
                    <div className="flex justify-center mt-3">
                        <img src={Medal} alt="Medalha" className="w-32 h-32 " />
                    </div>

                </section>
                <hr className="mt-3 mx-2" />

                <section className="flex p-3 mx-20">
                    <div className="flex flex-col w-1/2 justify-center items-center  border-r border-gray-300 ">
                        <IoEyeOutline color="#0063AE" size='30px' />
                        <p className="text-medium text-black text-jost mt-1 font-bold lg:text-large">Visão</p>
                        <p className="text-small text-black text-jost mt-5 text-center lg:text-medium">Ser referência no mercado como empresa fabricante de produtos e serviços para o segmento industrial metalmecânica e de equipamentos/produtos destinados à construção civil, mineração e afins.</p>
                    </div>
                    <div className="">

                    </div>
                    <div className="flex flex-col w-1/2 h-full justify-center items-center">
                        <GiChest color="#0063AE" size='30px' />
                        <p className="text-medium text-black text-jost mt-1 font-bold lg:text-large">Valores</p>
                        <div className="flex text-small text-black text-jost mt-5 text-center gap-10 items-center">
                            <ul className="flex flex-col items-center list-disc lg:text-medium">
                                <li>Honestidade</li>
                                <li>Integridade</li>
                                <li>Respeito</li>
                            </ul>
                            <ul className="flex flex-col items-center list-disc lg:text-medium">
                                <li>Segurança</li>
                                <li>Inovação</li>
                                <li>Qualidade</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="flex flex-col justify-center text-center mt-5">
                        <p className="text-medium text-black text-jost font-bold lg:text-large">Política de Qualidade</p>
                        <p className=" text-black text-jost mt-3 lg:text-medium ">A HXF compromete-se a fornecer soluções e serviços com alta qualidade sempre buscando a satisfação do cliente através de:</p>

                    </div>
                    <div className="flex justify-center my-5">
                        <ul className="flex text-small text-black text-jost gap-7 text-center mx-auto mt-5">
                            <TfiHeadphoneAlt color="#0063AE" size="20px" />
                            <li className="text-medium text-black text-jost w-1/3">
                                Atender aos requisitos dos clientes
                            </li>
                            <IoSettingsOutline color="#0063AE" size="20px" />
                            <li className="w-1/3 text-medium text-black text-jost">
                                Seguir normas técnicas de mecânica e normas aplicáveis
                            </li>
                            <PiLightbulbThin color="#0063AE" size="20px" />
                            <li className="w-1/3 text-medium text-black text-jost max-sm:text-small">
                                Fornecer soluções aos nossos clientes
                            </li>
                        </ul>
                    </div>

                    <p className="text-center my-5 lg:text-medium">Tudo isso aliado a melhoria continua de nossos processos e serviços.</p>

                </section>
            </main>
            <Footer />
        </>
    )
}