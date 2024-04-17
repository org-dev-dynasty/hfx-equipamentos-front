import { useState } from "react";

export function CardProduct({ image, name } : { image: string, name: string}) {
    const [visible, setVisible] = useState(false);

    const labelStyle = {
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
        cursor: "pointer"
    }

    return (
        <div onMouseEnter={()=> setVisible(true)} onMouseLeave={()=> setVisible(false)} className="shadow-2xl rounded-xl hover:cursor-pointer">
            <img className="w-80 rounded-t-xl" src={image} alt="Imagem do Produto" />
            <div className="flex flex-col items-center py-4">
                <h5 className="text-center font-semibold">{name}</h5>
                <label style={labelStyle} className="text-primary font-semibold text-small">{`Ver mais >`}</label>
            </div>
        </div>
    )
}