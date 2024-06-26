import { useEffect, useState } from "react";

import EngateRapido from "../../assets/Engate.png";
import TesouraHidraulica from "../../assets/Tesoura.png";
import Compactadores from "../../assets/Compactador.png";
import Rompedores from "../../assets/Rompedor.png";
import Xwhite from "../../assets/apenasXwhite.png";

export function CardProduct({ id, image, name } : { id: string, image: string, name: string}) {
    const [visible, setVisible] = useState(false);
    const [opacity, setOpacity] = useState(0);

    const labelStyle = {
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
        cursor: "pointer"
    }

    function handleNavigate() {
        localStorage.setItem("product", id);
        window.location.href = "/productDetail";
    }

    useEffect(() => {
        setTimeout(() => {
            setOpacity(1);
        }, 200);
    }, [])

    return (
        <button type="button" onClick={()=>handleNavigate()} onMouseEnter={()=> setVisible(true)} onMouseLeave={()=> setVisible(false)} className={`bg-white duration-500 max-sm:w-[72%] opacity-${opacity} shadow-2xl flex flex-col items-center m-4 rounded-xl hover:cursor-pointer duration-200 hover:scale-105`}>
            <div className="relative">
                <img className="w-full object-cover h-60 rounded-t-xl" src={name == "Engate Rápido" ? EngateRapido : name == "Tesoura Hidráulica" ? TesouraHidraulica : name == "Compactadores" ? Compactadores : name == "Rompedores" ? Rompedores : image} alt="Imagem do Produto" />
                <div className="h-full w-full top-0 absolute opacity-0 duration-200 hover:opacity-100 flex justify-center items-center bg-primary bg-opacity-80 rounded-xl">
                    <img className="w-[100px] " src={Xwhite} alt="" />    
                </div>
            </div>
            <div className="flex flex-col items-center py-4">
                <h5 className="text-center font-semibold">{name}</h5>
                <label style={labelStyle} className="text-primary font-semibold text-small">{`Ver mais >`}</label>
            </div>
        </button>
    )
}