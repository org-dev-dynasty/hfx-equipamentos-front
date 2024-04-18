import { Navbar } from "../../../components/Navbar";
import { Footer } from "../../../components/Footer";
import { CardProduct } from "../../../components/CardProduct";

import Tools from "../../../assets/Rompedor.png";
import Tools2 from "../../../assets/Tesoura.png";
import Tools3 from "../../../assets/Engate.png";
import Tools4 from "../../../assets/Compactador.png";

export function Product () {
    return (
        <>
        <Navbar page="Product"/>
        <main className="p-8 flex flex-col items-center bg-gray-100 font-jost">
            <h1 className="text-xlarge font-bold text-center">Produtos HXF</h1>
            <p className="w-1/2 max-md:w-full text-small text-center mt-4 mb-12">A HXF tem como diferencial a qualidade inquestionável nos produtos e serviços ofertados, além de agilidade na entrega e garantia. Tudo isso com um preço competitivo, para melhorar atendermos nossos clientes e parceiros.</p>
            
            <div className="h-[1px] w-[90%] bg-primary" />

            <div className="gap-12 my-8 grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
                <CardProduct image={Tools} name="Rompedores Hidráulicos"/>
                <CardProduct image={Tools2} name="Tesoura Hidráulica"/>
                <CardProduct image={Tools3} name="Engate Rápido"/>
                <CardProduct image={Tools4} name="Compactadores"/>
            </div>
        </main>
        <Footer />
        </>
    )
}