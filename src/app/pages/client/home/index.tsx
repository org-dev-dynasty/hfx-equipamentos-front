import { ImageSlider } from "../../../components/ImageSlider";
import { Navbar } from "../../../components/Navbar";
import { IoEyeOutline } from "react-icons/io5";
import PhotoMaquina from "../../../assets/maquina1.png"
import Medal from "../../../assets/medalha.png"
import { GiChest } from "react-icons/gi";

export function Home() {
    return (
        <>
            <Navbar />
            <ImageSlider />
            <section className="mt-10">
                <div className="text-center">
                    <h1 className="text-large font-jost font-bold">Detalhes</h1>
                    <p className="text-small font-jost ">Abaixo encontram-se os produtos em destaque da HXF.</p>
                </div>
                <hr className="mt-3 mx-2 " />
                <div>

                </div>
            </section>

            <section className="flex mt-5">
                <div className="bg-primary w-3/5 h-86 p-3">
                    <h1 className="text-large font-jost font-bold text-white">Sobre a HFX</h1>
                    <p className="text-small text-white text-jost mt-3">
                        A HXF tem como diferencial a qualidade inquestionável dos produtos e serviços ofertados.
                    </p>
                    <p className="text-small text-white text-jost mt-3">
                        Além de agilidade na entrega e garantia. Tudo isso com um preço competitivo, para melhor atendermos nossos clientes e parceiros.
                    </p>
                    <p className="text-small text-white text-jost mt-3">
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
                    <h1 className="text-large font-jost font-bold">Certificações</h1>
                    <p className="text-small font-jost ">Abaixo encontram-se as certificações HXF.</p>
                </div>
                <hr className="mt-3 mx-2 " />
                <div className="flex justify-center mt-3">
                    <img src={Medal} alt="Medalha" className="w-32 h-32 " />
                </div>

            </section>
            <hr className="mt-3 mx-2" />

            <section className="flex p-3">
                <div className="flex flex-col w-1/2 justify-center items-center">
                    <IoEyeOutline color="#0063AE" size='30px' />
                    <p className="text-medium text-black text-jost mt-1 font-bold">Visão</p>
                    <p className="text-small text-black text-jost mt-5 text-center">Ser referência no mercado como empresa fabricante de produtos e serviços para o segmento industrial metalmecânica e de equipamentos/produtos destinados à construção civil, mineração e afins.</p>
                </div>
                <div >

                </div>
                <div className="flex flex-col w-1/2 justify-center items-center">
                    <GiChest color="#0063AE" size='30px' />
                    <p className="text-medium text-black text-jost mt-1 font-bold">Visão</p>
                    <p className="text-small text-black text-jost mt-5 text-center">Ser referência no mercado como empresa fabricante de produtos e serviços para o segmento industrial metalmecânica e de equipamentos/produtos destinados à construção civil, mineração e afins.</p>
                </div>
            </section>

            <section>
                <div className="flex flex-col justify-center text-center mt-5">
                    <p className="text-medium text-black text-jost font-bold">Política de Qualidade</p>
                    <p className="text-small text-black text-jost mt-3 ">A HXF compromete-se a fornecer soluções e serviços com alta qualidade sempre buscando a satisfação do cliente através de:</p>

                </div>
                <div>

                </div>

            </section>
        </>
    )
}