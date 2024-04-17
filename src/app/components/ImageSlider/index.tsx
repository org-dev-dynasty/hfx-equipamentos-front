import { useEffect, useRef, useState } from 'react';
import Image1 from '../../assets/photo1.png';
import Image2 from '../../assets/photo2.png';

export function ImageSlider() {
    const images = [Image1, Image2, Image1, Image2];
    const refCarousel = useRef<HTMLDivElement>(null);
    const [widthScreen, setWidthScreen] = useState(window.innerWidth);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        const scroll = () => {
            setCurrentImageIndex(currentImageIndex + 1);
            if (currentImageIndex === images.length - 1) {
                setCurrentImageIndex(0);
            }
            refCarousel.current?.scrollTo({
                left: widthScreen * currentImageIndex,
                behavior: 'smooth'
            });
        }

        setWidthScreen(window.innerWidth);
        setTimeout(() => {
            scroll();
        }, 5000);
    }, [currentImageIndex, images.length, widthScreen]);

    useEffect(() => {
        setTimeout(() => {
            setOpacity(100);
        });
    }, []);

    return (
        <section className={`w-full h-[90%] flex items-center duration-500 opacity-${opacity}`}>
            <div className='flex h-full items-center relative bg-black'>
                <div className='w-full h-full flex overflow-x-hidden scroll-smooth' ref={refCarousel}>
                    {images.map((imageUrl, index) => (
                        <img
                            key={index}
                            src={imageUrl}
                            alt={`Image ${index}`}
                            className='w-full h-full object-cover'
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ImageSlider;
