import { useEffect, useState } from 'react';
import Image1 from '../../assets/photo1.png';
import Image2 from '../../assets/photo2 (1).png';
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

export function ImageSlider() {
    const images = [Image1, Image2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [opacity, setOpacity] = useState(0);

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        setTimeout(() => {
            setOpacity(1);
        }, 200);
    })

    return (
        <section className={`opacity-${opacity} duration-500`}>
            <div className="flex w-full space-x-4 transition-transform duration-500 ease-in-out transform">
                {images.map((imageUrl, index) => (
                    <img
                        key={index}
                        src={imageUrl}
                        alt={`Image ${index}`}
                        className={`object-cover  ${index === currentImageIndex ? 'block' : 'hidden'}`}
                    />
                ))}
            </div>

            
            <div className="absolute flex justify-between w-full top-1/2  transform -translate-y-1/2 max-lg:hidden">
                <button onClick={goToPreviousImage} className="bg-transparent p-2 rounded-full mr-2">
                    <IoIosArrowBack color='white' size='40px' />
                </button>

                <button onClick={goToNextImage} className="bg-transparent p-2 rounded-full ">
                    <IoIosArrowForward color='white' size='40px' />
                </button>
            </div>
        </section>
    );
}

export default ImageSlider;
