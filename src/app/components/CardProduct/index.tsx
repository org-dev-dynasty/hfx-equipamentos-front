import { useEffect, useState } from "react";

export function CardProduct({ image, name } : { image: string, name: string}) {
    const [visible, setVisible] = useState(false);
    const [opacity, setOpacity] = useState(0);

    const labelStyle = {
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
        cursor: "pointer"
    }

    function handleNavigate() {
        window.location.href = "/";
    }

    useEffect(() => {
        setTimeout(() => {
            setOpacity(1);
        }, 200);
    }, [])

    return (
        <button type="button" onClick={()=>handleNavigate()} onMouseEnter={()=> setVisible(true)} onMouseLeave={()=> setVisible(false)} className={`duration-500 opacity-${opacity} shadow-2xl rounded-xl hover:cursor-pointer duration-200 hover:scale-105`}>
            <img className="w-full h-72 rounded-t-xl" src={image} alt="Imagem do Produto" />
            <div className="flex flex-col items-center py-4">
                <h5 className="text-center font-semibold">{name}</h5>
                <label style={labelStyle} className="text-primary font-semibold text-small">{`Ver mais >`}</label>
            </div>
        </button>
    )
}