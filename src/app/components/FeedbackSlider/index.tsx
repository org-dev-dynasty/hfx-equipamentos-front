import { FeedbackCard } from '../FeedbackCard';

export const FeedbackSlider = ({ clients }: any) => {
    return (
        <div className="container mx-auto py-10">
            <h2 className="text-2xl font-bold mb-4">Feedbacks dos Clientes</h2>

            <div className="flex overflow-x-auto space-x-4">
                {clients.map((client: any , index: any) => (
                    <FeedbackCard key={index} {...client} />
                ))}
            </div>
        </div>
    );
};
