import { useEffect, useState } from "react";

import EngateRapido from "../../assets/Engate.png";
import TesouraHidraulica from "../../assets/Tesoura.png";
import Compactadores from "../../assets/Compactador.png";
import Rompedores from "../../assets/Rompedor.png";

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
        <button type="button" onClick={()=>handleNavigate()} onMouseEnter={()=> setVisible(true)} onMouseLeave={()=> setVisible(false)} className={`duration-500 opacity-${opacity} shadow-2xl m-4 rounded-xl hover:cursor-pointer duration-200 hover:scale-105`}>
            <img className="w-full object-cover h-auto rounded-t-xl" src={name == "Engate Rápido" ? EngateRapido : name == "Tesoura Hidráulica" ? TesouraHidraulica : name == "Compactadores" ? Compactadores : name == "Rompedores" ? Rompedores : image} alt="Imagem do Produto" />
            <div className="flex flex-col items-center py-4">
                <h5 className="text-center font-semibold">{name}</h5>
                <label style={labelStyle} className="text-primary font-semibold text-small">{`Ver mais >`}</label>
            </div>
        </button>
    )
}