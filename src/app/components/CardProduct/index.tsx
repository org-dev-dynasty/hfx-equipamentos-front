export function CardProduct({ image, name } : { image: string, name: string}) {
    return (
        <div className="shadow-2xl rounded-xl">
            <img className="w-80 rounded-t-xl" src={image} alt="Imagem do Produto" />
            <h5 className="text-center p-4 font-semibold">{name}</h5>
        </div>
    )
}