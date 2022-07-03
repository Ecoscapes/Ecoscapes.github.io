import './index.css';
import Carousel, { CarouselItem } from "./Carousel/Carousel.js"

const Gallery = () => {
    return (
        <div className="gallery">
            <Carousel>
                <CarouselItem><div className='imageOne'></div></CarouselItem>
                <CarouselItem><div className='imageTwo'></div></CarouselItem>
                <CarouselItem><div className='imageThree'></div></CarouselItem>
                <CarouselItem><div className='imageFour'></div></CarouselItem>
                <CarouselItem><div className='imageFive'></div></CarouselItem>
                <CarouselItem><div className='imageSix'></div></CarouselItem>
                <CarouselItem><div className='imageSeven'></div></CarouselItem>
                <CarouselItem><div className='imageEight'></div></CarouselItem>
                <CarouselItem><div className='imageNine'></div></CarouselItem>
                <CarouselItem><div className='imageA'></div></CarouselItem>
                <CarouselItem><div className='imageB'></div></CarouselItem>
                <CarouselItem><div className='imageC'></div></CarouselItem>
                <CarouselItem><div className='imageD'></div></CarouselItem>
                <CarouselItem><div className='imageE'></div></CarouselItem>
                <CarouselItem><div className='imageF'></div></CarouselItem>
                <CarouselItem><div className='imageG'></div></CarouselItem>
                <CarouselItem><div className='imageH'></div></CarouselItem>
                <CarouselItem><div className='imageI'></div></CarouselItem>
            </Carousel>
        </div>
    );
}

export default Gallery;