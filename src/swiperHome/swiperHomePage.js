import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import './swiperHomePage.css';
// import styles from './swiper.module.css';

// Import Swiper styles
import 'swiper/swiper-bundle.css'


const imageUrls = [
  require('../Images/Gallery/1.jpg'),
  require('../Images/Gallery/2.jpg'),
  require('../Images/Gallery/3.jpg'),
  require('../Images/Gallery/4.jpg'),
  require('../Images/Gallery/5.jpg'),
  require('../Images/Gallery/6.jpg'),
  require('../Images/Gallery/7.jpg'),
  require('../Images/Gallery/8.png'),
  require('../Images/Gallery/9.jpg'),
  require('../Images/Gallery/10.jpg'),
  require('../Images/Gallery/homepage.jpg'),
  require('../Images/Gallery/homepage1.jpg'),
  require('../Images/Gallery/homepage2.jpg')

];

const SwiperHomePageComponent = () => {
  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={400}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {imageUrls.map((imageUrl, index) => (
            <SwiperSlide key={index}>
              <div className="center">
                <img className="swiperimages" src={imageUrl} alt={`slide ${index}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};





export default SwiperHomePageComponent