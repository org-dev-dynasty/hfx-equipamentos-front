import { ImageSlider } from "../../../components/ImageSlider";
import { Navbar } from "../../../components/Navbar";
import PhotoCard from "../../../assets/image 11.png"


// import { Gear, Invoice, Leaf, Lightbulb, Timer } from "@phosphor-icons/react";

import { Footer } from "../../../components/Footer";
import { ProductContext } from "../../../context/product_context";
import { useContext, useEffect, useState } from "react";
import { FeedbackSlider } from "../../../components/FeedbackSlider";
import { CardProduct } from "../../../components/CardProduct";

export function Home() {
    const { getAll } = useContext(ProductContext);
    const [products, setProducts] = useState([])

    useEffect(() => {
        const response = getAll()
        response.then((res: any) => {
            setProducts(res.products)
            console.log(res.products)
        }).catch((error) => {
            console.log("error " + error)
        })
    }, [])

    const clients = [
        { nome: 'João', imagem: 'client1.jpg', comentario: 'Ótimo serviço! Recomendo muito.', estrelas: 5 },
        { nome: 'Maria', imagem: 'client2.jpg', comentario: 'Equipe muito profissional e eficiente.', estrelas: 4 },
        { nome: 'Carlos', imagem: 'client3.jpg', comentario: 'Rápidos e eficazes. Superou minhas expectativas.', estrelas: 5 },
        { nome: 'Ana', imagem: 'client4.jpg', comentario: 'Excelente atendimento ao cliente.', estrelas: 5 },
        { nome: 'Pedro', imagem: 'client5.jpg', comentario: 'Serviço de qualidade e preço justo.', estrelas: 4 },
        { nome: 'Pedro', imagem: 'client5.jpg', comentario: 'Serviço de qualidade e preço justo.', estrelas: 4 },
        { nome: 'Pedro', imagem: 'client5.jpg', comentario: 'Serviço de qualidade e preço justo.', estrelas: 4 },
    ];
    return (
        <>
            <Navbar page="Home" />
            <main className="bg-l-gray font-main">
                <ImageSlider />

                <section>
                    <div className="bg-primary">
                        <div className="bg-blue-800">
                            <h1>ExperIência de Mercado</h1>
                            <p>Possuímos uma experiência na indústria da construção civil, com reputação confiável, transmitindo segurança aos nossos clientes ao escolherem os produtos e serviços da HXF.</p>
                        </div>
                    </div>
                </section>


                {/* <div className="w-full mt-10">
                    <section className="flex justify-end relative mt-5  bg-primary h-96 w-2/5 rounded-r-3xl max-sm:w-3/5 mb-5">
                        <div className="self-center w-full p-2">
                            <div className="flex my-auto absolute top-14 bg-blue-800 w-full h-2/3 rounded-3xl self-center p-2 max-md:w-full max-sm:w-full -right-40">
                                <div>
                                    <Invoice size={32} className="text-white ml-2" />
                                </div>
                                <div>
                                    <p className="text-center text-white text-large mt-2 font-bold max-sm:text-medium">ExperIência de Mercado</p>
                                    <p className="text-center  text-white text-medium mt-5 max-sm:text-small ">Possuímos uma experiência na indústria da construção civil, com reputação confiável, transmitindo segurança aos nossos clientes ao escolherem os produtos e serviços da HXF.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="flex flex-row-reverse">
                        <section className="flex justify-start relative mb-5 bg-secondary h-96 w-2/5 rounded-l-3xl max-sm:w-3/5">
                            <div className="flex absolute -left-80 max-lg:top-16 bg-blue-800 w-full rounded-3xl self-center p-2 max-md:-right-10  md:top-2 bottom-2 max-sm:-left-40 ">
                                <div className="">
                                    <Timer size={32} className="text-white ml-2" />
                                </div>
                                <div>
                                    <p className="text-center text-white text-large font-bold max-sm:text-medium ">Eficiência Garantida</p>
                                    <p className="text-center  text-white text-medium mt-5 max-sm:text-small ">Fornecemos soluções eficientes e de alta qualidade para demolição, compactação de solos e mineração, garantindo que nossos clientes possam confiar na HXF para atender às suas necessidades. Nosso suporte especializado garante que você não perca dias de trabalho, devido ao auxílio técnico que irá te auxiliar para minimizar os impactos</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section className="flex justify-end relative mt-5  bg-primary h-96 w-2/5 rounded-r-3xl max-sm:w-3/5 mb-5">
                        <div className="self-center w-full p-2">
                            <div className="flex my-auto absolute top-14 bg-blue-800 w-full h-2/3 rounded-3xl self-center p-2 max-md:w-full max-sm:w-full -right-40">
                                <div>
                                    <Gear size={32} className="text-white ml-2" />
                                </div>
                                <div>
                                    <p className="text-center text-white text-large mt-2 font-bold max-sm:text-medium">Soluções Personalizadas</p>
                                    <p className="text-center  text-white text-medium mt-5 max-sm:text-small ">Oferecemos personalizadas que atendam às necessidades específicas de cada cliente, demonstrando flexibilidade e adaptabilidade para satisfazer os requisitos individuais de cada projeto.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="flex flex-row-reverse">
                        <section className="flex justify-start relative mb-5 bg-secondary h-96 w-2/5 rounded-l-3xl max-sm:w-3/5">
                            <div className="flex absolute -left-80 max-lg:top-16 bg-blue-800 w-full rounded-3xl self-center p-2 max-md:-right-10  md:top-2 bottom-2 max-sm:-left-40 ">
                                <div className="">
                                    <Lightbulb size={32} className="text-white ml-2" />
                                </div>
                                <div>
                                    <p className="text-center text-white text-large font-bold max-sm:text-medium ">Inovação Contínua</p>
                                    <p className="text-center  text-white text-medium mt-5 max-sm:text-small ">Possuímos compromisso com a inovação, destacando o desenvolvimento de soluções de última geração que não apenas melhoram a eficiência operacional, mas também minimizam o impacto ambiental.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    <section className="flex justify-end relative mt-5  bg-primary h-96 w-2/5 rounded-r-3xl max-sm:w-3/5 mb-5">
                        <div className="self-center w-full p-2">
                            <div className="flex my-auto absolute top-14 bg-blue-800 w-full h-2/3 rounded-3xl self-center p-2 max-md:w-full max-sm:w-full -right-40">
                                <div>
                                    <Leaf size={32} className="text-white ml-2" />
                                </div>
                                <div>
                                    <p className="text-center text-white text-large mt-2 font-bold max-sm:text-medium">Sustentabilidade</p>
                                    <p className="text-center  text-white text-medium mt-5 max-sm:text-small ">A HXF pode destacar seu compromisso com a a sustentabilidade, promovendo seus produtos como soluções eficientes e ambientalmente conscientes.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div> */}


                <section className="mt-10">
                    <div className="text-center">
                        <h1 className="text-xlarge text-main font-bold max-md:text-large max-sm:text-medium ">Mais vendidos</h1>
                        <p className="text-large max-md:text-medium max-sm:text-small ">Abaixo encontram-se os produtos em destaque da HXF.</p>
                    </div>
                    <hr className="mt-3 mx-2 " />

                    <div className="flex justify-center">
                        <div className="gap-12 my-8 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                            {products.map((product: any) => {
                                return (
                                    <CardProduct key={product.id} image={product.image} name={product.name} id={product.id} />
                                )
                            })
                            }
                        </div>
                    </div>
                </section>

                <section className="flex justify-center my-10">
                    <div className="relative w-4/6">
                        <img src={PhotoCard} alt="Photo Card" className="object-cover h-full brightness-50 mx-auto" />
                        <p className="absolute bottom-0 p-10 text-white lg:w-4/5 text-2xlarge  md:w-full max-md:text-xlarge sm:w-full max-sm:text-small">
                            Nossas conquistas são melhores mostradas pelos nossos números
                        </p>
                    </div>
                </section>

                <section className="grid grid-cols-3 mx-auto w-4/6 gap-5 max-sm:grid-cols-1">
                    <div className="bg-gray rounded-lg p-2 text-white w-full max-md:w-full mx-auto max-sm:w-5/6">
                        <h1 className=" font-bold lg:text-2xlarge md:text-xlarge sm:text-large">+2 mil</h1>
                        <p className="lg:text-large md:text-medium sm:text-small">Serviços prestados</p>
                    </div>
                    <div className="bg-gray rounded-lg p-2 text-white w-full max-md:w-full mx-auto max-sm:w-5/6">
                        <h1 className="lg:text-2xlarge md:text-xlarge sm:text-large">+13 mil</h1>
                        <p className="lg:text-large md:text-medium sm:text-small">Clientes satisfeitos</p>
                    </div>
                    <div className="bg-gray rounded-lg p-2 text-white w-full max-md:w-full mx-auto max-sm:w-5/6">
                        <h1 className="lg:text-2xlarge md:text-xlarge sm:text-large">+820</h1>
                        <p className="lg:text-large md:text-medium sm:text-small">Especialistas qualificados</p>
                    </div>
                </section>

                <section>
                    <FeedbackSlider clients={clients} />
                </section>

                <section>
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