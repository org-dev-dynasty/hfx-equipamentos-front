import { FeedbackCard } from '../FeedbackCard';

export const FeedbackSlider = ({ clients }: any) => {
    return (
        <div className="container mx-auto py-10">
            <h2 className="text-xlarge text-center font-bold max-md:text-large max-sm:text-medium ">Feedbacks dos Clientes</h2>

            <div className="flex flex-nowrap overflow-x-auto space-x-4 pb-4 mt-20">
                {clients.map((client: any, index: any) => (
                    <FeedbackCard key={index} {...client} />
                ))}
            </div>
        </div>
    );
};
