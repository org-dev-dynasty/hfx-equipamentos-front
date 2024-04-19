export const FeedbackCard = ({ nome, imagem, comentario, estrelas }: any) => {
    return (
        <div className="flex-shrink-0 bg-white rounded-lg shadow-lg p-6" style={{ width: '320px' }}>
            <div className="flex items-center mb-4">
                <img src={imagem} alt={nome} className="w-12 h-12 rounded-full mr-4" />
                <p className="font-bold text-large">{nome}</p>
            </div>
            <p className="text-gray-700 mb-4 text-medium">"{comentario}"</p>
            <div className="flex items-center">
                <div className="text-yellow-500 mr-2 text-xlarge">{Array.from({ length: estrelas }).map((_, index) => <span key={index}>★</span>)}</div>
                <span className="text-sm">({estrelas} estrelas)</span>
            </div>
        </div>
    );
};
