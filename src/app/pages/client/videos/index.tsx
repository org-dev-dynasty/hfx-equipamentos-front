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
            <main className="p-8 bg-gray-100 font-main">
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

                <section>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.418004768813!2d-46.60970718789276!3d-23.6967623786182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce446410aff7f9%3A0x3b653ae235cc43c5!2sR.%20Marte%2C%2081%20-%20Serraria%2C%20Diadema%20-%20SP%2C%2009981-540!5e0!3m2!1spt-BR!2sbr!4v1713319162086!5m2!1spt-BR!2sbr" 
                        height="400"
                        loading="lazy"
                        className='p-4 w-full'
                    ></iframe>
                </section>
            </main>
            <Footer />
        </>
    );
}
