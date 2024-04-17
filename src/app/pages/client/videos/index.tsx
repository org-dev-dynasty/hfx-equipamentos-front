import { useState } from "react";
import { Footer } from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import { X } from "@phosphor-icons/react";

const videosData = [
    {
        id: 1,
        title: "Vídeo 1",
        image: "https://example.com/video1.jpg",
        description: "Descrição do Vídeo 1 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
    },
    {
        id: 2,
        title: "Vídeo 2",
        image: "https://example.com/video2.jpg",
        description: "Descrição do Vídeo 2 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
    },
    {
        id: 3,
        title: "Vídeo 3",
        image: "https://example.com/video3.jpg",
        description: "Descrição do Vídeo 3 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
    },
];

export function Videos() {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleVideoClick = (videoId: any) => {
        setSelectedVideo(videoId);
    };

    return (
        <>
            <Navbar page="Videos" />
            <main className="p-8 bg-gray-100 font-jost">
                <h1 className="text-3xl font-bold text-center mb-8">Vídeos</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {videosData.map((video) => (
                        <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            {selectedVideo !== video.id ? (
                                <>
                                    <img src={video.image} alt={video.title} className="w-full h-48 object-cover" />
                                    <div className="p-4">
                                        <h2 className="text-lg font-bold mb-2">{video.title}</h2>
                                        <p className="text-sm text-gray-600">{video.description}</p>
                                    </div>
                                    <button onClick={() => handleVideoClick(video.id)} className="block w-full py-2 text-center bg-primary text-white hover:bg-blue-600 transition duration-300">
                                        Assistir
                                    </button>
                                </>
                            ) : (
                                
                                <div className="relative">
                                    <iframe
                                        src={video.videoUrl}
                                        title={video.title}
                                        width="100%"
                                        height="250px"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="absolute"
                                    ></iframe>
                                    <button onClick={() => setSelectedVideo(null)} className="absolute top-2 right-2 bg-white text-gray-600 rounded-full p-2 hover:bg-gray-200 transition duration-300">
                                        <X size={24}/>
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
