import { Eye, Gear, Headset, Lightbulb, TreasureChest, ListChecks } from "@phosphor-icons/react"
import PhotoMaquina from "../../../assets/maquina1.png"
import { Navbar } from "../../../components/Navbar"
import { Footer } from "../../../components/Footer";


export function HFX() {
    return (
        <>
            <Navbar page='HFX' />
            <main className="p-8">
                <section className="flex justify-center">
                    <div className="w-1/2 p-4 text-center flex flex-col items-center rounded-xl max-lg:w-full">
                        <h1 className="text-2xlarge font-bold mb-4">Conheça a HFX</h1>
                        <p className="text-medium w-3/4 max-md:w-full">
                            A HXF tem como diferencial a qualidade inquestionável dos produtos e serviços ofertados. 
                            <br /> 
                            <br /> 
                            Além de agilidade na entrega e garantia. Tudo isso com um preço competitivo, para melhor atendermos nossos clientes e parceiros.
                        </p>
                    </div>
                </section>

                <section className="flex flex-col gap-8 mt-8">
                    <div className="w-full flex justify-between bg-secondary text-white rounded-2xl shadow-2xl max-md:flex-col-reverse">
                        <div className="p-8 flex flex-col gap-8">
                            <div className="flex items-center text-2xlarge gap-4">
                                <h2>Missão</h2>
                                <ListChecks size={64} />
                            </div>
                            <p className="text-large">
                                Nossa missão é oferecer ao mercado soluções em diversas áreas industriais, fabricação, manutenção e montagem de equipamentos industriais, soluções e implementos para escavadeiras e afins, serviços de caldeiraria e usinagem.
                            </p>
                        </div>
                        <img className="w-2/6 object-cover rounded-2xl max-md:w-full" src={PhotoMaquina} alt="Foto da maquina"/>
                    </div>

                    <div className="w-full flex flex-row-reverse justify-between bg-primary text-white rounded-2xl shadow-2xl max-md:flex-col-reverse">
                        <div className="p-8 flex flex-col gap-8">
                            <div className="flex flex-row-reverse items-center text-2xlarge gap-4 max-md:flex-row">
                                <Eye size={64} />
                                <h2>Visão</h2>
                            </div>
                            <p className="text-large text-end max-md:text-start">
                                Ser referência no mercado como empresa fabricante de produtos e serviços para o segmento industrial metalmecânica e de equipamentos ou produtos destinados à construção civil, mineração e afins.
                            </p>
                        </div>
                        <img className="w-2/6 rounded-2xl max-md:w-full" src={PhotoMaquina} alt="Foto da maquina"/>
                    </div>
                    <div className="w-full flex justify-between bg-secondary text-white rounded-2xl shadow-2xl max-md:flex-col-reverse">
                        <div className="p-8 flex flex-col gap-8">
                            <div className="flex items-center gap-4">
                                <h2 className="text-2xlarge">Valores</h2>
                                <TreasureChest size={64} />
                            </div>
                            <ul className="ml-8 list-disc text-large">
                                <li>Honestidade</li>
                                <li>Integridade</li>
                                <li>Respeito</li>
                                <li>Segurança</li>
                                <li>Inovação</li>
                                <li>Qualidade</li>
                            </ul>
                        </div>
                        <img className="w-2/6 rounded-2xl max-md:w-full" src={PhotoMaquina} alt="Foto da maquina"/>
                    </div>
                </section>

                <section className="flex flex-col p-8">
                    <div className="flex flex-col text-center items-center">
                        <h2 className="text-2xlarge font-bold">Política de Qualidade</h2>
                        <p className="text-medium">A HXF compromete-se a fornecer soluções e serviços com alta qualidade sempre buscando a satisfação do cliente através de:</p>
                    </div>

                    <div className="flex justify-evenly mt-8 gap-4 max-md:flex-col">
                        <div className="flex flex-col items-center">
                            <div className="bg-white p-2 rounded-full border-2 border-primary">
                                <Headset color="#0063AE" size={64}/>
                            </div>
                            <label className="text-medium w-1/2 text-center">Atender aos requisitos dos clientes</label>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-white p-2 rounded-full border-2 border-primary">
                                <Gear color="#0063AE" size={64}/>
                            </div>
                            <label className="text-medium w-1/2 text-center">Seguir normas técnicas de mecânica e normas aplicáveis</label>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="bg-white p-2 rounded-full border-2 border-primary">
                                <Lightbulb color="#0063AE" size={64}/>
                            </div>
                            <label className="text-medium w-1/2 text-center">Fornecer soluções aos nossos clientes</label>
                        </div>
                    </div>

                    <p className="text-center mt-12 text-medium">Tudo isso aliado a melhoria continua de nossos processos e serviços.</p>
                </section>
            </main>
            <Footer />
        </>
    )
}