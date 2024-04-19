export const FeedbackCard = ({ nome, imagem, comentario, estrelas }: any) => {
    return (
        <div className="flex-shrink-0 bg-blue-800 text-white rounded-lg shadow-lg p-4 md:p-6 w-full md:w-80 max-sm:w-60">
            <div className="flex items-center mb-4 rounded-full">
                <img src={imagem} alt={nome} className="w-12 h-12 rounded-full mr-4" />
                <p className="font-bold text-lg md:text-xl">{nome}</p>
            </div>
            <p className="text-gray-700 mb-4 text-sm md:text-base">"{comentario}"</p>
            <div className="flex items-center ">
                <div className="text-secondary mr-2 text-base md:text-xl">
                    {Array.from({ length: estrelas }).map((_, index) => (
                        <span key={index}>★</span>
                    ))}
                </div>
                <span className="text-xs md:text-sm">({estrelas} estrelas)</span>
            </div>
        </div>
    );
};

